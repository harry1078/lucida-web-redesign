import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LucidaHome from "./pages/LucidaHome";
import LucidaAboutUs from "./pages/LucidaAboutUs";
import LucidaResources from "./pages/LucidaResources";
import ArticleEDA from "./pages/ArticleEDA";
import ArticleHealthcare from "./pages/ArticleHealthcare";
import ArticleBIAI from "./pages/ArticleBIAI";
import ArticleLLM from "./pages/ArticleLLM";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/lucidaaboutus":
        title = "";
        metaDescription = "";
        break;
      case "/lucidaresources":
        title = "";
        metaDescription = "";
        break;
      case "/articleeda":
        title = "";
        metaDescription = "";
        break;
      case "/articlehealthcare":
        title = "";
        metaDescription = "";
        break;
      case "/articlebiai":
        title = "";
        metaDescription = "";
        break;
      case "/articlellm":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/solutions":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LucidaHome />} />
      <Route path="/lucidaaboutus" element={<LucidaAboutUs />} />
      <Route path="/lucidaresources" element={<LucidaResources />} />
      <Route path="/articleeda" element={<ArticleEDA />} />
      <Route path="/articlehealthcare" element={<ArticleHealthcare />} />
      <Route path="/articlebiai" element={<ArticleBIAI />} />
      <Route path="/articlellm" element={<ArticleLLM />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/solutions" element={<Solutions />} />
    </Routes>
  );
}
export default App;
