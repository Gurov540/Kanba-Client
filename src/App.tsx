import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import BoardPage from "./pages/BoardPage/BoardPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/board" element={<BoardPage />} />

      {/* если путь не существует */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
