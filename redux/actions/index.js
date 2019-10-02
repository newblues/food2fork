/* eslint-disable func-names */
import { AT } from './action-types';

const API_KEY = '86a27bc155805a06ecc15c330fb9bb9a';
const END_POINT = 'https://www.food2fork.com/api/';

export const fetchRecipes = () => {
  return dispatch => {
    dispatch({ type: AT.FETCH_RECIPES_PENDING });
    fetch(`${END_POINT}/search?key=${API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        dispatch({ type: AT.FETCH_RECIPES_SUCCESS, payload: json });
      })
      .catch(error => {
        dispatch({ type: AT.FETCH_RECIPES_ERROR, payload: error });
      });
  };
};
