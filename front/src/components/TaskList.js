import React from "react";
import Task from "./Task";


const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <Task
                key={task.id}
                task={task}
                onToggleComplete={onToggleComplete}
                onDelete={onDelete}
                />
            ))}
        </ul>
    );
  };
  
  export default TaskList;
  