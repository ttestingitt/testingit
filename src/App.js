import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./Containers/Home/Home";
import HireTalents from "./Containers/HireTalents/HireTalents";

function App() {
  return (
    <>
      <Routes>
        <Route path="/testingit" element={<Navigate to="home" />} />
        <Route path="/testingit/home" element={<Home />} />
        <Route path="/testingit/HireTalents" element={<HireTalents />} />
      </Routes>
    </>
  );
}

export default App;
