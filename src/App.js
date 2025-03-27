import React, { useState } from "react";
import "./App.css"; // Import the CSS file for styling

const quotes = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
];

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

function App() {
  const [quote, setQuote] = useState(getRandomQuote());

  const fetchNewQuote = () => {
    setQuote(getRandomQuote());
  };

  return (
    <div className="container">
      <div id="quote-box">
        <p id="text">"{quote.text}"</p>
        <p id="author">- {quote.author}</p>
        <button id="new-quote" onClick={fetchNewQuote}>
          New Quote
        </button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </a>
      </div>
    </div>
  );
}

export default App;
