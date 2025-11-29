/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TextInputComponent from './src/TextInput';
// import ScrollViewComponent from './src/ScrollView';
import Flexlayout from './src/Flexlayout';

function App() {
  const [newProfile, setNewProfile] = useState(false);

  return (
    <SafeAreaProvider>
      <View style={style.center}>
          <View style={style.profile} />
          <Text style={style.text}>Hello React Native</Text>
          <Button
            onPress={() => setNewProfile(prev => !prev)}
            title="Create new Profile"
          />
          {newProfile && <TextInputComponent />}
          {/* <ScrollViewComponent /> */}
          <Flexlayout/>
      </View>
    </SafeAreaProvider>
  );
}

export default App;

const style = StyleSheet.create({
  center: {
    flex: 1,
    flexBasis: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    height:'auto'
  },
  text: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '800',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: 'green',
    marginBottom: 12,
  },
  button: {
    marginTop: 10,
  },
});
