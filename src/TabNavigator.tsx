import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessageScreen from './screens/MessageScree';
import ContactScreen from './screens/ContactScreen';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name='Home' component={HomeScreen}/>
      <BottomTabs.Screen name="Message" component={MessageScreen} />
      <BottomTabs.Screen name='Contact' component={ContactScreen}/>
      <BottomTabs.Screen name='List' component={ListScreen} />
    </BottomTabs.Navigator>
  );
};

export default TabNavigator;
