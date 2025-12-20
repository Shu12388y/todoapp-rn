import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigate = useNavigation();
  return (
    <View style={style.body}>
      <Text>Home Screen</Text>
      <TouchableHighlight
        style={style.button}
        onPress={() => {
          navigate.navigate('Contact');
        }}
      >
        <Text style={style.buttonText}>Go to Contact</Text>
      </TouchableHighlight>
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  body: {
    flex: 1,
    flexBasis: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#6c6dbeff',
    padding: 5,
    marginTop: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
