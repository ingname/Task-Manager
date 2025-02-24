import React from "react";


const Task = ({ task, onToggleComplete, onDelete }) => {
    return (
      <li>
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.title}
        </span>
        <button onClick={() => onToggleComplete(task.id)}>
          {task.completed ? "Вернуть" : "Выполнить"}
        </button>
        <button onClick={() => onDelete(task.id)}>Удалить</button>
      </li>
    );
  };
  


export default Task;
