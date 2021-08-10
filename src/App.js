import "./styles.css";
import React, { useState } from "react";

const bookLibrary = {
  NonFicton: [
    { name: "Atomic Habits", rating: "5/5" },
    { name: "The Subtle Art of Not giving a f*ck", rating: "4/5" },
    { name: "Mindset", rating: "3.5/5" }
  ],

  Fiction: [
    { name: "Harry Potter Series", rating: "4/5" },
    { name: "The Song of Ice and Fire", rating: "4.5/5" },
    { name: "Ram Chandra Series", rating: "3/5" }
  ],

  Finance: [
    { name: "Rich Dad and Poor Dad", rating: "4/5" },
    { name: "The Psychology of Money", rating: "4.5/5" },
    { name: "The Intelligent Investor", rating: "3.5/5" }
  ]
};
export default function App() {
  const [selectedCateogry, setCategory] = useState("Finance");

  function categoryClickHandler(book) {
    setCategory(book);
  }

  return (
    <div className="App">
      <h2>
        <span style={{ fontSize: "larger" }}>📚 </span> Book Recommendation
      </h2>
      <h2></h2>

      <p>
        {" "}
        <small>
          {" "}
          Check out my favorite books. Select a cateogory to get started.
        </small>{" "}
      </p>

      <div>
        {Object.keys(bookLibrary).map((book) => (
          <button onClick={() => categoryClickHandler(book)}>{book}</button>
        ))}
      </div>

      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookLibrary[selectedCateogry].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "0.8rem",
                border: "0.5px solid black",
                borderRadius: "0.5rem",
                width: "50%",
                margin: "1rem"
              }}
            >
              {" "}
              <div> {book.name}</div>
              <div style={{ fontSize: "smaller" }}> {book.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
