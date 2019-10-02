import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export default class Loader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color='#F9260C' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
