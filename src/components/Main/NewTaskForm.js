import React, { useState } from 'react';
import { useUsers } from '../../contexts/UserContext';

export default function NewTaskForm() {
  const [text, setText] = useState('');
  const { addTask } = useUsers();

  const onSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text.trim());
    setText('');
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', marginTop: '0.5rem' }}>
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      {/* IMPORTANTE: type="submit" y SIN onClick */}
      <button type="submit">Añadir Tarea</button>
    </form>
  );
}
