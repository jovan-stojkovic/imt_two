import "../Styles/About.scss";
import { motion } from "framer-motion";
import { Element, scroller } from "react-scroll";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import TextReveal from "../Components/TextReveal";
import Bar from "../Components/Bar";

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
            <img
              className="floating-img-one"
              src="/about/tafe.png"
              alt="tafe-logo"
            />

            <p>
              TAFE - Tractors and Farm Equipment Limited, je indijski proizvođač
              traktora osnovan 1960. godine u Čenaju, Indija, sa godišnjim
              prometom od EUR 1.4 milijarde. Kao jedan od najvećih proizvođača
              traktora na svetu i drugi po veličini u Indiji po obimu
              proizvodnje, TAFE prodaje preko 180.000 traktora godišnje. TAFE je
              takođe značajan akcionar u AGCO Corporation, SAD - kompaniji
              vrednoj 14.4 milijarde američkih dolara koja je proizvođač
              traktora i poljoprivredne opreme.
            </p>
            <p>
              TAFE je stekao poverenje kupaca svojim asortimanom proizvoda koji
              su nadaleko cenjeni po kvalitetu i niskim troškovima rada. Snažna
              distributivna mreža od preko 1600+ dilera efikasno podržava
              TAFE-ova četiri kultna brenda traktora - Massey Ferguson, TAFE,
              Eicher Tractors i IMT. TAFE je 2018. godine kupio srpski brend
              traktora i poljoprivredne opreme IMT - Industrija mašina i
              traktora. TAFE izvozi traktore u preko 80 zemalja sveta.
            </p>
            <p>
              Pored traktora, TAFE i njegove ispostave imaju različite poslovne
              interese u oblastima kao što su poljoprivredna mehanizacija, dizel
              motori i agregati, agro-industrijski motori, plastične komponente,
              menjači i komponente transmisije, hidraulične pumpe i cilindri,
              franšize vozila i plantaže.
            </p>
            <p>
              TAFE-ova fabrika u Turskoj proizvodi široku paletu traktora i
              takođe proizvodi poslednju generaciju traktora emisionih standarda
              Euro 5. TAFE je 2005. godine kupio Eicher-ove traktore, menjače i
              komponente transmisije preko ispostave u sopstvenom vlasništvu,
              TAFE Motors and Tractors Limited (TMTL). Nedavno, u decembru 2022.
              godine, TAFE je kupio FAURECIA-ino indijsko preduzeće za
              unutrašnje poslove grupe FORVIA - francuskog globalnog proizvođača
              automobila.
            </p>
            <p>
              TAFE veruje u dobro korporativno upravljanje i slovi za kompaniju
              koja dosledno ostvaruje profit i etičku organizaciju. TAFE-ova
              posvećenost društvenoj odgovornosti preduzeća (CSR) uključuje
              doprinos životnoj sredini i društvu, istovremeno omogućavajući
              rast svih zainteresovanih strana sa jednakim entuzijazmom
              otelotvorujući ulogu odgovornog korporativnog građanina. Društveni
              fokus TAFE-a je značajan od samog početka, značajno doprinoseći
              oblastima kao što su poljoprivreda, obrazovanje, zdravstvena
              zaštita, razvoj zajednice, osnaživanje žena, očuvanje i etničko
              blagostanje, pomoć u slučaju katastrofa, očuvanje i propagiranje
              indijske kulture i tradicionalnih oblika umetnosti.
            </p>
            <p>
              TAFE-ove fabrike traktora sertifikovane su prema međunarodnim
              standardima ISO 9001 za efikasne sisteme upravljanja kvalitetom i
              prema ISO 14001 za eko-prijateljske operacije.
            </p>
            <p>
              TAFE je deo Amalgamations Group iz Čenaja, jedne od najvećih
              indijskih grupacija za laku industriju. Sastoji se od 40
              kompanija, Amalgamations Group je uključena u dizajn, razvoj i
              proizvodnju dizel motora, automobilskih komponenti, proizvoda lake
              industrije, plantaža i usluga.
            </p>

            <p>Više na sajtu: <Link target="_blank" className="link-tafe" to="https://www.tafe.com/">TAFE.com</Link></p>
          </motion.section>
        </Element>

        <Element name="ind-masina">
          <motion.section
            id="industrija-masina"
            variants={sectionMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
          >
            <Bar headline={"INDUSTRIJA MAŠINA I TRAKTORA"} />
            <h3>INDUSTRIJA MAŠINA I TRAKTORA</h3>

            <p>
              Godine 1947. osnovana je Centralna livnica, koja se tri godine
              kasnije udružila sa još četiri preduzeća iz istog područja
              formirajući Metalski zavod “Aleksandar Ranković”. Zavod je 1954.
              preimenovan u Industrija traktora i mašina - ITM.
            </p>

            <img
              className="floating-img-two"
              src="/about/imt1.png"
              alt="ferguson-traktor"
            />

            <p>
              Nakon dvogodišnjih uporednih ispitivanja različitih stranih
              traktora 1953./54. godine u Institutu za poljoprivrednu
              mehanizaciju, a na osnovu dobijenih rezultata, doneta je odluku o
              otkupu licence za proizvodnju traktora američke marke Massey
              Ferguson, i otpočela je proizvodnja traktora Ferguson 20, 30 i 35.
              Godine 1964. počela je proizvodnja traktora IMT 555 domaće
              konstrukcije koji je bio baziran na prethodne fergusonove modele.
              Današnji naziv Industrija mašina i traktora - IMT fabrika dobija
              1965. godine.
            </p>

            <p>
              Marta 1976. otvorena je nova fabrika koja je imala kapacitet za
              proizvodnju 40.000 hiljada traktora. Uvedena je nova linijska
              oprema za serijsku prozvodnju na visokom nivou u skladu sa
              standardima iz 70-ih. Tada počinje masovna izrada traktora točkaša
              serije od 35 do 220 KS.
            </p>
            <img
              src="/about/imt2.png"
              alt="imt"
              className="floating-img-three"
            />
            <p>Proizvodni program Industrije mašina i traktora bio je:</p>

            <p className="ol-p">
              <span>1.</span> Traktori točkaši poljoprivredne,
              voćarsko-vinogradarske, šumarske, građevinsko-komunalne i opšte
              namene (20.5-194KW)
            </p>
            <p>
              <span>2.</span> Priključne mašine i oruđa: plugovi, rotacione
              sitnilice, sejalice, kultivatori, prikolice,
            </p>

            <p>
              Godine 1988. ostvaren je rekord u proizvodnji kada je izrađeno
              45.000 traktora i 35.000 mašina.
            </p>

            <p>
              U tom period IMT je bio lider na tržišti bivše Jugoslavije po
              plasmanu poljoprivredne mehanizacije, u periodu od 1955. do 2015.
              godine proizvedeno je ukupno 780 hiljada traktora. Oko 20%
              celokupne proizvodnje plasirano je na svetsko tržište. Aprila
              2018. godine fabriku IMT u stečaju je kupio indijski gigant TAFE.
            </p>
          </motion.section>
        </Element>
        <Element name="ind-mehanizacije">
          <motion.section
            id="industrija-mehanizacije"
            variants={sectionMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
          >
            <Bar headline={"INDUSTRIJA MEHANIZACIJE I TRAKTORA"} />

            <h3>INDUSTRIJA MEHANIZACIJE I TRAKTORA d.o.o. Beograd</h3>
            <p>
              TAFE je kao dugogodišnji partner, 2018. godine kupio iz stečaja
              Industriju mašine i traktora.
            </p>
            <p>
              Sa partnerima iz Srbije, te iste 2018. godine formirano je novo
              preduzeće - Industrija mehanizacije i traktora d.o.o. Beograd.
            </p>
            <p>
              Industrija mehanizacije i traktora je ekskluzivni distributer
              kompanije TAFE za brendove traktora TAFE i IMT.
            </p>
            <p>
              Traktori se dopremaju u nesastavljenom stanju, za industrijsku
              montažu. Proizvodnja je organizovana u pogonima u Jarkovcu -
              opština Sečanj, a predstavništvo je u Beogradu.
            </p>
            <div className="links">
              <p>U portfoliu traktora su sledeći modeli traktora:</p>
              <Link className="about-model-link" to="/modeli/standardni">
                STANDARDNI
              </Link>
              <Link className="about-model-link" to="/modeli/kompaktni">
                KOMPAKTNI
              </Link>
              <Link className="about-model-link" to="/modeli/magna">
                MAGNA
              </Link>
            </div>

            <p>
              Traktori su sa pogonom na dva i četiri točka, snage motora do 40
              kW (65KS).
            </p>

            <p>
              Od decembra 2024. godine, tržištu Srbije ponudićemo traktore IMT
              577 M i IMT 587 M snage motora do 60 kW (80KS) sa konkurentnim
              karakteristikama (u standardnoj poundi je kabina sa klimom).
            </p>

            <p>
              U proteklom periodu postali smo lider na tržištu traktora Srbije u
              segmentu snage motora do 37 kW (50KS).
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
            <h4>Misija</h4>
            <p>
              Sa iskustvom većim od polovine veka u gradnji traktora, mi smo tu
              da ponudimo snažne i kvalitetne traktore jednostavne za
              korišćenje, koji se proizvode po dokazanim projektima.
            </p>
            <p>
              IMT je prepoznatljiv brend sa konkuretnom ponudom. Naša ponuda je
              zasnovana na najboljem odnosu kvaliteta proizvoda i prodajne cene
              proizvoda.
            </p>
            <p>
              Zato je IMT lider na tržištu Srbije u segmentu traktora snage
              motora do 37kW / 50KS. Naš moto je da ispunimo zahteve i
              očekivanja naših korisnika. Istovremeno, polažemo veliku pažnju da
              naše angažovanje bude posvećeno očuvanju životne sredine.
            </p>

            <h4>Vizija</h4>
            <p>
              Cilj IMT je da budemo Korisnikov prvi izbor, kada je u pitanju
              efikasnost, pouzdanost, jednostavnost u rukovanju i održavanju.
            </p>
            <p>
              Takođe, da dugoročnom poslovno-tehničkom saradnjom i kooperacijom
              sa Indijskim partnerom TAFE ponudimo tržištu Srbije traktore snage
              motora do 60 kW (100 KS) sa karakteristikama koje su uporedne sa
              vodećim proizvođačima u tom segment tržišta i da u narednom period
              postanemo lider na tržištu.
            </p>
            <p>Osnovna načela poslovanja IMT su:</p>

            <ul>
              <li>
                Pouzdanim i kvalitetnim proizvodima težimo da ispunimo sve
                zahteve i očekivanja korisnika i budemo prepoznatljivi na
                tržištu po: širokom asortimanu, prihvatljivim uslovima prodaje,
                rokovima isporuke i kvalitetnom servisu.
              </li>
              <li>
                Stalno poboljšavamo efektivnost procesa da bi ostvarili
                povećanje produktivnosti i profita, uz smanjenje troškova i
                racionalno korišćenje resursa.
              </li>
              <li>
                Zajedno sa isporučiocima - kooperantima stvaramo kvalitetnije
                proizvode na zadovoljstvo korisnika, a u zajedničkom interesu.
              </li>
              <li>
                Mišljenje korisnika je za nas ocena uspešnosti svakog
                zaposlenog.
              </li>
              <li>
                Motivišemo zaposlene kroz obuke i timski rad, uvažavajući
                njihovu kreativnost i inicijativu za poboljšavanje sistema.
              </li>
              <li>
                Naše trajno opredeljenje je zaštita životne sredine i stvaranje
                ugodnog radnog ambijenta.
              </li>
              <li>
                Kvalitetno i na vreme odrađeni poslovi predstavljaju lični
                doprinos zaposlenih u sprovodenju načela poslovanja.
              </li>
              <li>
                Odgovornost za realizaciju osnovnih načela imaju svi zaposleni,
                a naročito rukovodna struktura.
              </li>
            </ul>
          </motion.section>
        </Element>
      </div>
    </div>
  );
};

export default About;
