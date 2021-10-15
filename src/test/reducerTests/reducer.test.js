/* eslint-disable no-unused-expressions */
import { filterData } from '../../redux/countries/api';
import countriesReducer, {
  getArg,
  getChina,
  getItaly,
  getSpain,
  getUk,
  getUsa,
  loadedData, loadingData, useFilter,
} from '../../redux/countries/countries';
import { apiDataItaly } from './apidata';

describe('Countries Reducer', () => {
  it('exists', () => {
    expect(countriesReducer([], { type: 'test' })).toStrictEqual([]);
  });
  it('Returns loading status on LOADING action', () => {
    expect(countriesReducer({}, loadingData()).loading).toBeTruthy;
  });
  it('Returns a default filter on LOADING action', () => {
    expect(countriesReducer({}, loadingData()).filter).toBe('worldwide');
  });
  it('returns a boolean for loading status on LOADED action', () => {
    expect(countriesReducer({}, loadedData()).loading).toBeFalsy;
  });
  it('changes the filter on useFilter action', () => {
    expect(countriesReducer({}, useFilter('Argentina')).filter).toBe('Argentina');
  });
  it('creates an argCount property on getArg action', () => {
    expect(countriesReducer({}, getArg({ name: 'argentina' })).argCount).toBeTruthy;
  });
  it('creates an usaCount property on getUsa action', () => {
    expect(countriesReducer({}, getUsa({ name: 'argentina' })).usaCount).toBeTruthy;
  });
  it('creates an ukCount property on getUk action', () => {
    expect(countriesReducer({}, getUk({ name: 'argentina' })).ukCount).toBeTruthy;
  });
  it('creates an italyCount property on getItaly action', () => {
    expect(countriesReducer({}, getItaly({ name: 'argentina' })).italyCount).toBeTruthy;
  });
  it('creates a chinaCount property on getChina action', () => {
    expect(countriesReducer({}, getChina({ name: 'argentina' })).chinaCount).toBeTruthy;
  });
  it('creates an spainCount property on getSpain action', () => {
    expect(countriesReducer({}, getSpain({ name: 'argentina' })).spainCount).toBeTruthy;
  });
});

describe('Filter function', () => {
  const countryData = apiDataItaly;
  it('Retrieves total cases for a country', () => {
    expect(filterData(countryData).total).toBe(270189);
  });

  it('ignores unnecesary data total cases for a country', () => {
    expect(filterData(countryData).today_deaths).toBeFalsy;
  });

  it('builds an array out of the country\'s regions', () => {
    expect(filterData(countryData).regions).toBeTruthy;
  });

  it('catches only name and count for each region', () => {
    expect(filterData(countryData).regions).toStrictEqual([{ name: 'Umbria', count: 1803 }, { name: 'Emilia-Romagna', count: 32021 }]);
  });
});
