import "./style.css";

import EmojiBox from "../EmojiBox";

const Emojis = ({ emojis }) => {
  return (
    <div className="emojisGrid">
      {emojis.map((emoji, index) => (
        <EmojiBox key={index} title={emoji.title} symbol={emoji.symbol} />
      ))}
    </div>
  );
};

export default Emojis;
