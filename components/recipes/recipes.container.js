import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchRecipes } from '../../redux/actions/index';

import RecipesComponent from './recipes.component';
import Loader from '../loader/loader';

class RecipesContainer extends Component {
  componentDidMount = () => {
    const { fetchRecipes } = this.props;
    fetchRecipes();
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
    if (!pending && recipes.length === 30)
      return recipes.map(recipe => (
        <RecipesComponent key={recipe.recipe_id} recipe={recipe} />
      ));
  };

  render() {
    const { recipes, pending, error } = this.props;
    console.log('TLC: RecipesContainer -> render -> recipes', recipes);

    return <View styles={styles.container}>{this.renderRecipes()}</View>;
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
  ...bindActionCreators({ fetchRecipes }, dispatch)
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
