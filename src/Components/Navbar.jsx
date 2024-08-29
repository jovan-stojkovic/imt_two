import "../Styles/Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = ({ menu, setMenu, handleMenu }) => {
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
          <div className="empty-space" onClick={() => setMenu(false)}></div>
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
                  setMenu(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                POČETNA
              </NavLink>
            </motion.div>

            <motion.div variants={navlinksMotion} className="about-us">
              <NavLink
                className="navlink"
                to="/o-nama"
                onClick={() => {
                  setMenu(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                O NAMA
              </NavLink>

              <div className="dropdown-about">
                <div className="padding-div"></div>
                <div className="dropdown-about-cont">
                  <NavLink className="dropdown-navlink" to="/o-nama/tafe">
                    TAFE
                  </NavLink>
                  <NavLink className="dropdown-navlink" to="/o-nama/imt">
                    INDUSTRIJA MAŠINA I TRAKTORA
                  </NavLink>
                  <NavLink className="dropdown-navlink" to="/o-nama/industrija">
                    INDUSTRIJA MEHANIZACIJE I TRAKTORA
                  </NavLink>
                  <NavLink
                    className="dropdown-navlink"
                    to="/o-nama/politika-kvaliteta"
                  >
                    POLITIKA KVALITETA
                  </NavLink>
                </div>
              </div>
            </motion.div>

            <motion.div variants={navlinksMotion} className="models">
              <NavLink
                className="navlink"
                to="/modeli"
                onClick={() => {
                  setMenu(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                MODELI
              </NavLink>

              <div className="dropdown-models">
                <div className="padding-div"></div>
                <div className="dropdown-models-cont">
                  <NavLink className="dropdown-navlink" to="/modeli/standardni">
                    STANDARDNI
                  </NavLink>
                  <NavLink className="dropdown-navlink" to="/modeli/kompaktni">
                    KOMPAKTNI
                  </NavLink>
                  <NavLink className="dropdown-navlink" to="/modeli/magna">
                    MAGNA
                  </NavLink>
                </div>
              </div>
            </motion.div>

            <motion.div variants={navlinksMotion}>
              <NavLink
                className="navlink"
                to="/prodajna-mreza"
                onClick={() => {
                  setMenu(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                PRODAJNA MREŽA
              </NavLink>
            </motion.div>

            <motion.div variants={navlinksMotion} className="download">
              <NavLink
                className="navlink"
                to="/preuzimanje"
                onClick={() => {
                  setMenu(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                PREUZIMANJE
              </NavLink>

              <div className="dropdown-download">
                <div className="padding-div"></div>
                <div className="dropdown-download-cont">
                  <NavLink
                    className="dropdown-navlink"
                    to="/preuzimanje/o-firmi"
                  >
                    PODACI O FIRMI
                  </NavLink>
                  <NavLink
                    className="dropdown-navlink"
                    to="/preuzimanje/brosure"
                  >
                    BROŠURE
                  </NavLink>
                  <NavLink
                    className="dropdown-navlink"
                    to="/preuzimanje/upustva"
                  >
                    UPUTSTVA
                  </NavLink>
                </div>
              </div>
            </motion.div>

            <motion.div variants={navlinksMotion}>
              <NavLink
                className="navlink"
                to="/media"
                onClick={() => {
                  setMenu(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                MEDIA
              </NavLink>
            </motion.div>

            <motion.div variants={navlinksMotion}>
              <NavLink
                className="navlink"
                to="/kontakt"
                onClick={() => {
                  setMenu(false);
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

        <button className="service">ZAKAŽITE SERVIS</button>
      </div>
    </nav>
  );
};

export default Navbar;
