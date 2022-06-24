import { useState } from "react";
import "../Styles/Card.css";
import quotes from "../data/dataQuotes.json";

/** Colors */
const colors = [
  "hsla(333, 66%, 67%, 0.767)",
  "hsla(120, 60%, 67%, 0.716)",
  " hsla(60, 67%, 67%, 0.71)",
  "hsla(213, 83%, 74%, 0.715)",
  "hsla(3, 100%, 69%, 0.7)",
  "hsla(263, 45%, 56%, 0.85)",
  "hsla(318, 60%, 60%, 0.85)",
  "hsla(346, 100%, 72%, 0.85)",
  "hsla(16, 100%, 72%, 0.85)",
  "hsla(39, 100%, 69%, 0.95)",
];

/** */
const Card = () => {
  /** */
  const random = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(random);
  /** */

  /** */
  const changeQuotes = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setIndex(random);
  };
  /** */
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomColorIndex];

  window.document.body.style = `background:${color}`;

  /** */
  return (
    <div className="card__container">
      <div className="card" style={{ color: color }}>
        <div className="card__title">
          <h2 className="">Academlo</h2>
          <img className="bx-tada" src="../src/logo.png" alt="logo" />
        </div>
        <p className=" phrase">
          <i className="bx bxs-quote-alt-left"> </i> {quotes[index].quote}{" "}
          <i className="bx bxs-quote-alt-right"></i>
        </p>
        <p className="author">{quotes[index].author}</p>
        <button
          className="btn"
          onClick={changeQuotes}
          style={{ background: color }}
        >
          <i className="bx bx-rotate-right bx-spin"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
