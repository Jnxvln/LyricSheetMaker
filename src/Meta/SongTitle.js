export default function Song({ title, askForSongMeta }) {
  return (
    <div>
      {title && title.length > 0 && (
        <h2
          style={{ textAlign: "center", cursor: "pointer" }}
          onClick={() => askForSongMeta("title")}
        >
          {title}
        </h2>
      )}
    </div>
  );
}
