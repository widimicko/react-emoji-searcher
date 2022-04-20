import "./style.css";

const SearchInput = ({ onChange, value }) => {
  return (
    <input
      type="text"
      className="input"
      placeholder="Search"
      onChange={onChange}
      value={value}
    />
  );
};

export default SearchInput;
