import { Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import BlogPage from "../components/pages/BlogPage";
import BlogDetail from "../components/pages/BlogDetail";
import AddBlog from "../components/pages/AddBlog";
import EditBlog from "../components/pages/EditBlog";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:blogid" element={<BlogDetail />} />
      <Route path="/add-blog" element={<AddBlog />} />
      <Route path="/edit-blog/:blogid" element={<EditBlog />} />

      <Route path="*" element={<div>Error Page</div>} />
    </Routes>
  );
};

export default Router;
