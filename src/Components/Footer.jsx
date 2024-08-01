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
        <div className="left"></div>
        <div className="center">
          <p>064 000 000 0</p>
          <p>email@gmail.com</p>
          <p>adresa</p>
        </div>
        <div className="right">
          <Link target="_blank" to="https://www.instagram.com">
            @instagram
          </Link>
          <Link target="_blank" to="https://www.facebook.com">
            @facebook
          </Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
