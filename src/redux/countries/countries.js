export const LOADING = 'src/redux/countries/countries/LOADING';
export const LOADED = 'src/redux/countries/countries/LOADED';
export const DETAILS = 'src/redux/countries/countries/DETAILS';
export const GET_GLOBAL = 'src/redux/countries/countries/GET_GLOBAL';
export const GET_UK = 'src/redux/countries/countries/GET_UK';
export const GET_USA = 'src/redux/countries/countries/GET_USA';
export const GET_ARG = 'src/redux/countries/countries/GET_ARG';
export const GET_SPAIN = 'src/redux/countries/countries/GET_SPAIN';
export const GET_ITALY = 'src/redux/countries/countries/GET_ITALY';
export const GET_CHINA = 'src/redux/countries/countries/GET_CHINA';

const initialState = {};

export const loadingData = () => ({
  type: LOADING,
});

export const loadedData = () => ({
  type: LOADED,
});

export const useFilter = (filter) => ({
  type: DETAILS,
  filter,
});

export const getGlobal = (globalCount) => ({
  type: GET_GLOBAL,
  globalCount,
});

export const getUk = (ukCount) => ({
  type: GET_UK,
  ukCount,
});

export const getArg = (argCount) => ({
  type: GET_ARG,
  argCount,
});

export const getSpain = (spainCount) => ({
  type: GET_SPAIN,
  spainCount,
});

export const getItaly = (italyCount) => ({
  type: GET_ITALY,
  italyCount,
});

export const getChina = (chinaCount) => ({
  type: GET_CHINA,
  chinaCount,
});

export const getUsa = (usaCount) => ({
  type: GET_USA,
  usaCount,
});

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING: return { ...state, loading: true, filter: 'worldwide' };
    case LOADED: return { ...state, loading: false };
    case DETAILS: return { ...state, filter: action.filter };
    case GET_GLOBAL: return { ...state, globalCount: action.globalCount };
    case GET_ARG: return { ...state, argCount: action.argCount };
    case GET_CHINA: return { ...state, chinaCount: action.chinaCount };
    case GET_ITALY: return { ...state, italyCount: action.italyCount };
    case GET_SPAIN: return { ...state, spainCount: action.spainCount };
    case GET_UK: return { ...state, ukCount: action.ukCount };
    case GET_USA: console.log('us triggers');
      return { ...state, usaCount: action.usaCount };
    default: return state;
  }
};

export default countriesReducer;
