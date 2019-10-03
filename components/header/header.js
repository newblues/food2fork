import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchRecipes, fetchRecipes } from '../../redux/actions/index';

const Header = ({ searchRecipes, fetchRecipes }) => {
  const [searchValue, setSearchValue] = useState('');

  const searchSubmit = () => {
    searchRecipes(searchValue);
  };

  const handleClear = () => {
    fetchRecipes();
  };

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
        onChangeText={searchValue => setSearchValue(searchValue)}
        value={searchValue}
        lightTheme
        onSubmitEditing={() => searchSubmit()} // fire action when return button is clicked
        onClear={() => handleClear()} // fire action when input is clear
      />
    </View>
  );
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
