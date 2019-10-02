import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';

class Header extends Component {
  state = {
    search: ''
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            resizeMode='contain'
            source={require('../../assets/webLogo.png')}
          />
        </View>
        <SearchBar
          placeholder='Search by Ingredients or by Name...'
          onChangeText={this.updateSearch}
          value={search}
          lightTheme
        />
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 100,
    width: 300
  }
});
