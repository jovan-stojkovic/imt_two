import "../Styles/Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav>
      <div className="nav-cont">
        <Link id="nav-logo"></Link>
        <div className={`navlinks ${menu ? "show-menu" : ""}`} onClick={handleMenu}>
          <div className="empty-space"></div>
          <div className="navlinks-cont">
            <NavLink className="navlink" to="/">
              POČETNA
            </NavLink>
            <NavLink className="navlink" to="/o-nama">
              O NAMA
            </NavLink>
            <NavLink className="navlink" to="/modeli">
              MODELI
            </NavLink>
            <NavLink className="navlink" to="/prodajna-mreza">
              PRODAJNA MREŽA
            </NavLink>
            <NavLink className="navlink" to="/kontakt">
              KONTAKT
            </NavLink>
            <div className="nav-btns">
              <Link
                target="_blank"
                to="https://www.facebook.com/"
                className="nav-btn facebook"
              >
                FACEBOOK
              </Link>
              <Link
                target="_blank"
                to="https://www.instagram.com/"
                className="nav-btn instagram"
              >
                INSTAGRAM
              </Link>
            </div>
          </div>
        </div>
        <button className={`menu-btn ${menu ? "show-menu" : ""}`} onClick={handleMenu}></button>
      </div>
    </nav>
  );
};

export default Navbar;
