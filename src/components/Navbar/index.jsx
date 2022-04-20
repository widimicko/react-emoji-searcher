import searchIcon from "../../image/search-icon.svg";
import emojiIcon from "../../image/emoji-icon.svg";

import "./style.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <img
        src={emojiIcon}
        alt="emoji"
        className="navIcon"
        style={{ marginRight: 8 }}
      />
      <img
        src={searchIcon}
        alt="search"
        className="navIcon"
        style={{ marginRight: 5 }}
      />
      <span className="navTitle">Emoji Searcher</span>
    </nav>
  );
};

export default Navbar;
