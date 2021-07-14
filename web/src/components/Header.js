import logoHeader from "../images/logo-u.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-design-card">
      <Link to="/" title="HomePage">
        <img
          src={logoHeader}
          className="header-design-card__img"
          title="Awesome Profile Cards"
          alt="Awesome Profile Cards Logo"
        />
      </Link>
    </header>
  );
}

export default Header;
