import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Iconicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/Home';
import ExploreScreen from '@/screens/Expore';
import AppointmentScreen from '@/screens/Appointments';
import ProfileScreen from '@/screens/Profile';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName: string | any;

            if (route.name === 'BookSpree') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Explore') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            } else if (route.name === 'Appointments') {
              iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }
            return <Iconicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveBackgroundColor: 'gray',
        })}>
        <Tab.Screen name="BookSpree" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Appointments" component={AppointmentScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
