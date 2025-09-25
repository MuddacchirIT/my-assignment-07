import "./App.css";
import CounterBox from "./components/CounterBox";
import Footer from "./components/Footer";
import Main_Section from "./components/Main_Section";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="bg-[#E9E9E9]">
      <Navbar />
      <CounterBox />
      <Main_Section />
      <Footer />
    </div>
  );
}

export default App;
