import "./App.css";
import HeroSection from "./components/Hero/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
