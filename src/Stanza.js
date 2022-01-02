import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Word from "./Word";

export default function Stanza({ lyrics, onWordClicked }) {
  // #region STATE =====================================
  const [state, setState] = useState({
    selectedWord: undefined
  });
  // #endregion =========================================

  // #region FUNCTIONS =================================

  const setSelectedWord = (evt) => {
    const wordClicked = evt.target;
    const wordGeometry = evt.target.getBoundingClientRect();

    const textContent = wordClicked.getAttribute("text");

    // Create a single object with properties from both objects
    // (this will be the primary object used to target each word)
    const wordObj = {
      wordId: wordClicked.id,
      text: textContent,
      classList: [...wordClicked.classList],
      x: wordGeometry.x,
      y: wordGeometry.y,
      width: wordGeometry.width,
      height: wordGeometry.height,
      top: wordGeometry.top,
      right: wordGeometry.right,
      bottom: wordGeometry.bottom,
      left: wordGeometry.left,
      toJSON: wordGeometry.toJSON
    };

    // Set state for selectedWord
    setState({
      ...state,
      selectedWord: wordObj
    });
  };

  const handleWordClicked = async (evt, chordSpanId) => {
    // First, set the selectedWord in state
    await setSelectedWord(evt);

    // Run parent's onWordClicked handler?
    onWordClicked(evt, state.selectedWord);

    // console.log("Chord Span ID: ", chordSpanId);

    const chordSpanElm = document.querySelector(`#${chordSpanId}`);

    const userChord = prompt("Enter a Chord: ", "Am7");

    const elm = React.createElement(
      "span",
      { className: "chordSpan" },
      userChord
    );
    ReactDOM.render(elm, chordSpanElm);

    // console.log("CHORD SPAN ELM: ", chordSpanElm);
  };

  const generateWords = (lyrics) => {
    if (!lyrics && lyrics !== "") {
      return new Error("ERROR: Stanza expects lyrics (String)");
    }

    // Split lyrics into lines via newline character
    let lines = lyrics.split("\n");

    let wordCount = 0;
    return lines.map((line, lineIndex) => {
      // Isolate individual words
      let words = line.split(" ");
      wordCount += words.length;

      // Map through each line
      return words.map((word, wordIndex) => {
        // If it's the last word in the line, append a newline
        if (wordIndex + 1 >= words.length) {
          word += "\n";
        }

        // Render each word as a Word Component
        return (
          <span key={`line${lineIndex}_word${wordIndex}`}>
            <span
              className="chordSpanTarget"
              id={`chordForLine${lineIndex}Word${wordIndex}`}
            ></span>
            <Word
              key={`line${lineIndex}_word${wordIndex}`}
              onWordClick={(evt) =>
                handleWordClicked(
                  evt,
                  `chordForLine${lineIndex}Word${wordIndex}`
                )
              }
              lineIndex={lineIndex}
              wordIndex={wordIndex}
              text={word}
            />
          </span>
        );
      });
    });
  };

  useEffect(() => {
    // console.log("Selected Word: ", state.selectedWord);
  }, [state.selectedWord]);
  // #endregion =========================================

  // #region RENDER WORD COMPONENTS =====================
  return generateWords(lyrics);
  // #endregion =========================================
}
