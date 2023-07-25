import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="Логотип сайта" />
      </Link>
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
