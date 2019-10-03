/* eslint-disable func-names */
import { AT } from './action-types';
import { API_KEY } from 'react-native-dotenv';

const d = '10b7bc9bddf4ce5a3fceaf5ecf61a988';

const END_POINT = 'https://www.food2fork.com/api/';

export const fetchRecipes = () => {
  return dispatch => {
    dispatch({ type: AT.FETCH_RECIPES_PENDING });
    fetch(`${END_POINT}/search?key=${d}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        if (json.error === 'limit') {
          throw Error('You have reached the maximum daily limit');
        }
        return dispatch({
          type: AT.FETCH_RECIPES_SUCCESS,
          payload: json.recipes
        });
      })
      .catch(error => {
        dispatch({ type: AT.FETCH_RECIPES_ERROR, payload: error });
      });
  };
};

export const getRecipeDetails = recipeId => {
  return dispatch => {
    dispatch({ type: AT.FETCH_RECIPES_PENDING });

    fetch(`${END_POINT}/get?key=${d}&rId=${recipeId}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        return dispatch({
          type: AT.GET_RECIPE_DETAILS,
          payload: json.recipe
        });
      })
      .catch(error => {
        dispatch({ type: AT.FETCH_RECIPES_ERROR, payload: error });
      });
  };
};

export const searchRecipes = searchInput => {
  return dispatch => {
    dispatch({ type: AT.FETCH_RECIPES_PENDING });
    fetch(`${END_POINT}/search?key=${d}&q=${searchInput}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        return dispatch({
          type: AT.SEARCH_RECIPES,
          payload: json.recipes
        });
      })
      .catch(error => {
        dispatch({ type: AT.FETCH_RECIPES_ERROR, payload: error });
      });
  };
};

export const closeModal = () => {
  return dispatch => {
    dispatch({
      type: AT.CLOSE_MODAL,
      payload: false
    });
  };
};
