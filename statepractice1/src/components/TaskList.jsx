import { useState } from 'react'


function TaskList({tasks}){
 return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            Task: {task.task}, Done: {task.done}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;