import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} style={{ marginTop: 'auto' }}>
      {theme === 'light' ? '🌙' : '☀️'} Tema
    </button>
  );
}
