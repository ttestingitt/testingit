import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";

import Hero from "./Hero/Hero";
import Dynamic from "./Dynamic/Dynamic";
import Why from "./Why/Why";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Dynamic />
      <Why />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
