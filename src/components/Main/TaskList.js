import React from 'react';
import { useUsers } from '../../contexts/UserContext';
import TaskItem from './TaskItem';

export default function TaskList() {
  const { users, selectedIndex } = useUsers();
  const tasks = selectedIndex !== null ? users[selectedIndex].tasks : [];

  if (tasks.length === 0) {
    return <p>No hay tareas. Añade una :)</p>;
  }

  return (
    <ul>
      {tasks.map((task, idx) => (
        <TaskItem key={idx} task={task} index={idx} />
      ))}
    </ul>
  );
}
