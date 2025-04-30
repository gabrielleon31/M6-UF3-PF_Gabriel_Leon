import React from 'react';
import NewUserForm from './NewUserForm';
import UserList    from './UserList';
import UserInfo    from './UserInfo';
import ThemeToggle from './ThemeToggle';

export default function Sidebar() {
  return (
    <aside className="sidebar card">
      <h2>Usuarios</h2>
      <UserList />
      <NewUserForm />
      <UserInfo />
      <ThemeToggle />
    </aside>
  );
}
