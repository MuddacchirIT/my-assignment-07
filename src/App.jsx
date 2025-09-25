import { Suspense } from "react";
import "./App.css";
import CounterBox from "./components/CounterBox";
import Footer from "./components/Footer";
import Main_Section from "./components/Main_Section";
import Navbar from "./components/Navbar";
const fetchIssues = async () => {
  const result = await fetch("/data.json");
  return result.json();
};

function App() {
  const fetchPromise = fetchIssues();
  return (
    <div className="bg-[#E9E9E9]">
      <Navbar />
      <CounterBox />
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Main_Section fetchPromise={fetchPromise} />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
