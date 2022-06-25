const ButtonCard = ({ changeQuotes, color }) => {
  return (
    <button
      className="btn"
      onClick={changeQuotes}
      style={{ background: color }}
    >
      <i className="bx bx-rotate-right bx-spin"></i>
    </button>
  );
};

export default ButtonCard;
