import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

function ScrollViewComponent() {
  return (
    <View>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={true}
          nestedScrollEnabled={true}
          bounces={true}
        >
          {[...Array(40)].map((_, index) => {
            return (
              <View key={index} style={styles.box}>
                <Text>{index}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    backgroundColor: '#f0f0f5',
    height:80
  },
  box: {
    backgroundColor: 'gray',
    padding: 1,
  },
});

export default ScrollViewComponent;
