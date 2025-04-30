import React from 'react';
import { useUsers } from '../../contexts/UserContext';

export default function UserList() {
  const { users, selectedIndex, selectUser } = useUsers();

  if (users.length === 0) {
    return <p>No hay usuarios. Añade uno :)</p>;
  }

  return (
    <ul>
      {users.map((u, i) => (
        <li
          key={i}
          style={{ fontWeight: selectedIndex === i ? 'bold' : 'normal', cursor: 'pointer' }}
          onClick={() => selectUser(i)}
        >
          {u.name}
        </li>
      ))}
    </ul>
  );
}
