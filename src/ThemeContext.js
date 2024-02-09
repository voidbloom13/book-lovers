import * as React from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export const useTheme = () => {
  return React.useContext(ThemeContext)
}

export const useThemeUpdate = () => {
  return React.useContext(ThemeUpdateContext)
}

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = React.useState(false);
  
  const toggleTheme = () => {
    setDarkTheme(darkTheme => !darkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}