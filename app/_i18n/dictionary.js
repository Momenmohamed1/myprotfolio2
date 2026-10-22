/**
 * كل نصوص الموقع في مكان واحد.
 *
 * الرموز داخل النصوص:
 *   **نص**  => أخضر (teal-600)
 *   __نص__  => تدرّج أزرق/أخضر (gradient)
 */
export const dictionaries = {
  en: {
    dir: "ltr",
    nav: {
      brand: "Momen",
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      langLabel: "Change language",
      switchToArabic: "Switch to Arabic",
      switchToEnglish: "Switch to English",
    },
    theme: {
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
    },
    hero: {
      hello: "Hello, I'm",
      name: "Momen Mohamed",
      role: "Frontend Developer |",
      bio: "I build modern, responsive, and user-friendly web experiences using React.js, Next.js, and Tailwind CSS. Currently learning backend development to become a Full-Stack Developer.",
      contact: "Contact Me",
      projects: "View Projects",
      imageAlt: "Momen Mohamed",
    },
    about: {
      title: "About Me",
      paragraphs: [
        "Hi, I'm **Momen** — a passionate web developer and a **Mechatronics** student at __New Cairo Technological University.__ My passion for programming motivates me to continuously learn, explore new technologies, and build modern web applications.",
        "I've learned __Frontend Development__ and worked with technologies like HTML, CSS, JavaScript, React.js, Next.js, and Tailwind CSS. Currently, I'm learning **Backend Development** to expand my skills and work toward becoming a **Full-Stack Developer.**",
        "I enjoy turning ideas into interactive web experiences, solving problems, and improving my skills through hands-on projects. My goal is to become a skilled **Full-Stack Developer** and build useful, high-quality web applications.",
      ],
      downloadCv: "Download CV",
      letsConnect: "Let's Connect",
      imageAlt: "About Momen Mohamed",
      side: {
        education: {
          title: "Education",
          line1: "New Cairo Technological University.",
          line2: "Mechatronics Department",
        },
        focus: {
          title: "Current Focus",
          line1: "Frontend Development",
          line2: "React.js | Next.js | Tailwind CSS",
        },
        learning: {
          title: "Learning",
          line1: "Backend Development",
          line2: "Node.js  |  Vue.js  |  Laravel",
        },
        goal: {
          title: "Goal",
          line1: "Full-Stack Developer",
          line2: "Build . Learn . Grow",
        },
      },
    },
    skills: {
      title: "My Skills",
      items: [
        "Markup Language",
        "Styling Language",
        "Programming Language",
        "Frontend Library",
        "React Framework",
        "Utility-First CSS",
        "Typed Superset of JavaScript",
      ],
    },
    projects: {
      title: "My Projects",
      liveDemo: "Live Demo",
      emptyTitle: "🚧 Projects coming soon",
      emptyText: "I'm currently building new projects — they'll be featured here very soon.",
    },
    contact: {
      title: "Connect Me",
      heading: "Let's Talk",
      intro:
        "Have some big idea or brand to develop and need help? Then reach out — we'd love to hear about your project and provide help.",
      emailTitle: "Email",
      mailLabel: "Mail",
      socialsTitle: "Socials",
      form: {
        name: "Name",
        namePlaceholder: "Momen",
        email: "Email",
        emailPlaceholder: "momen@gmail.com",
        phone: "Phone number",
        phonePlaceholder: "+201234567890",
        message: "Message",
        messagePlaceholder: "Write message",
        send: "Send message",
        sending: "Sending...",
        sent: "Message sent. Thank you!",
        error: "Something went wrong. Try again.",
      },
    },
    footer: {
      tagline:
        "Frontend Developer building modern, responsive, and user-friendly web experiences.",
      quickLinks: "Quick links",
      connect: "Let's connect",
      rights: (year) => `© ${year} Momen Mohamed. Built with Next.js and Tailwind CSS.`,
    },
    pageUp: "Back to top",
  },

  ar: {
    dir: "rtl",
    nav: {
      brand: "مؤمن",
      home: "الرئيسية",
      about: "نبذة عني",
      skills: "مهاراتي",
      projects: "المشاريع",
      contact: "تواصل معي",
      openMenu: "افتح القائمة",
      closeMenu: "اقفل القائمة",
      langLabel: "تغيير اللغة",
      switchToArabic: "التبديل للعربية",
      switchToEnglish: "التبديل للإنجليزية",
    },
    theme: {
      toLight: "التبديل للوضع الفاتح",
      toDark: "التبديل للوضع الغامق",
    },
    hero: {
      hello: "أهلاً، أنا",
      name: "مؤمن محمد",
      role: "مطوّر واجهات أمامية |",
      bio: "ببني تجارب ويب عصرية ومتجاوبة وسهلة الاستخدام بـ React.js و Next.js و Tailwind\u00A0CSS. حاليًا بتعلّم تطوير الواجهات الخلفية عشان أبقى مطوّر Full-Stack.",
      contact: "تواصل معي",
      projects: "شوف المشاريع",
      imageAlt: "مؤمن محمد",
    },
    about: {
      title: "نبذة عني",
      paragraphs: [
        "أهلاً، أنا **مؤمن** — مطوّر ويب شغوف، وطالب في قسم **الميكاترونكس** بـ __جامعة القاهرة الجديدة التكنولوجية.__ شغفي بالبرمجة بيحفّزني أتعلّم باستمرار، وأستكشف تقنيات جديدة، وأبني تطبيقات ويب حديثة.",
        "اتعلمت __تطوير الواجهات الأمامية__ واشتغلت على تقنيات زي HTML و CSS و JavaScript و React.js و Next.js و Tailwind\u00A0CSS. حاليًا بتعلّم **تطوير الواجهات الخلفية** عشان أوسّع مهاراتي وأقرّب من هدف إني أبقى **مطوّر Full-Stack.**",
        "بحب أحوّل الأفكار لتجارب ويب تفاعلية، وأحل المشكلات، وأطوّر مهاراتي من خلال مشاريع عملية. وهدفي إني أبقى **مطوّر Full-Stack** محترف وأبني تطبيقات ويب مفيدة وعالية الجودة.",
      ],
      downloadCv: "تحميل السيرة الذاتية",
      letsConnect: "تواصل معي",
      imageAlt: "صورة مؤمن محمد",
      side: {
        education: {
          title: "التعليم",
          line1: "جامعة القاهرة الجديدة التكنولوجية.",
          line2: "قسم الميكاترونكس",
        },
        focus: {
          title: "التركيز الحالي",
          line1: "تطوير الواجهات الأمامية",
          line2: "React.js | Next.js | Tailwind CSS",
        },
        learning: {
          title: "بتعلّم",
          line1: "تطوير الواجهات الخلفية",
          line2: "Node.js  |  Vue.js  |  Laravel",
        },
        goal: {
          title: "الهدف",
          line1: "مطوّر Full-Stack",
          line2: "أبني . أتعلّم . أتطور",
        },
      },
    },
    skills: {
      title: "مهاراتي",
      items: [
        "لغة ترميز",
        "لغة تنسيق",
        "لغة برمجة",
        "مكتبة واجهات أمامية",
        "إطار عمل React",
        "CSS بمنهج Utility-First",
        "امتداد مُعرّف لـ JavaScript",
      ],
    },
    projects: {
      title: "مشاريعي",
      liveDemo: "عرض مباشر",
      emptyTitle: "🚧 مشاريع جديدة قريبًا",
      emptyText: "بشتغل على مشاريع جديدة — هتظهر هنا قريب جدًا.",
    },
    contact: {
      title: "تواصل معي",
      heading: "خلّينا نتكلم",
      intro:
        "عندك فكرة كبيرة أو براند عايز تطوّره ومحتاج مساعدة؟ ابعتلي — يسعدني أسمع عن مشروعك وأساعدك.",
      emailTitle: "البريد الإلكتروني",
      mailLabel: "البريد",
      socialsTitle: "حساباتي",
      form: {
        name: "الاسم",
        namePlaceholder: "مؤمن",
        email: "البريد الإلكتروني",
        emailPlaceholder: "momen@gmail.com",
        phone: "رقم الهاتف",
        phonePlaceholder: "+201234567890",
        message: "الرسالة",
        messagePlaceholder: "اكتب رسالتك",
        send: "إرسال الرسالة",
        sending: "جارٍ الإرسال...",
        sent: "تم إرسال الرسالة. شكرًا لك!",
        error: "حدث خطأ ما. جرّب تاني.",
      },
    },
    footer: {
      tagline: "مطوّر واجهات أمامية بيبني تجارب ويب عصرية ومتجاوبة وسهلة الاستخدام.",
      quickLinks: "روابط سريعة",
      connect: "تواصل معي",
      rights: (year) => `© ${year} مؤمن محمد. مبني بـ Next.js و Tailwind CSS.`,
    },
    pageUp: "العودة لأعلى",
  },
};

export const DEFAULT_LANG = "en";
