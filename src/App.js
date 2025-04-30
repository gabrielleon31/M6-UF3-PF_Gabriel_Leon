import React from 'react';
import { ThemeProvider }   from './contexts/ThemeContext';
import { UserProvider }    from './contexts/UserContext';
import Layout              from './components/Layout';
import './styles.css';    

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Layout />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
