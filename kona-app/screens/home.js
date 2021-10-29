import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home () {
  return (
    <View style={StyleSheet.container}>
      <text>Homepage of dots</text>
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
});
