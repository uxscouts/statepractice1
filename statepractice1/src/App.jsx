import { useState } from 'react'
import TaskList from "./components/TaskList";
import './App.css'



function TodoList() {
  // Initial state is an empty array of objects
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  // Function to handle adding a new todo item
  const addTodo = () => {
    if (task.trim() === '') return;

    // 1. Create the new dictionary (object)
    const newTodo = {
      id: Date.now(), // Simple unique ID generation
      text: task,
      completed: false,
    };

    // 2. Create a new array with all existing items plus the new one
    //    The spread syntax `...` is the recommended way to do this.
    setTodos(prevTodos => [...prevTodos, newTodo]);

    // 3. Clear the input field
    setTask('');
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {/* Map over the todos array to render the list */}
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}





function NameForm() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    // Update the state as the user types
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default page reload on form submission
    alert(`A name was submitted: ${name}`);
    // You can also send the 'name' data to an API here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
      {name && <p>Current name: {name}</p>}
    </form>
  );
}



function App() {
const [tasks, setTasks] = useState([
{ id: 1, task: "Go shopping", done: true },
{ id: 2, task: "Wash dishes", done: false },
]);
  return (
    <>
      <p>State Practice 1</p>
      <TaskList tasks={tasks} />
      <hr/>
      <NameForm/>
      <TodoList/>
    </>
  )
}
export default App;
