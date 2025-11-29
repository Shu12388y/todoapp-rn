import React from 'react';
import { StyleSheet, View } from 'react-native';

function Flexlayout() {
  return (
    <View style={style.container}>
      <View style={style.box} />
      <View style={style.box} />
      <View style={style.box} />
      <View style={style.box} />
      <View style={style.box} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap:13,
    padding: 1,
  },
  box: {
    height: 60,
    width: 60,
    backgroundColor: '#ff05',
  },
});

export default Flexlayout;
