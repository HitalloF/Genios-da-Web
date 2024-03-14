// App.js

import React from 'react';
import AppNavigator from './src/navigation/AppNavigator.js';
import { LanguageProvider } from './src/context/LanguageContext';

const App = () => {

  return (
  <LanguageProvider>
    <AppNavigator/>
  </LanguageProvider>
  );
};

export default App;
