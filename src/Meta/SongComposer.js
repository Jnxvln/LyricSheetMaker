export default function SongComposer({ composer, askForSongMeta }) {
  return (
    <p className="songInfo" onClick={() => askForSongMeta("composer")}>
      <span className="songInfoContent">
        <strong>Composer: </strong>
        {composer}
      </span>
    </p>
  );
}
