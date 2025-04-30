import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Main    from './Main/Main';

export default function Layout() {
  return (
    <div className="app">
      <Sidebar />
      <Main />
    </div>
  );
}
