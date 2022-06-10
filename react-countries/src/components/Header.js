import React, {useState, useContext} from 'react';
import { ThemeContext } from '../context/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon as far} from '@fortawesome/free-regular-svg-icons';
import {faMoon as fas} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const {theme, changeTheme} = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <div className="headerComponent">
      <h1 onClick={() => navigate("/")}>Where in the world?</h1>
      <h2 onClick={() => { setDarkMode(!darkMode); changeTheme(darkMode ? theme.light : theme.dark); }}> <FontAwesomeIcon icon={darkMode ? fas : far} /> Dark Mode</h2> 
    </div>
  )
}
