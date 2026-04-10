import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";
import DirectorsPage from "./components/DirectorsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
      <Route path="/directors" element={<DirectorsPage />} />
    </Routes>
  );
}
