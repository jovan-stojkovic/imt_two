import "../Styles/About.scss";
import { motion } from "framer-motion";
import Bar from "../Components/Bar";
import { Element } from "react-scroll";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import { useParams } from "react-router-dom";

const About = () => {
  const { section } = useParams();

  useEffect(() => {
    if (section) {
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -70,
      });
    }
  }, [section]);

  const sectionMotion = {
    hidden: {
      opacity: 0,
      x: -300,
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
      <h1 className="main-headline">O NAMA</h1>
      <div className="page-cont">
        <Element name="tafe">
          {" "}
          <motion.section
            id="tafe"
            variants={sectionMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
          >
            <Bar headline={"TAFE"} />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              autem cupiditate dicta inventore ad, voluptatum mollitia quam
              deleniti recusandae veniam, eos neque aliquam perspiciatis magnam
              aspernatur facilis quibusdam molestiae modi pariatur perferendis
              adipisci impedit excepturi est. Culpa velit suscipit omnis?
              Impedit maiores, quo maxime rem incidunt hic mollitia molestiae
              dicta. iatis magnam aspernatur facilis quibusdam molestiae modi
              pariatur perferendis adipisci impedit excepturi est. Culpa velit
              suscipit omnis? Impedit maiores, quo maxime rem incidunt hic
              mollitia molestiae dicta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              autem cupiditate dicta inventore ad, voluptatum mollitia quam
              deleniti recusandae veniam, eos neque aliquam perspiciatis magnam
              aspernatur facilis quibusdam molestiae modi pariatur perferendis
              adipisci impedit excepturi est. Culpa velit suscipit omnis?
              Impedit maiores, quo maxime rem incidunt hic mollitia molestiae
              dicta. iatis magnam aspernatur facilis quibusdam molestiae modi
              pariatur perferendis adipisci impedit excepturi est. Culpa velit
              suscipit omnis? Impedit maiores, quo maxime rem incidunt hic
              mollitia molestiae dicta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              autem cupiditate dicta inventore ad, voluptatum mollitia quam
              deleniti recusandae veniam, eos neque aliquam perspiciatis magnam
              aspernatur facilis quibusdam molestiae modi pariatur perferendis
              adipisci impedit excepturi est. Culpa velit suscipit omnis?
              Impedit maiores, quo maxime rem incidunt hic mollitia molestiae
              dicta. iatis magnam aspernatur facilis quibusdam molestiae modi
              pariatur perferendis adipisci impedit excepturi est. Culpa velit
              suscipit omnis? Impedit maiores, quo maxime rem incidunt hic
              mollitia molestiae dicta.
            </p>
          </motion.section>
        </Element>
        <Element name="ind-masina">
          <motion.section
            id="industrija-motora"
            variants={sectionMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
          >
            <Bar headline={"INDUSTRIJA MOTORA I TRAKTORA"} />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              autem cupiditate dicta inventore ad, voluptatum mollitia quam
              deleniti recusandae veniam, eos neque aliquam perspiciatis magnam
              aspernatur facilis quibusdam molestiae modi pariatur perferendis
              adipisci impedit excepturi est. Culpa velit suscipit omnis?
              Impedit maiores, quo maxime rem incidunt hic mollitia molestiae
              dicta. iatis magnam aspernatur facilis quibusdam molestiae modi
              pariatur perferendis adipisci impedit excepturi est. Culpa velit
              suscipit omnis? Impedit maiores, quo maxime rem incidunt hic
              mollitia molestiae dicta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              autem cupiditate dicta inventore ad, voluptatum mollitia quam
              deleniti recusandae veniam, eos neque aliquam perspiciatis magnam
              aspernatur facilis quibusdam molestiae modi pariatur perferendis
              adipisci impedit excepturi est. Culpa velit suscipit omnis?
              Impedit maiores, quo maxime rem incidunt hic mollitia molestiae
              dicta. iatis magnam aspernatur facilis quibusdam molestiae modi
              pariatur perferendis adipisci impedit excepturi est. Culpa velit
              suscipit omnis? Impedit maiores, quo maxime rem incidunt hic
              mollitia molestiae dicta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              autem cupiditate dicta inventore ad, voluptatum mollitia quam
              deleniti recusandae veniam, eos neque aliquam perspiciatis magnam
              aspernatur facilis quibusdam molestiae modi pariatur perferendis
              adipisci impedit excepturi est. Culpa velit suscipit omnis?
              Impedit maiores, quo maxime rem incidunt hic mollitia molestiae
              dicta. iatis magnam aspernatur facilis quibusdam molestiae modi
              pariatur perferendis adipisci impedit excepturi est. Culpa velit
              suscipit omnis? Impedit maiores, quo maxime rem incidunt hic
              mollitia molestiae dicta.
            </p>
          </motion.section>
        </Element>
        <Element name="ind-mehanizacije">
          <motion.section
            id="industrija-masina"
            variants={sectionMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
          >
            <Bar headline={"INDUSTRIJA MAŠINA I TRAKTORA"} />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              autem cupiditate dicta inventore ad, voluptatum mollitia quam
              deleniti recusandae veniam, eos neque aliquam perspiciatis magnam
              aspernatur facilis quibusdam molestiae modi pariatur perferendis
              adipisci impedit excepturi est. Culpa velit suscipit omnis?
              Impedit maiores, quo maxime rem incidunt hic mollitia molestiae
              dicta. iatis magnam aspernatur facilis quibusdam molestiae modi
              pariatur perferendis adipisci impedit excepturi est. Culpa velit
              suscipit omnis? Impedit maiores, quo maxime rem incidunt hic
              mollitia molestiae dicta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              autem cupiditate dicta inventore ad, voluptatum mollitia quam
              deleniti recusandae veniam, eos neque aliquam perspiciatis magnam
              aspernatur facilis quibusdam molestiae modi pariatur perferendis
              adipisci impedit excepturi est. Culpa velit suscipit omnis?
              Impedit maiores, quo maxime rem incidunt hic mollitia molestiae
              dicta. iatis magnam aspernatur facilis quibusdam molestiae modi
              pariatur perferendis adipisci impedit excepturi est. Culpa velit
              suscipit omnis? Impedit maiores, quo maxime rem incidunt hic
              mollitia molestiae dicta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              autem cupiditate dicta inventore ad, voluptatum mollitia quam
              deleniti recusandae veniam, eos neque aliquam perspiciatis magnam
              aspernatur facilis quibusdam molestiae modi pariatur perferendis
              adipisci impedit excepturi est. Culpa velit suscipit omnis?
              Impedit maiores, quo maxime rem incidunt hic mollitia molestiae
              dicta. iatis magnam aspernatur facilis quibusdam molestiae modi
              pariatur perferendis adipisci impedit excepturi est. Culpa velit
              suscipit omnis? Impedit maiores, quo maxime rem incidunt hic
              mollitia molestiae dicta.
            </p>
          </motion.section>
        </Element>
        <Element name="politika-kvaliteta">
          <motion.section
            id="politika-kvaliteta"
            variants={sectionMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
          >
            <Bar headline={"POLITIKA KVALITETA"} />

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              autem cupiditate dicta inventore ad, voluptatum mollitia quam
              deleniti recusandae veniam, eos neque aliquam perspiciatis magnam
              aspernatur facilis quibusdam molestiae modi pariatur perferendis
              adipisci impedit excepturi est. Culpa velit suscipit omnis?
              Impedit maiores, quo maxime rem incidunt hic mollitia molestiae
              dicta. iatis magnam aspernatur facilis quibusdam molestiae modi
              pariatur perferendis adipisci impedit excepturi est. Culpa velit
              suscipit omnis? Impedit maiores, quo maxime rem incidunt hic
              mollitia molestiae dicta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              autem cupiditate dicta inventore ad, voluptatum mollitia quam
              deleniti recusandae veniam, eos neque aliquam perspiciatis magnam
              aspernatur facilis quibusdam molestiae modi pariatur perferendis
              adipisci impedit excepturi est. Culpa velit suscipit omnis?
              Impedit maiores, quo maxime rem incidunt hic mollitia molestiae
              dicta. iatis magnam aspernatur facilis quibusdam molestiae modi
              pariatur perferendis adipisci impedit excepturi est. Culpa velit
              suscipit omnis? Impedit maiores, quo maxime rem incidunt hic
              mollitia molestiae dicta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              autem cupiditate dicta inventore ad, voluptatum mollitia quam
              deleniti recusandae veniam, eos neque aliquam perspiciatis magnam
              aspernatur facilis quibusdam molestiae modi pariatur perferendis
              adipisci impedit excepturi est. Culpa velit suscipit omnis?
              Impedit maiores, quo maxime rem incidunt hic mollitia molestiae
              dicta. iatis magnam aspernatur facilis quibusdam molestiae modi
              pariatur perferendis adipisci impedit excepturi est. Culpa velit
              suscipit omnis? Impedit maiores, quo maxime rem incidunt hic
              mollitia molestiae dicta.
            </p>
          </motion.section>
        </Element>
      </div>
    </div>
  );
};

export default About;
