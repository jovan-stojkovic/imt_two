import "../Styles/Network.scss";
import { motion } from "framer-motion";
import Bar from "../Components/Bar";

const Network = () => {
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
    <div className="page network">
      <h1 className="main-headline">PRODAJNA MREŽA</h1>
      <div className="page-cont">
        <motion.section
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5, once: true }}
        >
          <Bar />
          <div className="text-part">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            esse perferendis consequuntur porro dolore animi quasi delectus
            voluptates soluta sequi ad, voluptatum maiores voluptas natus saepe
            assumenda autem. Animi esse nobis debitis iusto est eos, quisquam
            unde culpa amet. Quis et quibusdam illo, molestiae dolore ea commodi
            totam provident alias velit natus vero, sint quidem voluptates
            beatae? Ipsa voluptatibus, placeat reiciendis omnis aliquam
            quibusdam animi dolorem quasi aliquid, aspernatur nam, nisi possimus
            consequatur! Sequi sapiente molestias deserunt, vitae mollitia eius!
            Voluptates animi error ut minima delectus? Nulla, facere. Quos
            voluptatum veniam a quasi asperiores hic, eveniet facere
            reprehenderit debitis ad voluptatem. Exercitationem alias iure,
            perspiciatis consequuntur voluptatem error. Iste odio ea aspernatur
            molestias maxime impedit laboriosam asperiores iusto, voluptate esse
            harum quo tenetur iure nobis ut error ab, ratione doloribus. Tempora
            delectus sit consequuntur pariatur, quasi impedit debitis, soluta id
            amet rerum eum ullam quisquam sunt alias, assumenda ex quas.
          </div>
          <div className="img-cont">
            <div className="dot-logo">
              <div className="info">
                <h5>INDUSTRIJA MEHANIZACIJE I TRAKTORA</h5>
                <p>Žanke Stokić 39, 11000 Beograd</p>
                <p>Konstantina Danila BB, 23250 Jarkovac</p>
                <span>www.tafe.com</span>
                <span>info@tractors-europe.com</span>
              </div>
            </div>
            <div className="dot agrorid">
              <div className="info">
                <div className="logo-cont"></div>
                <p>Gandijeva 148/1a, Beograd</p>
                <p>Cara Dušana 20, Novi Banovci</p>
                <p>
                  <span>email:</span> agrorid.doo@gmail.com
                </p>
                <p>
                  <span>tel:</span> 066 333333
                </p>
              </div>
            </div>

            <div className="dot agrogas">
              <div className="info">
                <div className="logo-cont"></div>
                <p>Milutina Milankovića 120a, Novi Beograd</p>
                <p>Vojvode Vićentija 18, Međulužje, Mladenovac</p>
                <p>
                  <span>email:</span> agrogas@agrogas.co.rs
                </p>
                <p>
                  <span>tel:</span> 062 803 05 80
                </p>
              </div>
            </div>

            <div className="dot jugometal">
              <div className="info">
                <div className="logo-cont"></div>
                <p>Kneza Miloša 81, Svilajnac</p>
                <p>Novosadska 634, Temerin</p>
                <p>
                  <span>email:</span> info@jugometal.co.rs
                </p>
                <p>
                  <span>tel:</span> 063 1058748
                </p>
              </div>
            </div>

            <div className="dot agrouniverzal">
              <div className="info">
                <div className="logo-cont"></div>
                <p>Naselje Parac 18v</p>
                <p>Gornji Milanovac</p>
                <p>
                  <span>email:</span> info@agrouniverzal.rs
                </p>
                <p>
                  <span>tel:</span> 069 101 1852
                </p>
              </div>
            </div>

            <div className="dot agribau">
              <div className="info">
                <div className="logo-cont"></div>
                <p>Rr. Lidhja e Pejës</p>
                <p>Prishtinë, Kosovë 10000</p>
                <p>
                  <span>email:</span> agribau.ks@gmail.com
                </p>
                <p>
                  <span>tel:</span> +383 44 239472
                </p>
              </div>
            </div>

            <div className="dot rakic">
              <div className="info">
                <div className="logo-cont"></div>
                <p>Brezovo polje bb, Brčko</p>
                <p>Republika Srpska</p>
                <p>
                  <span>email:</span> doorakic@yahoo.com
                </p>
                <p>
                  <span>tel:</span> +387 65 512410
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Network;
