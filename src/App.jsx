import "./Styles/App.scss";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Network from "./Pages/Network";
import Download from "./Pages/Download";
import Media from "./Pages/Media";
import BackToTopButton from "./Components/BackToTopButton";
import Footer from "./Components/Footer";
import ProductOne from "./Products/ProductOne";
import ProductTwo from "./Products/ProductTwo";
import ProductThree from "./Products/ProductThree";
import ProductFour from "./Products/ProductFour";
import ProductFive from "./Products/ProductFive";
import ProductSix from "./Products/ProductSix";
import ProductSeven from "./Products/ProductSeven";
import Contact from "./Pages/Contact";
import { useEffect, useState } from "react";

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

  return (
    <main>
      <BackToTopButton />
      <div className="nav-background"></div>
      <Navbar menu={menu} setMenu={setMenu} handleMenu={handleMenu} />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nama" element={<About />} />

          <Route path="/modeli" element={<Products />} />
          <Route path="/modeli/539.2 DI" element={<ProductOne />} />
          <Route path="/modeli/539.3 DI" element={<ProductTwo />} />
          <Route path="/modeli/549.3 DI" element={<ProductThree />} />
          <Route path="/modeli/549M OS" element={<ProductFour />} />
          <Route path="/modeli/565.2 DI" element={<ProductFive />} />
          <Route path="/modeli/577M HVAC" element={<ProductSix />} />
          <Route path="/modeli/587M HVAC" element={<ProductSeven />} />
          <Route path="/prodajna-mreza" element={<Network />} />
          <Route path="/preuzimanje" element={<Download />} />

          <Route path="/media" element={<Media />} />

          <Route path="/kontakt" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </main>
  );
};

export default App;
