export default function LyricsBy({ author, askForSongMeta }) {
  return (
    <p className="songInfo" onClick={() => askForSongMeta("lyricsBy")}>
      <span className="songInfoContent">
        <strong>Lyrics by: </strong>
        {author}
      </span>
    </p>
  );
}
