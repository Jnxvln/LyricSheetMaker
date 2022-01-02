import LineHeight from "./LineHeight";
import WordSpacing from "./WordSpacing";

export default function Control({
  lineHeight,
  wordSpacing,
  handleControlUpdate
}) {
  return (
    <section className="no-print lyricControls">
      <LineHeight
        lineHeight={lineHeight}
        handleControlUpdate={handleControlUpdate}
      />

      <WordSpacing
        wordSpacing={wordSpacing}
        handleControlUpdate={handleControlUpdate}
      />
    </section>
  );
}
