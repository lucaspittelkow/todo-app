import { useState } from 'react';
import './styles/App.css';
import Task from './Task';

function App() {

  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    tasks.push(<Task>{newTask}</Task>)

    setNewTask("");
  };

  return (
    <div className="App">
      <h1>To-do App</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <label>Nova tarefa</label>
        <div className="taskForm">
          <input
            className="taskInput"
            type="text"
            onChange={e => handleChange(e)}
            value={newTask}
            placeholder="Comprar couve no mercado"
            />
          <input 
            className="taskSubmit"
            type="submit"
            value="+"
          />
        </div>
      </form>
      <ul>
        {tasks}
      </ul>
    </div>
  );
}

export default App;
