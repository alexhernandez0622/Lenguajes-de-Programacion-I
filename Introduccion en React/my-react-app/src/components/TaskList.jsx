// src/components/TaskList.jsx
import { useState } from 'react';
import { TaskItem } from './TaskItem';

// Componente TaskList para gestionar una lista de tareas
export function TaskList() {
  // Estado para almacenar las tareas
  const [tasks, setTasks] = useState([]);
  // Estado para manejar el valor del input
  const [taskText, setTaskText] = useState('');

  // Función para manejar el envío del formulario y agregar una tarea nueva
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return; // Verifica que el input no esté vacío
    setTasks([...tasks, { id: Date.now(), text: taskText }]);
    setTaskText(''); // Limpia el input después de añadir la tarea
  };

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Añadir nueva tarea"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button type="submit">Añadir</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} text={task.text} />
        ))}
      </ul>
    </div>
  );
}

