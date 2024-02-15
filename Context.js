import React, {useState, createContext, useContext } from 'react';

const Context = createContext();

export const AppContext = () => {
  return useContext(Context)
}

export const ContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkTheme(isDarkTheme => !isDarkTheme)
  }

  const toggleLogin = () => {
    setIsLoggedIn( isLoggedIn => !isLoggedIn)
  }

  const contextValue = {
    isDarkTheme: isDarkTheme,
    toggleTheme: toggleTheme,
    isLoggedIn: isLoggedIn,
    toggleLogin: toggleLogin,
  }

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}