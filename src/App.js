import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Containers/Home/Home";
import HireTalents from "./Containers/HireTalents/HireTalents";
import Hero from "./Hero/Hero";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HireTalents" element={<HireTalents />} />
      </Routes>
    </>
  );
}

export default App;
