import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Documentation from "./pages/Documentation";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/documentacao" element={<Documentation />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="/termos" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
