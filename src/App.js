import EntryPage from "./components/pages/EntryPage/EntryPage";
import { Route, Routes } from "react-router-dom";
import HomePagePL from "./components/pages/HomePage/HomePagePL";
import AboutMePL from "./components/pages/AboutMe/AboutMePL";
import CurriculumPL from "./components/pages/CV/CVPL";
import { Helmet } from 'react-helmet';
import PortfolioPL from "./components/pages/Portfolio/PortfolioPL";
import HobbyPL from "./components/pages/Hobby/HobbyPL";

function App() {
  return (
    <>
    <Helmet>
      <title>MSedkiewicz - FullStack Developer</title>
      <meta name="description" content="Magdalena Sędkiewicz - FullStack Developer z Reactowo - Javascriptowym odchyleniem" />
    </Helmet>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/pl/" element={<HomePagePL />} />
        <Route path="/pl/o-mnie/" element={<AboutMePL />} />
        <Route path="/pl/curriculum-vitae/" element={<CurriculumPL />} />
        <Route path="/pl/portfolio/" element={<PortfolioPL />} />
        <Route path="/pl/hobby/" element={<HobbyPL />} /> {/*
        <Route path="/category/:category" element={<CategoryFilter />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
