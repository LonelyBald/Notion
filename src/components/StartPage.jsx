import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import React from 'react';
export const StartPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AzaliaNow</Text>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 30,
    marginLeft: '30%',
    marginBottom: 20,
    color: 'red',
  },
});
