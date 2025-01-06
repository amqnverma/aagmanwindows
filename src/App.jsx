import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import WindowPage from "./pages/WindowPage";
import BlogPage from "./pages/BlogPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/window" element={<WindowPage />} />
          <Route path="/blogs" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
