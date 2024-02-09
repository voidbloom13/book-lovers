import React, {useState, useContext} from 'react';
import { ThemeProvider } from './src/ThemeContext';
import Login from './src/screens/Login'
import NavigationTabs from './src/screens/NavigationTabs';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ThemeProvider>
      {
        isLoggedIn 
        ? <NavigationTabs onPress={() => {setIsLoggedIn(false)}} /> 
        : <Login onPress={() => {setIsLoggedIn(true)}} />
      }
    </ThemeProvider>
  )
}

export default App;