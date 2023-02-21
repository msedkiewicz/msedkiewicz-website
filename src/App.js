import EntryPage from "./components/pages/EntryPage/EntryPage";
import { Route, Routes } from "react-router-dom";
import HomePagePL from "./components/pages/HomePage/HomePagePL";
import AboutMePL from "./components/pages/AboutMe/AboutMePL";
import CurriculumPL from "./components/pages/CV/CVPL";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/pl/" element={<HomePagePL />} />
        <Route path="/pl/o-mnie/" element={<AboutMePL />} />
        <Route path="/pl/curriculum-vitae/" element={<CurriculumPL />} /> {/*
        <Route path="/pl/post/edit/:id" element={<EditPostForm />} />
        <Route path="/category/" element={<Categories />} />
        <Route path="/category/:category" element={<CategoryFilter />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
