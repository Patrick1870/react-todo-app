import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {

  const [tasks, setTasks] = useState([
  {
    id: 0,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:00pm',
    reminder: true,
  },
  {
    id: 1,
    text: 'Meeting at work',
    day: 'Feb 6th at 1:00pm',
    reminder: false,
  }, 
  {
    id: 2,
    text: 'Food shopping',
    day: 'Feb 5th at 2:45pm',
    reminder: true,
  }
  ]);

// Delete Task function
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className="App">
      <Header title="Todo App: Task management" />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show.'}
    </div>
  );
}

export default App;
