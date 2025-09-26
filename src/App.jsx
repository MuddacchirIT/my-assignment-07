import { Suspense, useState } from "react";
import "./App.css";
import CounterBox from "./components/CounterBox";
import Footer from "./components/Footer";
import Main_Section from "./components/Main_Section";
import Navbar from "./components/Navbar";
const fetchIssues = async () => {
  const result = await fetch("/data.json");
  return result.json();
};
const fetchPromise = fetchIssues();
function App() {
  const [inProgress, setInProgress] = useState(0);
  const [tasks, setTasks] = useState([]);
  const handleIncrement = (task) => {
    setInProgress((prev) => prev + 1);
    setTasks((prev) => [...prev, task]);
  };
  return (
    <div className="bg-[#E9E9E9]">
      <Navbar />
      <CounterBox inProgress={inProgress} />
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Main_Section
          fetchPromise={fetchPromise}
          onIncrement={handleIncrement}
          tasks={tasks}
        />
      </Suspense>
      <Footer />
    </div>
  );
}
export default App;
