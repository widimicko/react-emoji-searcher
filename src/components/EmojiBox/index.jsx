import { useState, useEffect } from "react";

import "./style.css";

const EmojiBox = ({ title, symbol }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSelected(false), 800);

    return () => clearTimeout(timer);
  }, [selected]);

  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText(symbol);
        setSelected(true);
      }}
      className={`emojiBox ${selected && "selected"}`}
    >
      <p
        className="emoji"
        dangerouslySetInnerHTML={{ __html: `&#${symbol.codePointAt(0)}` }}
      />
      <p className="emojiText">{selected ? "Copied!" : title}</p>
    </div>
  );
};

export default EmojiBox;
