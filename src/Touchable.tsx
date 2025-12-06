import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import React from 'react';

const Touchable = () => {
  return (
    <View>
      <Text>Touchable</Text>
      <TouchableHighlight underlayColor={'#ffff04'}>
        <Text>Touchable Highlight</Text>
      </TouchableHighlight>
      <TouchableOpacity>
        <Text>Touchable Opacity</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Touchable;
