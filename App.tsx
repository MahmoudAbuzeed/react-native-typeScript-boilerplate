import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import Navigation from './app/app/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
export default App;
