// src/App.jsx
import { TaskList } from './components/TaskList';
import './styles/App.css';

// Componente principal que renderiza el TaskList
export default function App() {
  return (
    <div className="app-container">
      <h1>Gestión de Tareas</h1>
      <TaskList />
    </div>
  );
}

