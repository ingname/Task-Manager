import React from "react";


const TaskList = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.title} - {task.completed ? "Done" : "Not Done"}
                </li>
            ))}
        </ul>
    );
  };
  
  export default TaskList;
  