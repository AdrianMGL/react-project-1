import Logo from "./../../src/logo.png";

const HeaderCard = () => {
  return (
    <div className="card__title">
      <h2 className="">Academlo</h2>
      <img className="bx-tada" src={Logo} alt="academlo" />
    </div>
  );
};
export default HeaderCard;
