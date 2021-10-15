/* eslint-disable no-unused-expressions */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';
import store from '../../redux/configStore';
import App from '../../App';
import apiData, {
  apiDataArg, apiDataChina, apiDataSpain, apiDataUk, apiDataUs,
} from './apidata';
import 'regenerator-runtime/runtime';

global.fetch = fetchMock;
describe('Integrations test', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('Mock matches snapshot', async () => {
    fetch.mockResponseOnce(JSON.stringify(apiData))
      .mockResponseOnce(JSON.stringify(apiDataArg)).mockResponseOnce(JSON.stringify(apiDataUs))
      .mockResponseOnce(JSON.stringify(apiDataUk))
      .mockResponseOnce(JSON.stringify(apiDataSpain))
      .mockResponseOnce(JSON.stringify(apiDataChina))
      .mockResponseOnce(JSON.stringify(apiData));
    const { tree } = renderer.create(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot;
  });
});
