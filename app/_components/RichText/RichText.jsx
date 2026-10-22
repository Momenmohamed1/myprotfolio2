/**
 * RichText — يحوّل رموز بسيطة جوه النص لعناصر ملوّنة:
 *   **نص**  => أخضر (teal)
 *   __نص__  => تدرّج أزرق/أخضر
 */
const GRADIENT = "bg-linear-to-r/srgb from-indigo-500 to-teal-400 bg-clip-text text-transparent";
const TEAL = "text-teal-600 dark:text-teal-400";

export default function RichText({ text = "" }) {
  const nodes = [];
  const regex = /(__|\*\*)(.+?)\1/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(
      <span key={key++} className={match[1] === "__" ? GRADIENT : TEAL}>
        {match[2]}
      </span>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <>{nodes}</>;
}
