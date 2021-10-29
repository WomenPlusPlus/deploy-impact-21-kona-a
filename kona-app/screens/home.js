import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home () {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to DOTS!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'poppins-medium',
    fontSize: 24,
    lineHeight: 36,
  }
});
