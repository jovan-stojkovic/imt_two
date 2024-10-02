import "../Styles/Contact.scss";
import { motion } from "framer-motion";
import Form from "../Components/Form";
import TextReveal from "../Components/TextReveal";
import Map from "../Components/Map";
import Bar from "../Components/Bar";

const Contact = ({ sectionMotion }) => {
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
          <Map />
        </motion.div>

        <motion.section
          className="form-section"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
        >
          <Bar headline="KONTAKTIRAJTE NAS" />
          <Form />
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;
