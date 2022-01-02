import { useState, useEffect } from "react";
import Stanza from "./Stanza";
import MetaHead from "./Meta/MetaHead";
import Controls from "./Controls/Controls";
import LineHeight from "./Controls/LineHeight";
import WordSpacing from "./Controls/WordSpacing";
import LyricsBox from "./Controls/LyricsBox";
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
    // console.log("APP.JS: Selected Word: ", selectedWord);
  };

  const handleControlUpdate = (evt) => {
    // console.log(evt);
    if (evt.target.name === "wordSpacing") {
      setState({
        ...state,
        [evt.target.name]: `${evt.target.value.toString()}rem`
      });
    } else {
      console.log("evt.target.name: ", evt.target.name);
      setState({
        ...state,
        [evt.target.name]: evt.target.value.toString()
      });
    }
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

  // Initialize document root styles (binds lineHeight and wordSpacing in the CSS)
  let root = document.documentElement;
  root.style.setProperty("--line-height", state.lineHeight);
  root.style.setProperty("--word-spacing", state.wordSpacing);

  // INITIALIZE (Runs Once)
  useEffect(() => {
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
        // SONG META HEADER
        <MetaHead
          songTitle={state.song.title}
          composer={state.song.composer}
          artist={state.song.artist}
          lyricsBy={state.song.lyricsBy}
          askForSongMeta={askForSongMeta}
        />
      )}

      {/* CONTROLS */}
      <Controls
        lineHeight={state.lineHeight}
        wordSpacing={state.wordSpacing}
        handleControlUpdate={handleControlUpdate}
      />

      {/* LYRICS TEXTAREA */}
      <LyricsBox
        lyrics={state.lyrics}
        handleChangeLyrics={handleChangeLyrics}
      />

      {/* STANZA */}
      <div id="stanza0" className="stanza">
        <Stanza onWordClicked={onWordClicked} lyrics={state.lyrics} />
      </div>
    </div>
  );
}
