import Form from "../Components/Form";
import "../Styles/Contact.scss";
import TextReveal from "../Components/TextReveal";
import { motion } from "framer-motion";

const Contact = () => {
  const formApear = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <div className="page contact">
      <div className="reveal-div-flex">
        <TextReveal text="KONTAKT" />
      </div>
      <div className="page-cont">
        <motion.div variants={formApear} initial="hidden" animate="visible">
          <Form />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
