import "./App.css";
import LatestArticles from "./components/ArticleSection/Articles";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/Hero/Hero";
import Info from "./components/InfoSection/InfoSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Info />
      <LatestArticles />
      <Footer />
    </div>
  );
}

export default App;
