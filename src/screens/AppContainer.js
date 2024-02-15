import * as React from 'react';
import { AppContext } from '../../Context';
import NavigationTabs from './NavigationTabs';
import Login from './Login';

const AppContainer = () => {
  const isLoggedIn = AppContext().isLoggedIn;

  return (
    isLoggedIn
    ? <NavigationTabs />
    : <Login />
  )
}

export default AppContainer;