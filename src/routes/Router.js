import { Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import BlogPage from "../components/pages/BlogPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="*" element={<div>Error Page</div>} />
    </Routes>
  );
};

export default Router;
