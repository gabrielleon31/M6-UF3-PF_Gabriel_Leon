import React from 'react';
import { useUsers }   from '../../contexts/UserContext';
import TaskList       from './TaskList';
import NewTaskForm    from './NewTaskForm';

export default function TaskSection() {
  const { selectedIndex } = useUsers();

  return (
    <div
      id="taskSection"
      className={selectedIndex === null ? 'hidden' : ''}
    >
      {/* Solo mostramos la lista y el formulario si hay usuario */}
      {selectedIndex !== null && (
        <>
          <TaskList />
          <NewTaskForm />
        </>
      )}
    </div>
  );
}
