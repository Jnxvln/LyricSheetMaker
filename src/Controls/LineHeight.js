export default function LineHeight({ lineHeight, handleControlUpdate }) {
  return (
    <div className="field" style={{ marginRight: "2rem" }}>
      <label>Line Height</label>
      <input
        type="range"
        name="lineHeight"
        className="control"
        value={lineHeight}
        onChange={handleControlUpdate}
        min={1}
        max={10}
        step={0.1}
      />
      <br />
      <div style={{ textAlign: "center" }}>
        <small>{lineHeight}</small>
      </div>
    </div>
  );
}
