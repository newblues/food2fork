/* eslint-disable func-names */
import { AT } from './action-types';

const b = '8b69d224faed6563aae36a10e92a4b2b';
const a = 'cc4083bbf4b0641e9594b45c82480cf9';
const API_KEY = '86a27bc155805a06ecc15c330fb9bb9a';
const END_POINT = 'https://www.food2fork.com/api/';

export const fetchRecipes = () => {
  return dispatch => {
    dispatch({ type: AT.FETCH_RECIPES_PENDING });
    fetch(`${END_POINT}/search?key=${b}`)
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

export const getRecipeDetails = recipe => {
  return dispatch => {
    dispatch({
      type: AT.GET_RECIPE_DETAILS,
      payload: recipe
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
