import "./Styles/App.scss";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import BackToTopButton from "./Components/BackToTopButton";
import Footer from "./Components/Footer";
import ProductOne from "./Products/ProductOne";
import ProductTwo from "./Products/ProductTwo";
import ProductThree from "./Products/ProductThree";
import ProductFour from "./Products/ProductFour";
import ProductFive from "./Products/ProductFive";
import ProductSix from "./Products/ProductSix";

const App = () => {
  return (
    <main>
      <BackToTopButton />
      <div className="nav-background"></div>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modeli" element={<Products />} />
          <Route path="/modeli/539.2 DI" element={<ProductOne />} />
          <Route path="/modeli/539.3 DI" element={<ProductTwo />} />
          <Route path="/modeli/549.3 DI" element={<ProductThree />} />
          <Route path="/modeli/549M OS" element={<ProductFour />} />
          <Route path="/modeli/565.2 DI" element={<ProductFive />} />
          <Route path="/modeli/IMT 577M HVAC" element={<ProductSix />} />
        </Routes>
        <Footer />
      </div>
    </main>
  );
};

export default App;
