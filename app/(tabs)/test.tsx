import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Test = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // centers vertically
    alignItems: 'center',     // centers horizontally
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});

export default Test;
