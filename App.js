import * as React from 'react';
import { ContextProvider } from './Context';
import AppContainer from './src/screens/AppContainer';

const App = () => {
  return (
    <ContextProvider>
      <AppContainer />
    </ContextProvider>
  )
}

export default App;