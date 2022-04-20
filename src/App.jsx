import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Empty from "./components/Empty";
import Emojis from "./components/Emojis";
import SearchInput from "./components/SearchInput";

import "./App.css";

function App() {
  const [emojis, setEmojis] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function fetchEmojis() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28"
        );

        setEmojis(data);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    }

    fetchEmojis();
  }, []);

  const handleSearchEmojis = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <SearchInput onChange={handleSearchEmojis} value={searchText} />
        {isLoading && <Empty text={"Loading..."} />}
        {error && <Empty text={`Oooppss Error... (${error})`} />}
        {emojis.length > 0 && (
          <Emojis emojis={emojis} searchText={searchText} />
        )}
      </Container>
    </div>
  );
}

export default App;
