import React, {useState} from 'react';
import Login from './src/Login'
import NavigationTabs from './src/NavigationTabs';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    isLoggedIn ? <NavigationTabs /> : <Login onPress={() => {setIsLoggedIn(true)}} />
  )
}

export default App;