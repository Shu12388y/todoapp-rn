import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import MessageScreen from './screens/MessageScree';


const BottomTabs = createBottomTabNavigator();



const TabNavigator = () => {
  return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen name='Message' component={MessageScreen} />

        </BottomTabs.Navigator>    

)
}

export default TabNavigator