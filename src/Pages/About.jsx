import "../Styles/About.scss";
import { motion } from "framer-motion";

const About = () => {
  const imgMotion = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  const sectionMotion = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <div className="page about">
      <motion.div
        className="top-img-cont"
        variants={imgMotion}
        initial="hidden"
        animate="visible"
      >
        <h1>O Nama</h1>
      </motion.div>
      <div className="page-cont">
        <motion.section
          id="tafe"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5, once: true }}
        >
          <h1>Tafe</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            autem cupiditate dicta inventore ad, voluptatum mollitia quam
            deleniti recusandae veniam, eos neque aliquam perspiciatis magnam
            aspernatur facilis quibusdam molestiae modi pariatur perferendis
            adipisci impedit excepturi est. Culpa velit suscipit omnis? Impedit
            maiores, quo maxime rem incidunt hic mollitia molestiae dicta. iatis
            magnam aspernatur facilis quibusdam molestiae modi pariatur
            perferendis adipisci impedit excepturi est. Culpa velit suscipit
            omnis? Impedit maiores, quo maxime rem incidunt hic mollitia
            molestiae dicta.
          </p>
        </motion.section>

        <motion.section
          id="industrija-motora"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5, once: true }}
        >
          <h1>Industrija motora i traktora</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In ex
            cupiditate illum rerum doloribus distinctio praesentium nulla
            laboriosam quasi sed eveniet molestias placeat reiciendis corrupti
            incidunt eligendi optio sequi deserunt modi quas consectetur vel
            ipsam, ipsum delectus. Eveniet repellendus optio nam ullam vitae
            ratione perferendis fugiat dolores. Repudiandae. iatis magnam
            aspernatur facilis quibusdam molestiae modi pariatur perferendis
            adipisci impedit excepturi est. Culpa velit suscipit omnis? Impedit
            maiores, quo maxime rem incidunt hic mollitia molestiae dicta.
          </p>
        </motion.section>

        <motion.section
          id="industrija-masina"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5, once: true }}
        >
          <h1>Indrustrija mašina i traktora</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            nostrum similique voluptatum excepturi consequatur ratione assumenda
            necessitatibus saepe dignissimos adipisci alias ipsa, dolores
            recusandae culpa, sapiente architecto distinctio repellendus fuga.
            Harum, suscipit adipisci neque odit natus voluptatem amet excepturi
            maxime ab ducimus autem nemo nihil quod necessitatibus hic, delectus
            quas. Beatae, perspiciatis! iatis magnam aspernatur facilis
            quibusdam molestiae modi pariatur perferendis adipisci impedit
            excepturi est. Culpa velit suscipit omnis? Impedit maiores, quo
            maxime rem incidunt hic mollitia molestiae dicta.
          </p>
        </motion.section>

        <motion.section
          id="politika-kvaliteta"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5, once: true }}
        >
          <h1>Politika kvaliteta</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            illum quam, molestias enim error, provident non excepturi culpa id
            placeat a perspiciatis veritatis ipsam. Expedita eligendi, aliquid
            blanditiis quaerat accusantium vero natus. Excepturi temporibus
            facere obcaecati maiores officia? iatis magnam aspernatur facilis
            quibusdam molestiae modi pariatur perferendis adipisci impedit
            excepturi est. Culpa velit suscipit omnis? Impedit maiores, quo
            maxime rem incidunt hic mollitia molestiae dicta.
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
