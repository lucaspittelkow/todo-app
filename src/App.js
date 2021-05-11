import { useEffect, useState } from 'react';
import './styles/global.css';
import './styles/App.css';
import Tasks from './Tasks';

function App() {

  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const ls_tasks = localStorage.getItem("@todo-app/tasks");

  useEffect(() => {
    if(ls_tasks !== null){
      setTasks(JSON.parse(localStorage.getItem("@todo-app/tasks")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@todo-app/tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(newTask.trim()){
      setTasks(tasks => [...tasks, {
          title: newTask,
          key: Date.now(),
          done: false,
          done_at: null,
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
          done_at: (is_checked ? Date.now() : null)
        };

        return updatedTask;
      }
      return item;
    });

    setTasks(newList);
  };

  const handleDelete = (item_key) => {
    const newList = tasks.slice().filter((item) => {
      return item.key != item_key
    });

    setTasks(newList);
  };

  const handleRename = (item_key, new_title) => {
    const newList = tasks.map((item) => {
      if(item.key === item_key){
        const updatedTask = {
          ...item,
          title: new_title,
        };
        return updatedTask;
      }
      return item;
    });

    setTasks(newList);
  };

  return (
    <div className="App">

      <div className="App-header">
        <h1 className="title">To-do App</h1>

        <form onSubmit={e => handleSubmit(e)}>

          <div className="taskForm">
            <input
              className="taskInput"
              type="text"
              onChange={e => handleChange(e)}
              value={newTask}
              placeholder="Escreva uma nova tarefa"
              />

            <input 
              className="taskSubmit"
              type="submit"
              value="+"
            />
          </div>

        </form>

      </div>

      <div className="tasksComponent">
        <Tasks
          data={tasks}
          onCheckbox={(is_checked, item_key) => {
            handleCheckbox(is_checked, item_key)
          }}
          onDelete={(item_key) => {
            handleDelete(item_key)
          }}
          onRename={(item_key, new_title) => {
            handleRename(item_key, new_title)
          }}
        />
      </div>

    </div>
  );
}

export default App;
