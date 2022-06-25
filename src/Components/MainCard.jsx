import { useState } from "react";
import "../Styles/MainCard.css";
import quotes from "../data/dataQuotes.json";
import HeaderCard from "./HeaderCard";
import ButtonCard from "./ButtonCard";
import AuthorCard from "./AuthorCard";
import QuoteCard from "./QuoteCard";

/** Colors */
const colors = [
  "hsla(333, 66%, 67%, 0.96)",
  "hsla(120, 60%, 67%, 0.816)",
  "hsla(213, 83%, 74%, 0.815)",
  "hsla(3, 100%, 69%, 0.7)",
  "hsla(263, 45%, 56%, 0.85)",
  "hsla(318, 60%, 60%, 0.85)",
  "hsla(346, 100%, 72%, 0.89)",
  "hsla(16, 100%, 72%, 0.85)",
  "hsla(39, 100%, 69%, 0.95)",
];

/** */
const MainCard = () => {
  /** */
  const MathIndex = Math.random() * quotes.length;
  const MathQuotes = Math.random() * quotes.length;
  const MathColors = Math.random() * colors.length;

  const random = Math.floor(MathIndex);
  const [index, setIndex] = useState(random);

  /** */
  const changeQuotes = () => {
    const random = Math.floor(MathQuotes);
    setIndex(random);
  };

  /** */
  const randomColorIndex = Math.floor(MathColors);
  const color = colors[randomColorIndex];

  window.document.body.style = `background:${color}`;
  const author = quotes[index].author;
  const quote = quotes[index].quote;

  /** */
  return (
    <div className="card__container">
      <div className="card" style={{ color: color }}>
        <HeaderCard />
        <QuoteCard quote={quote} />
        <AuthorCard author={author} />
        <ButtonCard changeQuotes={changeQuotes} color={color} />
      </div>
    </div>
  );
};

export default MainCard;
