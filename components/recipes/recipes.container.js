import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchRecipes, getRecipeDetails } from '../../redux/actions/index';

import RecipesComponent from './recipes.component';
import Loader from '../loader/loader';

class RecipesContainer extends Component {
  state = {
    modalVisible: false
  };

  componentDidMount = () => {
    const { fetchRecipes } = this.props;
    fetchRecipes();
  };

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  getRecipeDetails = recipe => {
    const { getRecipeDetails } = this.props;
    getRecipeDetails(recipe);
  };

  renderRecipes = () => {
    const { recipes, pending, error } = this.props;

    if (pending) {
      return (
        <View style={styles.loaderContainer}>
          <Loader />
        </View>
      );
    }
    if (pending === false && recipes.length === 30)
      return recipes.map(recipe => (
        <RecipesComponent
          key={recipe.recipe_id}
          recipe={recipe}
          getRecipeDetailsCallback={this.getRecipeDetails}
        />
      ));
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>{this.renderRecipes()}</ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes.recipes,
    pending: state.recipes.pending,
    error: state.recipes.error
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ fetchRecipes, getRecipeDetails }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesContainer);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  loaderContainer: {
    flex: 1,
    marginTop: 150
  }
});
