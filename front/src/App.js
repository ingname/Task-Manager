import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";


function App() {

  const [tasks, setTasks] = useState([
    { id: 1, title: "Выучить React", completed: false },
    { id: 2, title: "Создать проект", completed: true },
  ]);

  const handleAddTask = () => {
    const newTask = { id: tasks.length + 1, title: "Новая задача", completed: false };
    setTasks([...tasks, newTask]);
  };

  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  
  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const [name, setName] = useState('');

  const handleInputChange = (event) => {
      setName(event.target.value);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Введенное наименование: ${name}`);
  };


  return (
    <div>
      <Header />
      <h1>Введите наименование</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Наименование:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleInputChange}
              placeholder="Введите наименование"
              required
            />
            <br /><br />
            <button onClick={handleAddTask}>Добавить задачу</button>
        </form>
          <TaskList
            tasks={tasks}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDelete}
          />
      <Footer />
    </div>
  );
}

export default App;
