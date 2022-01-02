export default function LyricsBox({ lyrics, handleChangeLyrics }) {
  return (
    <div className="field no-print">
      <label>Lyrics: </label>
      <br />
      <textarea
        value={lyrics}
        onChange={handleChangeLyrics}
        rows={8}
        cols={60}
      ></textarea>
    </div>
  );
}
