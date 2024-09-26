import "./Styles/App.scss";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Network from "./Pages/Network";
import Download from "./Pages/Download";
import Service from "./Pages/Service";
import SingleProduct from "./Pages/SingleProduct";

import BackToTopButton from "./Components/BackToTopButton";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import { useEffect, useState } from "react";

import {
  standardProducts,
  compactProducts,
  magnaProducts,
} from "./Helpers/Tractors";

const App = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menu]);

  const sectionMotion = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    <main>
      <BackToTopButton />
      <Navbar menu={menu} setMenu={setMenu} handleMenu={handleMenu} />
      <div className="nav-left-background"></div>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home sectionMotion={sectionMotion} />} />
          <Route
            path="/o-nama/:section?"
            element={<About sectionMotion={sectionMotion} />}
          />

          <Route
            path="/modeli/:section?"
            element={
              <Products
                standardProducts={standardProducts}
                compactProducts={compactProducts}
                magnaProducts={magnaProducts}
                sectionMotion={sectionMotion}
              />
            }
          />
          <Route
            path="/modeli/:series/:tractorName"
            element={
              <SingleProduct
                standardProducts={standardProducts}
                compactProducts={compactProducts}
                magnaProducts={magnaProducts}
              />
            }
          />
          <Route
            path="/prodajna-mreza"
            element={<Network sectionMotion={sectionMotion} />}
          />
          <Route
            path="/preuzimanje/:section?"
            element={<Download sectionMotion={sectionMotion} />}
          />
          <Route path="/kontakt" element={<Contact />} />
          <Route
            path="/zakazite-servis"
            element={<Service sectionMotion={sectionMotion} />}
          />
        </Routes>
      </div>
      <Footer />
    </main>
  );
};

export default App;
