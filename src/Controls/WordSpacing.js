const getCurrentWordSpacing = (wordSpacing) => {
  let spacing = wordSpacing.toString().split("rem");
  return spacing[0];
};

export default function WordSpacing({ wordSpacing, handleControlUpdate }) {
  return (
    <div className="field">
      <label>Word Spacing</label>
      <input
        type="range"
        name="wordSpacing"
        className="control"
        value={getCurrentWordSpacing(wordSpacing)}
        onChange={handleControlUpdate}
        min={0}
        max={4}
        step={0.1}
      />
      <br />
      <div style={{ textAlign: "center" }}>
        <small>{wordSpacing}</small>
      </div>
    </div>
  );
}
