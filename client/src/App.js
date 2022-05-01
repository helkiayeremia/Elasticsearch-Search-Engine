import { useState } from "react";
import SearchBox from "./components/SearchBox";
import QuoteList from "./components/QuoteList";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [queryText, setQueryText] = useState("");
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/quotes?text=${queryText}`)
      .then((result) => {
        const records = result.data.data.values;
        const tempQuotes = records.map((record) => {
          return { id: record.id, author: record.author, quote: record.quote };
        });
        setQuotes(tempQuotes);
      });
  }, [queryText]);
  return (
    <div className="App">
      <SearchBox placeholder="Search Quote" setQueryText={setQueryText} />
      <QuoteList quotes={quotes} />
    </div>
  );
}

export default App;
