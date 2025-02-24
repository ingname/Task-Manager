import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";


const tasks = [
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Build a project", completed: true },
];

function App() {
  return (
    <div>
      <Header />
      <TaskList tasks={tasks}/>
      <Footer />
    </div>
  );
}

export default App;
