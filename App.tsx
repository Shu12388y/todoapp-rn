/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TodoList from './src/TodoList';

function App() {
  return (
    <SafeAreaProvider>
      <View style={style.header}>
        <Text style={style.text}>DO YOUR TASK</Text>
      </View>
      <View style={style.body}>
        <TodoList />
      </View>
    </SafeAreaProvider>
  );
}

export default App;

const style = StyleSheet.create({
  header: {
    marginTop: 40,
  },
  body:{
    marginTop:40
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
});
