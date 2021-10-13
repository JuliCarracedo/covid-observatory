export const LOAD = 'src/redux/countries/countries/LOAD';
export const LOADING = 'src/redux/countries/countries/LOADING';

const initialState = {};

export const loadFromApi = (data) => ({
  type: LOAD,
  data,
});

export const loadingData = () => ({
  type: LOADING,
});

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: return { ...state, ...action.data };
    case LOADING: return { ...state, loading: true };
    default: return state;
  }
};

export default countriesReducer;
