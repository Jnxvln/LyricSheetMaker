import SongTitle from "./SongTitle";
import SongComposer from "./SongComposer";
import SongArtist from "./SongArtist";
import LyricsBy from "./LyricsBy";

export default function MetaHead({
  songTitle,
  artist,
  composer,
  lyricsBy,
  askForSongMeta
}) {
  return (
    <header>
      <SongTitle title={songTitle} askForSongMeta={askForSongMeta} />

      <div className="songMetaDetails">
        <SongArtist artist={artist} askForSongMeta={askForSongMeta} />

        <SongComposer composer={composer} askForSongMeta={askForSongMeta} />

        <LyricsBy lyricsBy={lyricsBy} askForSongMeta={askForSongMeta} />
      </div>
    </header>
  );
}
