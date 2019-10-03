import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  fetchRecipes,
  getRecipeDetails,
  closeModal
} from '../../redux/actions/index';

import RecipesComponent from './recipes.component';
import ModalComponent from '../modal/modal.component';
import Loader from '../loader/loader';

class RecipesContainer extends Component {
  componentDidMount = () => {
    const { fetchRecipes } = this.props;
    fetchRecipes();
  };

  getRecipeDetails = recipe => {
    const { getRecipeDetails } = this.props;
    getRecipeDetails(recipe.recipe_id);
  };

  closeModal = () => {
    const { closeModal } = this.props;
    closeModal(false);
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

    // handling error for limit usage ( 50 / day ) by api...
    if (error) {
      return (
        <View style={styles.loaderContainer}>
          <Text>You have reached the maximum daily limit</Text>
        </View>
      );
    }

    // case searchInput doest match any recipe
    if (!pending && recipes.length === 0) {
      return (
        <View style={styles.loaderContainer}>
          <Text>Sorry, no recipe founded !</Text>
        </View>
      );
    }

    if (!pending && !!recipes)
      return recipes.map(recipe => (
        <RecipesComponent
          key={recipe.recipe_id}
          recipe={recipe}
          getRecipeDetailsCallback={this.getRecipeDetails}
        />
      ));
  };

  render() {
    const { isModalVisible, recipeDetails } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>{this.renderRecipes()}</ScrollView>
        <ModalComponent
          recipeDetails={recipeDetails}
          isVisible={isModalVisible}
          closeModal={this.closeModal}
        ></ModalComponent>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes.recipes,
    pending: state.recipes.pending,
    error: state.recipes.error,
    recipeDetails: state.recipes.recipeDetails,
    isModalVisible: state.recipes.isModalVisible
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    { fetchRecipes, getRecipeDetails, closeModal },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loaderContainer: {
    flex: 1,
    marginTop: 150
  }
});
