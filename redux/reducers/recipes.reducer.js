import { AT } from '../actions/action-types';

const initialState = {
  pending: false,
  error: null,
  recipes: [],
  recipeDetails: {},
  isModalVisible: false
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.FETCH_RECIPES_PENDING:
      return {
        ...state,
        pending: true
      };
    case AT.FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        pending: false,
        recipes: action.payload
      };
    case AT.FETCH_RECIPES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload
      };
    case AT.GET_RECIPE_DETAILS:
      return {
        ...state,
        pending: false,
        recipeDetails: action.payload,
        isModalVisible: true
      };
    case AT.CLOSE_MODAL:
      return {
        ...state,
        isModalVisible: false
      };
    case AT.SEARCH_RECIPES: {
      return {
        ...state,
        pending: false,
        recipes: action.payload
      };
    }

    default:
      return state;
  }
};

export default recipesReducer;
