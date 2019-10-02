import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
      <SearchBar
        placeholder='Type Here...'
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
