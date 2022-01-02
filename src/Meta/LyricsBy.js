export default function LyricsBy({ lyricsBy, askForSongMeta }) {
  return (
    <p className="songInfo" onClick={() => askForSongMeta("lyricsBy")}>
      <span className="songInfoContent">
        <strong>Lyrics by: </strong>
        {lyricsBy}
      </span>
    </p>
  );
}
