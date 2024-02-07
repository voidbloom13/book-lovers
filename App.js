import React, {useState} from 'react';
import Login from './src/screens/Login'
import NavigationTabs from './src/screens/NavigationTabs';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    isLoggedIn 
      ? <NavigationTabs onPress={() => {setIsLoggedIn(false)}} /> 
      : <Login onPress={() => {setIsLoggedIn(true)}} />
  )
}

export default App;