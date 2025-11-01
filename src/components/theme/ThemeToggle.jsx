import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from '../../context/ThemeContext';
import './themeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDarkMode ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeToggle;