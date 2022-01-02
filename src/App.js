import { useState, useEffect } from "react";
import Stanza from "./Stanza";
import SongTitle from "./Meta/SongTitle";
import SongArtist from "./Meta/SongArtist";
import "./styles.css";

export default function App() {
  const [state, setState] = useState({
    song: {
      title: "My First Song",
      artist: "John Doe",
      composer: "Lily Doe",
      lyricsBy: "Lily Doe"
    },
    lyrics:
      "This is my first line\nThis is my second line\nThis is my third line\nThis is my fourth line",
    lineHeight: 2.6,
    wordSpacing: 0.6
  });

  // #region FUNCTIONS =================================================

  const onWordClicked = (evt, selectedWord) => {
    // console.log("APP.JS: Selected Word EVT: ", evt);
    console.log("APP.JS: Selected Word: ", selectedWord);
  };

  const handleControlUpdate = (evt) => {
    // console.log(evt)
    if (evt.target.name === "wordSpacing") {
      setState({
        ...state,
        [evt.target.name]: `${evt.target.value.toString()}rem`
      });
    } else {
      setState({
        ...state,
        [evt.target.name]: evt.target.value.toString()
      });
    }
  };

  const getCurrentWordSpacing = () => {
    let spacing = state.wordSpacing.toString().split("rem");
    return spacing[0];
  };

  const askForSongMeta = (meta) => {
    switch (meta) {
      case "title":
        const title = prompt("Enter title name: ");
        setState({
          ...state,
          song: {
            ...state.song,
            title
          }
        });
        break;
      case "artist":
        const artist = prompt("Enter artist name: ");
        setState({
          ...state,
          song: {
            ...state.song,
            artist
          }
        });
        break;
      case "composer":
        const composer = prompt("Enter composer name: ");
        setState({
          ...state,
          song: {
            ...state.song,
            composer
          }
        });
        break;
      case "lyricsBy":
        const lyricsBy = prompt("Enter lyricist name: ");
        setState({
          ...state,
          song: {
            ...state.song,
            lyricsBy
          }
        });
        break;
      default:
        break;
    }
  };

  const handleChangeLyrics = (evt) => {
    if (evt.target.value && evt.target.value.length > 0) {
      setState({
        ...state,
        lyrics: evt.target.value
      });
    } else {
      // If no lyrics, use an empty string to avoid React error
      setState({
        ...state,
        lyrics: evt.target.value + ""
      });
    }
  };

  // CALL ONCE - Initialize
  useEffect(() => {
    // Initialize document root styles
    let root = document.documentElement;
    root.style.setProperty("--line-height", state.lineHeight);
    root.style.setProperty("--word-spacing", state.wordSpacing);

    // wordSpacing is a Number, but neets to be a string with "rem" appended
    if (state.wordSpacing.toString().split("rem").length <= 1) {
      setState({
        ...state,
        wordSpacing: state.wordSpacing + "rem"
      });
    }
  }, []);

  // #endregion ========================================================

  return (
    <div className="App">
      {state.song && (
        <header>
          <SongTitle title={state.song.title} askForSongMeta={askForSongMeta} />

          <div
            style={{
              marginTop: "1.2rem",
              textAlign: "right",
              paddingRight: "1rem"
            }}
          >
            <SongArtist
              artist={state.song.artist}
              askForSongMeta={askForSongMeta}
            />

            {state.song.composer && state.song.composer.length > 0 && (
              <p
                className="songInfo"
                onClick={() => askForSongMeta("composer")}
              >
                <span className="songInfoContent">
                  <strong>Composer: </strong>
                  {state.song.composer}
                </span>
              </p>
            )}

            {state.song.lyricsBy && state.song.lyricsBy.length > 0 && (
              <p
                className="songInfo"
                onClick={() => askForSongMeta("lyricsBy")}
              >
                <span className="songInfoContent">
                  <strong>Lyrics by: </strong>
                  {state.song.lyricsBy}
                </span>
              </p>
            )}
          </div>
        </header>
      )}

      {/* CONTROLS */}
      <div className="no-print lyricControls">
        {/* LINE HEIGHT CONTROL */}
        <div className="field" style={{ marginRight: "2rem" }}>
          <label>Line Height</label>
          <input
            type="range"
            name="lineHeight"
            className="control"
            value={state.lineHeight}
            onChange={handleControlUpdate}
            min={1}
            max={10}
            step={0.1}
          />
          <br />
          <div style={{ textAlign: "center" }}>
            <small>{state.lineHeight}</small>
          </div>
        </div>

        {/* WORD SPACING CONTROL */}
        <div className="field">
          <label>Word Spacing</label>
          <input
            type="range"
            name="wordSpacing"
            className="control"
            value={getCurrentWordSpacing()}
            onChange={handleControlUpdate}
            min={0}
            max={4}
            step={0.1}
          />
          <br />
          <div style={{ textAlign: "center" }}>
            <small>{state.wordSpacing}</small>
          </div>
        </div>
      </div>

      {/* LYRICS TEXTAREA */}
      <div className="field no-print">
        <label>Lyrics: </label>
        <br />
        <textarea
          value={state.lyrics}
          onChange={handleChangeLyrics}
          rows={8}
          cols={60}
        ></textarea>
      </div>

      {/* STANZA */}
      <div id="stanza0" className="stanza">
        <Stanza onWordClicked={onWordClicked} lyrics={state.lyrics} />
      </div>
    </div>
  );
}
