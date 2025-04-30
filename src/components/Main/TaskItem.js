import React from 'react';
import { useUsers } from '../../contexts/UserContext';

export default function TaskItem({ task, index }) {
  const { toggleTask, editTask, deleteTask } = useUsers();

  const handleEdit = e => {
    e.stopPropagation(); 
    const newText = prompt('Editar tarea:', task.text);
    if (newText !== null && newText.trim() !== '') {
      editTask(index, newText);
    }
  };

  const handleDelete = e => {
    e.stopPropagation();
    deleteTask(index);
  };

  return (
    <li
      className={task.completed ? 'completed' : ''}
      onClick={() => toggleTask(index)}
      style={{ cursor: 'pointer' }}
    >
      <span>{task.text}</span>
      <div className="actions">
        <button onClick={handleEdit}>✏️</button>
        <button onClick={handleDelete}>🗑️</button>
      </div>
    </li>
  );
}
