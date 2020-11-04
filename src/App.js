import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./componants/ui/Header";
import CharacterGrid from "./componants/Characters/CharacterGrid";
import Search from "./componants/ui/Search";
function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function getWalt() {
      const response = await fetch(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      const data = await response.json();
      console.log(data);
      setItems(data);
      setIsLoading(false);
    }

    getWalt();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
