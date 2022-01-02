export default function SongArtist({ artist, askForSongMeta }) {
  return (
    <p className="songInfo" onClick={() => askForSongMeta("artist")}>
      <span className="songInfoContent">
        <strong>Artist: </strong>
        {artist}
      </span>
    </p>
  );
}
