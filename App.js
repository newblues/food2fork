import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';
import store from './redux/store';

import GlobalStyles from './styles/globalStyles';

import Header from './components/header/header';
import RecipesContainer from './components/recipes/recipes.container';

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <Provider store={store}>
          <Header />
          <RecipesContainer />
        </Provider>
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  }
});
