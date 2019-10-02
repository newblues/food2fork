import { combineReducers } from 'redux';

import recipesReducer from './reducers/recipes.reducer';

const rootReducer = combineReducers({
  recipes: recipesReducer
});

export default rootReducer;
