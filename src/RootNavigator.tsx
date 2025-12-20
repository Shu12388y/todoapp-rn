// create stack Navigator

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';

const Stack = createStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Contact" component={ContactScreen}/>
    </Stack.Navigator>
  );
};


export default RootNavigator;