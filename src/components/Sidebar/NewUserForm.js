import React, { useState } from 'react';
import { useUsers } from '../../contexts/UserContext';

export default function NewUserForm() {
  const [name, setName] = useState('');
  const { addUser } = useUsers();

  const onSubmit = e => {
    e.preventDefault();
    if (!name.trim()) return;
    addUser(name.trim());
    setName('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Nuevo usuario..."
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Añadir Usuario</button>
    </form>
  );
}
