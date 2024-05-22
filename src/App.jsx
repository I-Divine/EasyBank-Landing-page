import "./App.css";
import HeroSection from "./components/Hero/Hero";
import Info from "./components/InfoSection/InfoSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Info />
    </div>
  );
}

export default App;
