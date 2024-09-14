import "../Styles/Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

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

            <motion.div
              variants={navlinksMotion}
              className="navlink-with-dropdown about-us"
            >
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

              <div className="dropdown dropdown-about">
                <div className="padding-div"></div>
                <div className="dropdown-cont">
                  <NavLink className="dropdown-navlink" to="tafe">
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

            <motion.div
              variants={navlinksMotion}
              className="navlink-with-dropdown models"
            >
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

              <div className="dropdown dropdown-models">
                <div className="padding-div"></div>
                <div className="dropdown-cont">
                  <ScrollLink className="dropdown-navlink" to="standardni" spy={true} smooth={true} offset={-70} duration={500}>
                    STANDARDNI
                  </ScrollLink>
                  <ScrollLink className="dropdown-navlink" to="kompaktni" spy={true} smooth={true} offset={-70} duration={500}>
                    KOMPAKTNI
                  </ScrollLink>
                  <ScrollLink className="dropdown-navlink" to="magna" spy={true} smooth={true} offset={-70} duration={500}>
                    MAGNA
                  </ScrollLink>
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

            <motion.div
              variants={navlinksMotion}
              className="navlink-with-dropdown download"
            >
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

              <div className="dropdown dropdown-download">
                <div className="padding-div"></div>
                <div className="dropdown-cont">
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
                to="/kontakt"
                onClick={() => {
                  setMenu(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                KONTAKT
              </NavLink>
            </motion.div>

            <motion.div variants={navlinksMotion}>
              <NavLink
                className="navlink"
                to="/servis"
                onClick={() => {
                  setMenu(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                ZAKAŽITE SERVIS
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
        <div className="creation">
          <div className="background-gray"></div>
          <div className="creation-left">
            <div className="left-trap"></div>
            <div className="left-round"></div>
          </div>

          <div className="creation-right">
            <div className="right-trap"></div>
            <div className="right-round"></div>
          </div>
        </div>
        <div className="right-transparent">
          <div className="logo-cont">
            <Link
              id="nav-logo"
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            ></Link>
          </div>
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
