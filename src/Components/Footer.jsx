import "../Styles/Footer.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const footerMotion = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.footer
      variants={footerMotion}
      initial="hidden"
      whileInView="visible"
    >
      <div className="footer-cont">
        <div className="footer-logo"></div>
        <div className="footer-text">
          <h1>INDUSTRIJA MEHANIZACIJE I TRAKTORA</h1>
          <h5>
            Ekskluzivni distributer kompanije{" "}
            <Link target="_blank" to="https://www.tafe.com/">
              "TAFE"
            </Link>{" "}
            za tržište Srbije.
          </h5>
        </div>
        <div className="footer-logo"></div>
      </div>
    </motion.footer>
  );
};

export default Footer;
