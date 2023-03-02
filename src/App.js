import EntryPage from "./components/pages/EntryPage/EntryPage";
import { Route, Routes } from "react-router-dom";
import HomePagePL from "./components/pages/HomePage/HomePagePL";
import AboutMePL from "./components/pages/AboutMe/AboutMePL";
import CurriculumPL from "./components/pages/CV/CVPL";
import { Helmet } from 'react-helmet';
import PortfolioPL from "./components/pages/Portfolio/PortfolioPL";
import HobbyPL from "./components/pages/Hobby/HobbyPL";
import ContactPL from "./components/pages/Contact/ContactPL";
import NotFoundPL from "./components/pages/NotFound/NotFoundPL";
import HomePageEN from "./components/pages/HomePage/HomePageEN";
import AboutMeEN from "./components/pages/AboutMe/AboutMeEN";
import CurriculumEN from "./components/pages/CV/CVEN";
import PortfolioEN from "./components/pages/Portfolio/PortfolioEN";
import HobbyEN from "./components/pages/Hobby/HobbyEN";

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
        <Route path="/pl/hobby/" element={<HobbyPL />} />
        <Route path="/pl/kontakt" element={<ContactPL />} />
        <Route path="/pl/*" element={<NotFoundPL />} />
        <Route path="/en/" element={<HomePageEN />} />
        <Route path="/en/about-me/" element={<AboutMeEN />} />
        <Route path="/en/curriculum-vitae/" element={<CurriculumEN />} />
        <Route path="/en/portfolio/" element={<PortfolioEN />} />
        <Route path="/en/hobbies/" element={<HobbyEN />} /> {/*
        <Route path="/en/contact" element={<ContactEN />} />
        <Route path="/en/*" element={<NotFoundEN />} />
        <Route path="/*" element={<NotFoundEN />} />*/}
      </Routes>
    </>
  );
}

export default App;
