import React from "react";

export default function Word({ text, lineIndex, wordIndex, onWordClick }) {
  return (
    <span
      className="word"
      id={`line${lineIndex}word${wordIndex}`}
      onClick={onWordClick}
    >
      {text}
    </span>
  );
}
