const QuoteCard = ({quote}) => {
  return (
    <p className="phrase">
      <i className="bx bxs-quote-alt-left"> </i> {quote}{" "}
      <i className="bx bxs-quote-alt-right"></i>
    </p>
  );
};
export default QuoteCard;
