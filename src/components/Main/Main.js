import React from 'react';
import { useUsers }   from '../../contexts/UserContext';
import TaskSection    from './TaskSection';

export default function Main() {
  const { users, selectedIndex } = useUsers();

  // Título dinámico según usuario seleccionado
  const title =
    selectedIndex !== null
      ? `Tareas de ${users[selectedIndex].name}`
      : 'Selecciona un usuario';

  return (
    <main className="main">
      <div className="card">
        <h1 id="mainTitle">{title}</h1>
        <TaskSection />
      </div>
    </main>
  );
}
