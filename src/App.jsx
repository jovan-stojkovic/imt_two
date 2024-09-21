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

import { tractors } from "./Helpers/Tractors";

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
      <Navbar menu={menu} setMenu={setMenu} handleMenu={handleMenu} />
      <div className="nav-left-background"></div>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nama/:section?" element={<About />} />

          <Route
            path="/modeli/:section?"
            element={<Products tractors={tractors} />}
          />
          <Route
            path="/modeli/:series/:tractorName"
            element={<SingleProduct tractors={tractors} />}
          />
          <Route path="/prodajna-mreza" element={<Network />} />
          <Route path="/preuzimanje" element={<Download />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/zakazite-servis" element={<Service />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
};

export default App;
