import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@splidejs/react-splide/css";
import NavBar from "./components/NavBar";
import HowItWork from "./components/HowItWork";
import OurAglo from "./components/OurAglo";
import OurMissions from "./components/OurMissions";
import WhatWeDo from "./components/WhatWeDo";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Header from "./components/Header";
import Roadmap from "./components/Roadmap";
import Patners from "./components/Patners";
import Preloader from "./components/Preloder";
import Backtotop from "./components/BackToTop";

function App() {
  return (
    <>
      <Preloader />
      <Backtotop />
      <div className="position-relative">
        <span className=" shadow_white position-absolute top-0 start-0"></span>
        <NavBar />
        <Header />
      </div>
      <OurMissions />
      <Patners />
      <OurAglo />
      <WhatWeDo />
      <HowItWork />
      <Team />
      <Roadmap />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
