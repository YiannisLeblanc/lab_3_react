import { useState } from 'react';
import TaskInput from './components/TaskInput';

function App() {
  const [tasks, setTasks] = useState([]);

  // 1. Complétion de addTask
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // 3. Suppression
  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <div className="container">
      <h1>Ma Todo List</h1>

      <TaskInput onAddTask={addTask} />

      <ul>
        // 2. affichage avec .map()
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            {task.text}
            // 4. Suppression au click du bouton
            <button
              className="delete-btn"
              onClick={() => deleteTask(task.id)}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;