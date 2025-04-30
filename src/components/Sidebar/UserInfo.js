import React from 'react';
import { useUsers } from '../../contexts/UserContext';

export default function UserInfo() {
  const { users, selectedIndex, deselectUser } = useUsers();
  if (selectedIndex === null) return null;

  const user = users[selectedIndex];
  const completed = user.tasks.filter(t => t.completed).length;

  return (
    <div>
      <hr />
      <p>{user.name}</p>
      <p>Tareas: {completed} / {user.tasks.length} completadas</p>
      <button onClick={deselectUser}>Deseleccionar</button>
    </div>
  );
}
