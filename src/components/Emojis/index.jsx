import { useState, useEffect } from "react";

import Empty from "../Empty";

import { filterEmojis } from "../../utils/filterEmojis";

import "./style.css";

import EmojiBox from "../EmojiBox";

const Emojis = ({ emojis, searchText }) => {
  const [filteredEmojis, setFilteredEmojis] = useState([]);

  useEffect(() => {
    setFilteredEmojis(
      filterEmojis({
        emojis,
        searchText,
      })
    );
  }, [emojis, searchText]);

  if (filteredEmojis.length > 0) {
    return (
      <div className="emojisGrid">
        {filteredEmojis.map((emoji, index) => (
          <EmojiBox key={index} title={emoji.title} symbol={emoji.symbol} />
        ))}
      </div>
    );
  } else {
    return <Empty text={"Opps, zero finding, try another text"} />;
  }
};

export default Emojis;
