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
        <button
          className={`menu-btn ${menu ? "show-menu" : ""}`}
          onClick={handleMenu}
        ></button>
        <div className={`navlinks ${menu ? "show-menu" : ""}`}>
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
                  <NavLink
                    className="dropdown-navlink"
                    to="/o-nama/tafe"
                    onClick={() => setMenu(false)}
                  >
                    TAFE
                  </NavLink>
                  <NavLink
                    className="dropdown-navlink"
                    to="/o-nama/industrija-masina"
                    onClick={() => setMenu(false)}
                  >
                    INDUSTRIJA MAŠINA I TRAKTORA
                  </NavLink>
                  <NavLink
                    className="dropdown-navlink"
                    to="/o-nama/industrija-mehanizacije"
                    onClick={() => setMenu(false)}
                  >
                    INDUSTRIJA MEHANIZACIJE I TRAKTORA
                  </NavLink>
                  <NavLink
                    className="dropdown-navlink"
                    to="/o-nama/politika-kvaliteta"
                    onClick={() => setMenu(false)}
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
                  <NavLink
                    className="dropdown-navlink"
                    to="/modeli/standardni"
                    onClick={() => setMenu(false)}
                  >
                    STANDARDNI
                  </NavLink>
                  <NavLink
                    className="dropdown-navlink"
                    to="/modeli/kompaktni"
                    onClick={() => setMenu(false)}
                  >
                    KOMPAKTNI
                  </NavLink>
                  <NavLink
                    className="dropdown-navlink"
                    to="/modeli/magna"
                    onClick={() => setMenu(false)}
                  >
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
                    to="/preuzimanje/podaci-o-firmi"
                    onClick={() => setMenu(false)}
                  >
                    PODACI O FIRMI
                  </NavLink>

                  <NavLink
                    className="dropdown-navlink"
                    to="/preuzimanje/prospekti"
                    onClick={() => setMenu(false)}
                  >
                    PROSPEKTI
                  </NavLink>

                  <NavLink
                    className="dropdown-navlink"
                    to="/preuzimanje/uputstva"
                    onClick={() => setMenu(false)}
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

            <motion.div variants={navlinksMotion}>
              <NavLink
                className="navlink"
                to="/zakazite-servis"
                onClick={() => {
                  setMenu(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                ZAKAŽITE SERVIS
              </NavLink>
            </motion.div>
          </motion.div>
          <div className="empty-space" onClick={() => setMenu(false)}></div>
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
      </div>
    </nav>
  );
};

export default Navbar;
