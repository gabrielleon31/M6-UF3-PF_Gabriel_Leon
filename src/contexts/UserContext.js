import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const addUser = name => {
    setUsers(prev => [...prev, { name, tasks: [] }]);
  };

  const selectUser = idx => {
    setSelectedIndex(idx);
  };

  const deselectUser = () => {
    setSelectedIndex(null);
  };

  const addTask = text => {
    if (selectedIndex === null) return;
    setUsers(prev =>
      prev.map((user, ui) =>
        ui === selectedIndex
          ? { 
              ...user, 
              tasks: [...user.tasks, { text, completed: false }] 
            }
          : user
      )
    );
  };

  const toggleTask = idx => {
    if (selectedIndex === null) return;
    setUsers(prev =>
      prev.map((user, ui) =>
        ui === selectedIndex
          ? {
              ...user,
              tasks: user.tasks.map((task, ti) =>
                ti === idx
                  ? { ...task, completed: !task.completed }
                  : task
              )
            }
          : user
      )
    );
  };

  const editTask = (idx, newText) => {
    if (selectedIndex === null) return;
    setUsers(prev =>
      prev.map((user, ui) =>
        ui === selectedIndex
          ? {
              ...user,
              tasks: user.tasks.map((task, ti) =>
                ti === idx
                  ? { ...task, text: newText.trim() }
                  : task
              )
            }
          : user
      )
    );
  };

  const deleteTask = idx => {
    if (selectedIndex === null) return;
    setUsers(prev =>
      prev.map((user, ui) =>
        ui === selectedIndex
          ? {
              ...user,
              tasks: user.tasks.filter((_, ti) => ti !== idx)
            }
          : user
      )
    );
  };

  return (
    <UserContext.Provider value={{
      users,
      selectedIndex,
      addUser,
      selectUser,
      deselectUser,
      addTask,
      toggleTask,
      editTask,
      deleteTask
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUsers() {
  return useContext(UserContext);
}
