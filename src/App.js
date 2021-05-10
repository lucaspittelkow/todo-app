import { useState } from 'react';
import './styles/App.css';
import Tasks from './Tasks';

function App() {

  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(newTask.trim()){
      setTasks(tasks => [...tasks, {
          title: newTask,
          key: Date.now(),
          done: false,
        }]);
    }

    setNewTask("");
  };

  const handleCheckbox = (is_checked, item_key) => {
  
    const newList = tasks.map((item) => {
      if(item.key === item_key){
        const updatedTask = {
          ...item,
          done: is_checked,
        };

        return updatedTask;
      }
      return item;
    });

    setTasks(newList);
  }

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
      <Tasks
        data={tasks}
        onCheckbox={(is_checked, item_key) => {
          handleCheckbox(is_checked, item_key)
        }}
      />
    </div>
  );
}

export default App;
