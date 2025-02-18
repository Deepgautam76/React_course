import { LOGO_URL } from "../utils/constant";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo image" />
      </div>
      <div className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </div>
    </div>
  );
};

export default Header;
