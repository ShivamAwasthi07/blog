import { Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<div>Error Page</div>} />
    </Routes>
  );
};

export default Router;
