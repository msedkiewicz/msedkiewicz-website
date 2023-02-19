import EntryPage from "./components/pages/EntryPage/EntryPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        {/* <Route path="/pl/" element={<SinglePost />} />
        <Route path="/pl/o-mnie/" element={<AddPostForm />} />
        <Route path="/pl/curriculum-vitae/" element={<AddPostForm />} />
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
