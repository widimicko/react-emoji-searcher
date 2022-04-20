import "./style.css";

const Emojis = ({ emojis }) => {
  return (
    <div className="emojisGrid">
      {emojis.map((emoji, index) => (
        <div key={index}>
          <p
            dangerouslySetInnerHTML={{
              __html: `&#${emoji.symbol.codePointAt(0)}`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Emojis;
