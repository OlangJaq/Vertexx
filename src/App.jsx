import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
    </Routes>
  );
}
