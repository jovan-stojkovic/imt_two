import "../Styles/About.scss";
import { motion } from "framer-motion";
import Bar from "../Components/Bar";
import { Element } from "react-scroll";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import { useParams } from "react-router-dom";
import TextReveal from "../Components/TextReveal";

const About = ({ sectionMotion }) => {
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

  return (
    <div className="page about">
      <div className="reveal-div-flex">
        <TextReveal text="O NAMA" />
      </div>
      <div className="page-cont">
        <Element name="tafe">
          <motion.section
            id="tafe"
            variants={sectionMotion}
            initial="hidden"
            animate="visible"
          >
            <Bar headline={"TAFE"} />
            <h3>TAFE - TRACTORS AND FARM EQUIPMENT LIMITED</h3>
            <h4>PROFIL KOMPANIJE</h4>
            <p>
              <span>TAFE</span> - Tractors and Farm Equipment Limited, je
              indijski proizvođač traktora osnovan 1960. godine u Čenaju,
              Indija, sa godišnjim prometom većim od INR 12.500 krora (oko EUR
              1.4 milijarde). Kao jedan od najvećih proizvođača traktora na
              svetu i drugi po veličini u Indiji po obimu proizvodnje,{" "}
              <span>TAFE</span> prodaje preko 180.000 traktora godišnje.{" "}
              <span>TAFE</span> je takođe značajan akcionar u AGCO Corporation,
              SAD - kompaniji vrednoj 14.4 milijarde američkih dolara koja je
              proizvođač traktora i poljoprivredne opreme.
            </p>
            <p>
              <span>TAFE</span> je stekao poverenje kupaca svojim asortimanom
              proizvoda koji su nadaleko cenjeni po kvalitetu i niskim
              troškovima rada. Snažna distributivna mreža od preko 1600+ dilera
              efikasno podržava <span>TAFE</span>-ova četiri kultna brenda
              traktora - Massey Ferguson, <span>TAFE</span>, Eicher Tractors i
              IMT. <span>TAFE</span> je 2018. godine kupio srpski brend traktora
              i poljoprivredne opreme IMT - Industrija mašina i traktora.{" "}
              <span>TAFE</span> izvozi traktore u preko 80 zemalja, koji
              doprinose produktivnosti farmi u Aziji, Africi, Evropi, Americi i
              Rusiji.
            </p>
            <p>
              Pored traktora, <span>TAFE</span> i njegove ispostave imaju
              različite poslovne interese u oblastima kao što su poljoprivredna
              mehanizacija, dizel motori i agregati, agro-industrijski motori,
              plastične komponente, menjači i komponente transmisije,
              hidraulične pumpe i cilindri, franšize vozila i plantaže.
            </p>

            <p>
              Od skromnog početka sa samo jednim modelom traktora 1961. godine,{" "}
              <span>TAFE</span> je danas prepoznat kao visokokvalitetni masovni
              proizvođač sa širokim asortimanom proizvoda koji ispunjava
              očekivanja svakog farmera i potrebe svake poljoprivredne
              mehanizacije. <span>TAFE</span>-ovi objekti za istraživanje i
              razvoj su centri izvrsnosti poznati po svom inovativnom dizajnu i
              inženjerskoj stručnosti i priznati su od strane Odeljenja za
              naučna i industrijska istraživanja vlade Indije. Opsežna
              istraživanja i testiranja osiguravaju da <span>TAFE</span>{" "}
              proizvodi ispunjavaju njegove stroge standarde performansi.
            </p>
            <p>
              <span>TAFE</span>-ova fabrika u Turskoj proizvodi široku paletu
              traktora i takođe proizvodi poslednju generaciju traktora
              emisionih standarda Euro 5. <span>TAFE</span> je 2005. godine
              kupio Eicher-ove traktore, menjače i komponente transmisije preko
              ispostave u sopstvenom vlasništvu, <span>TAFE</span> Motors and
              Tractors Limited (TMTL). Nedavno, u decembru 2022. godine,{" "}
              <span>TAFE</span> je kupio FAURECIA-ino indijsko preduzeće za
              unutrašnje poslove grupe FORVIA - francuskog globalnog proizvođača
              automobila.
            </p>
            <p>
              <span>TAFE</span> veruje u dobro korporativno upravljanje i slovi
              za kompaniju koja dosledno ostvaruje profit i etičku organizaciju.{" "}
              <span>TAFE</span>-ova posvećenost društvenoj odgovornosti
              preduzeća (CSR) uključuje doprinos životnoj sredini i društvu,
              istovremeno omogućavajući rast svih zainteresovanih strana sa
              jednakim entuzijazmom otelotvorujući ulogu odgovornog
              korporativnog građanina. Društveni fokus <span>TAFE</span>-a je
              značajan od samog početka, značajno doprinoseći oblastima kao što
              su poljoprivreda, obrazovanje, zdravstvena zaštita, razvoj
              zajednice, osnaživanje žena, očuvanje i etničko blagostanje, pomoć
              u slučaju katastrofa, očuvanje i propagiranje indijske kulture i
              tradicionalnih oblika umetnosti.
            </p>
            <p>
              <span>TAFE</span> je posvećen upravljanju totalnim kvalitetom
              (TKM). U nedavnoj prošlosti, različiti proizvodni pogoni{" "}
              <span>TAFE</span>-a osvojili su brojne nagrade „TPM Excellence“
              japanskog instituta za održavanje biljaka (JIPM), kao i niz drugih
              regionalnih nagrada za TPM izvrsnost. U julu 2023.,{" "}
              <span>TAFE</span> je osvojio nagradu - „Launch of the Year“ za
              asortiman traktora Eicher PRIMA G3, pored tri druge prestižne
              nagrade uključujući, „Najbolji traktor između 41-45 ks“ za Massey
              Ferguson 244 DINATRACK 4WD, „Klasični traktor godin“ za Massei
              Ferguson 1035 DI i „Najbolja CSR inicijativa“ za JFarm Services,
              na 4. dodeli nagrade za „Indijski traktor godine” (ITOTI) 2023.
              godine.
            </p>
            <p>
              <span>TAFE</span>-ov JRehab osvojio je „Nagradu za najboljeg
              privatnog poslodavca“ za „Dobrobit osoba sa invaliditetom“ od
              vlade države Tamil Nadu, u avgustu 2022. <span>TAFE</span>-ova
              fabrika u Madurai-u, fabrika Doddaballapur i JRehab centar
              osvojili su više zlatnih nagrada na Centralnoj konvenciji za
              koncepte kvaliteta, 2019. godine, za njihovu neuporedivu
              posvećenost kvalitetu. Strogo pridržavanje sigurnosnih standarda
              dovelo je do toga da <span>TAFE</span>-ova fabrika Sembiam osvoji
              četiri nagrade na dodeli Safety Awards 2019. od strane Direktorata
              za industrijsku sigurnost i zdravlje, vlade Tamil Nadu-a. Nagrada
              za bezbednost „Unnatha Suraksha Purashkara“ 2019. uručena je
              fabrici <span>TAFE</span> Doddaballapur od strane Nacionalnog
              saveta za bezbednost. <span>TAFE</span> je postao prvi indijski
              proizvođač traktora koji je osvojio nagradu Frost & Sullivan
              Global Manufacturing Leadership Award 2018. godine, uz nagradu
              „Enterprise Integration and Technologi Leadership“ i dve nagrade
              „Supply Chain Leadership“. U znak priznanja za njegov izuzetan
              doprinos izvozu industrije, <span>TAFE</span> je 23. put zaredom
              proglašen za „Star Performer - veliko preduzeće (poljoprivredni
              traktori)“ od strane Saveta za promociju izvoza inženjeringa
              Indije za južni region.
            </p>
            <p>
              <span>TAFE</span>-ove fabrike traktora sertifikovane su prema
              međunarodnim standardima ISO 9001 za efikasne sisteme upravljanja
              kvalitetom i prema ISO 14001 za eko-prijateljske operacije.{" "}
              <span>TAFE</span> je 2013. godine dobio prestižnu „Nagradu za
              liderstvo u poljoprivredi“ od strane časopisa Agriculture Today i
              „Nagradu za korporativnog građanina godine“ od strane Saveta za
              odnose s javnošću Indije (PRCI). <span>TAFE</span> je takođe
              proglašen za „Najboljeg poslodavca u Indiji 2013.“ od strane Aona
              Hewitt-a i ima priznanje za „Značajno dostignuće na putu ka
              poslovnoj izvrsnosti“ od strane žirija CII-EXIM banke - Nagrada za
              poslovnu izvrsnost 2012. godine.
            </p>
            <p>
              <span>TAFE</span> je deo Amalgamations Group iz Čenaja, jedne od
              najvećih indijskih grupacija za laku industriju. Sastoji se od 40
              kompanija, Amalgamations Group je uključena u dizajn, razvoj i
              proizvodnju dizel motora, automobilskih komponenti, proizvoda lake
              industrije, plantaža i usluga.
            </p>
          </motion.section>
        </Element>

        <Element name="ind-masina">
          <motion.section
            id="industrija-motora"
            variants={sectionMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
          >
            <Bar headline={"INDUSTRIJA MOTORA I TRAKTORA"} />
          </motion.section>
        </Element>
        <Element name="ind-mehanizacije">
          <motion.section
            id="industrija-masina"
            variants={sectionMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
          >
            <Bar headline={"INDUSTRIJA MAŠINA I TRAKTORA"} />
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
          </motion.section>
        </Element>
      </div>
    </div>
  );
};

export default About;
