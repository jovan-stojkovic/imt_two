import "../Styles/Network.scss";
import { motion } from "framer-motion";
import Bar from "../Components/Bar";
import TextReveal from "../Components/TextReveal";

const Network = ({ sectionMotion }) => {
  return (
    <div className="page network">
      <div className="reveal-div-flex">
        <TextReveal text="PRODAJNA" />
        <TextReveal text="MREŽA" />
      </div>

      <div className="page-cont">
        <motion.section
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <Bar />
          <h1>OVLAŠĆENI PREDSTAVNICI PRODAJE I SERVISNI ZASTUPNICI</h1>
          <div className="img-cont">
            <div className="dot-logo">
              <div className="info">
                <h5>INDUSTRIJA MEHANIZACIJE I TRAKTORA</h5>
                <p>Žanke Stokić 39, 11000 Beograd</p>
                <p>Konstantina Danila BB, 23250 Jarkovac</p>
                <p>
                  <span>www.tractors-europe.com </span>
                </p>
                <p>
                  <span>dg@tractors-europe.com</span>
                </p>
                <p>Prodaja: <span>063 8608 565</span></p>
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

            <div className="dot agrocentar">
              <div className="info">
                <div className="logo-cont"></div>
                <p>Šume 1a</p>
                <p>Ivanjica</p>
                <p>
                  <span>email:</span> office@simpeks.rs
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
