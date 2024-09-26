import Bar from "./Bar";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <>
      <div className="home-about home-section section">
        <Bar headline={"O NAMA"} />
        <Link className="home-about-navlink" to="/o-nama/tafe">
          TAFE
        </Link>
        <p>
          TAFE - Tractors and Farm Equipment Limited, je indijski proizvođač
          traktora osnovan 1960. godine u Čenaju, Indija, sa godišnjim prometom
          od EUR 1.4 milijarde. Kao jedan od najvećih proizvođača traktora na
          svetu i drugi po veličini u Indiji po obimu proizvodnje, TAFE prodaje
          preko 180.000 traktora godišnje. TAFE je takođe značajan akcionar u
          AGCO Corporation, SAD - kompaniji vrednoj 14.4 milijarde američkih
          dolara koja je proizvođač traktora i poljoprivredne opreme.{" "}
          <Link className="home-about-more" to="/o-nama/tafe">
            Pročitaj još...
          </Link>
        </p>

        <Link className="home-about-navlink" to="/o-nama/industrija-masina">
          INDUSTRIJA MAŠINA I TRAKTORA
        </Link>
        <p>
          Godine 1947. osnovana je Centralna livnica, koja se tri godine kasnije
          udružila sa još četiri preduzeća iz istog područja formirajući
          Metalski zavod “Aleksandar Ranković”. Zavod je 1954. preimenovan u
          Industrija traktora i mašina - ITM.{" "}
          <Link className="home-about-more" to="/o-nama/industrija-masina">
            Pročitaj još...
          </Link>
        </p>

        <Link
          className="home-about-navlink"
          to="/o-nama/industrija-mehanizacije"
        >
          INDUSTRIJA MEHANIZACIJE I TRAKTORA
        </Link>
        <p>
          Industrija mehanizacije i traktora je eksluzivni distributer kompanije
          TAFE za brendove traktora TAFE i IMT. Traktori se dopremaju u
          nesastavljenom stanju, za industrijsku montažu. Proizvodnja je
          organizovana u pogonima u Jarkovcu - opština Sečanj, a predstavništvo
          je u Beogradu.{" "}
          <Link
            className="home-about-more"
            to="/o-nama/industrija-mehanizacije"
          >
            Pročitaj još...
          </Link>
        </p>

        <Link className="home-about-navlink" to="/o-nama/politika-kvaliteta">
          POLITIKA KVALITETA
        </Link>
        <p>
          Sa iskustvom većim od polovine veka u gradnji traktora, mi smo tu da
          ponudimo snažne i kvalitetne traktore jednostavne za korišćenje, koji
          se proizvode po dokazanim projektima.{" "}
          <Link className="home-about-more" to="/o-nama/politika-kvaliteta">
            Pročitaj još...
          </Link>
        </p>
      </div>
    </>
  );
};

export default HomeAbout;
