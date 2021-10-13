import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import Details from './components/Details';
import Navbar from './components/Navbar';
import loadAsync from './redux/countries/api';

function App() {
  const dispatch = useDispatch();
  const [download, setDownload] = useState('idle');
  const loading = useSelector((state) => state.countriesReducer.loading);

  useEffect(() => {
    if (download === 'idle') {
      setDownload('done');
      dispatch(loadAsync());
    }
  });

  return (

    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          {!loading && <Home />}
          {loading && <img alt="loading" src="https://c.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif" />}
        </Route>
        <Route path="/details"><Details /></Route>
      </Switch>
    </Router>
  );
}

export default App;
