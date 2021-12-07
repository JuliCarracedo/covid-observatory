import { createStore, combineReducers } from 'redux';
import countriesReducer from '../../redux/countries/countries';

function createTestStore() {
  const store = createStore(
    combineReducers(countriesReducer),
  );
  return store;
}

export default createTestStore;
