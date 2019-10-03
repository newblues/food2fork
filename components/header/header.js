import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchRecipes, fetchRecipes } from '../../redux/actions/index';

class Header extends Component {
  state = {
    search: ''
  };

  updateSearch = search => {
    this.setState({ search });
  };

  searchSubmit = () => {
    const { searchRecipes } = this.props;
    searchRecipes(this.state.search);
  };

  fetchRecipes = () => {
    const { fetchRecipes } = this.props;
    fetchRecipes();
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
          onSubmitEditing={this.searchSubmit} // fire action when return button is clicked
          onClear={this.fetchRecipes} // fire action when input is clear
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ searchRecipes, fetchRecipes }, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Header);

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
