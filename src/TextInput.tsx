import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

function TextInputComponent() {
  return (
    <View style={style.container}>
      <Text style={style.headerText}>Enter the email</Text>
      <TextInput style={style.input} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  headerText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    borderColor: 'grey',
    height:50,
    borderWidth:1,
    paddingHorizontal:20,
    marginBottom:10,
    width:260

  },    
});

export default TextInputComponent;
