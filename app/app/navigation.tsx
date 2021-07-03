import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home from '../containers/Home';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
