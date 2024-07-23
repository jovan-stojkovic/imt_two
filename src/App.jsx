import "./Styles/App.scss";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Navbar />
      <div className="app"></div>
    </main>
  );
};

export default App;
