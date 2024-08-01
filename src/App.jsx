import "./Styles/App.scss";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import BackToTopButton from "./Components/BackToTopButton";

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

        </Routes>
      </div>
    </main>
  );
};

export default App;
