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
    getRecipeDetails(recipe);
  };

  closeModal = () => {
    const { closeModal } = this.props;
    closeModal(false);
  };
  renderRecipes = () => {
    const { recipes, pending, error } = this.props;
    console.log('TLC: RecipesContainer -> renderRecipes -> error', error);

    if (pending) {
      return (
        <View style={styles.loaderContainer}>
          <Loader />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.loaderContainer}>
          <Text>You have reached the maximum daily limit</Text>
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
    const { isModalVisible } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>{this.renderRecipes()}</ScrollView>
        <ModalComponent
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
