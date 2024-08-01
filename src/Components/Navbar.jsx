import "../Styles/Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const generalMotion = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  const navlinksMotion = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <nav>
      <div className="nav-cont">
        <Link
          id="nav-logo"
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        ></Link>
        <div className={`navlinks ${menu ? "show-menu" : ""}`}>
          <div className="empty-space" onClick={handleMenu}></div>
          <motion.div
            variants={generalMotion}
            initial="hidden"
            animate="visible"
            className="navlinks-cont"
          >
            <motion.div variants={navlinksMotion}>
              <NavLink
                className="navlink"
                to="/"
                onClick={() => {
                  handleMenu();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                POČETNA
              </NavLink>
            </motion.div>
            <motion.div variants={navlinksMotion}>
              <NavLink
                className="navlink"
                to="/modeli"
                onClick={() => {
                  handleMenu();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                MODELI
              </NavLink>
            </motion.div>
            <motion.div variants={navlinksMotion}>
              <NavLink
                className="navlink"
                to="/vesti"
                onClick={() => {
                  handleMenu();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                VESTI
              </NavLink>
            </motion.div>
            <motion.div variants={navlinksMotion}>
              <NavLink
                className="navlink"
                to="/kontakt"
                onClick={() => {
                  handleMenu();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                KONTAKT
              </NavLink>
            </motion.div>

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
          </motion.div>
        </div>
        <button
          className={`menu-btn ${menu ? "show-menu" : ""}`}
          onClick={handleMenu}
        ></button>
      </div>
    </nav>
  );
};

export default Navbar;
