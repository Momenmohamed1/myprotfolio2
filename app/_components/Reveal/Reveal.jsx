"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal — يخلي المحتوى يظهر ببطء (fade + slide) لما يدخل الشاشة مع السكرول.
 * كل الأنيميشن بـ Tailwind utilities (transition / translate / opacity / blur).
 *
 * Props:
 *  - direction: "up" | "down" | "left" | "right" | "scale"
 *  - delay: تأخير الظهور بالمللي ثانية (للـ stagger بين العناصر)
 *  - duration: مدة الأنيميشن بالمللي ثانية
 *  - once: لو true يظهر مرة واحدة وميختفيش تاني
 *  - as: التاج (div / section / li / span ...)
 */
const HIDDEN_STATE = {
  up: "opacity-0 translate-y-[44px]",
  down: "opacity-0 -translate-y-[44px]",
  left: "opacity-0 -translate-x-[56px]",
  right: "opacity-0 translate-x-[56px]",
  scale: "opacity-0 scale-[0.93] blur-[6px]",
};

export default function Reveal({
  children,
  as: Tag = "div",
  direction = "up",
  delay = 0,
  duration = 850,
  once = true,
  className = "",
  style,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    // لو المستخدم مفعّل "تقليل الحركة" نعرض المحتوى مباشرة بدون أنيميشن
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setReduced(true);
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const transitionClasses = reduced
    ? ""
    : "transition-[opacity,transform,filter] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform]";

  const stateClasses = visible
    ? "opacity-100 translate-x-0 translate-y-0 scale-100 blur-0"
    : HIDDEN_STATE[direction] ?? HIDDEN_STATE.up;

  return (
    <Tag
      ref={ref}
      className={`${transitionClasses} ${stateClasses} ${className}`.trim()}
      style={{
        transitionDelay: reduced ? undefined : `${delay}ms`,
        transitionDuration: reduced ? undefined : `${duration}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
