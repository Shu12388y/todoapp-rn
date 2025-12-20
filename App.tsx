/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/RootNavigator';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootNavigator/>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
