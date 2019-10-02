import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import GlobalStyles from './styles/globalStyles';

import Header from './components/header/header';

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <Header />
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
