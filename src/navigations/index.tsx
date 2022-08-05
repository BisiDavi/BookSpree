import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@/screens/Default';
import HomeScreen2 from '@/screens/Default/screen-2';

const RootStack = createNativeStackNavigator();

export default function RootNavigationStack() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Screen2" component={HomeScreen2} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
