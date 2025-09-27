import { Suspense, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [resolved, setResolved] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const handleIncrement = (task) => {
    setInProgress((prev) => prev + 1);
    setTasks((prev) => [...prev, task]);
    toast.success(`In Progress!`, {
      position: "top-right",
      className: "text-xl",
      autoClose: 1500,
    });
  };
  const handleComplete = (index) => {
    setResolved((prev) => prev + 1);
    setInProgress((prev) => Math.max(prev - 1, 0));
    const CompleteTask = tasks[index];
    setResolvedTasks((prev) => [...prev, CompleteTask]);
    setTasks((prev) => prev.filter((_, i) => i !== index));
    toast.success(`Complete!`, {
      position: "top-right",
      className: "text-xl",
      autoClose: 1500,
    });
  };
  const handleRemoveResolved = (index) => {
    setResolvedTasks((prev) => {
      const newTasks = [...prev];
      newTasks.splice(index, 1);
      return newTasks;
    });
  };
  return (
    <div className="bg-[#E9E9E9]">
      <Navbar />
      <CounterBox inProgress={inProgress} resolved={resolved} />
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Main_Section
          fetchPromise={fetchPromise}
          onIncrement={handleIncrement}
          onComplete={handleComplete}
          tasks={tasks}
          resolved={resolved}
          resolvedTasks={resolvedTasks}
          onRemoveResolved={handleRemoveResolved}
        />
      </Suspense>
      <Footer />
      <ToastContainer />
    </div>
  );
}
export default App;
