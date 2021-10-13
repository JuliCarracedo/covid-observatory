// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CountryCard from './CountryCard';

// const loading = useSelector(store=>store.countriesReducer.loading);
const Home = () => (
  <div id="home">
    <section id="home-header">
      <h1>Covid observatory</h1>
      <p> x cases worldwide</p>
    </section>

    <div id="countries">
      <Link to="/details">
        {' '}
        <CountryCard country="Spain" />
        {' '}
      </Link>
      <Link to="/details">
        {' '}
        <CountryCard country="China" />
        {' '}
      </Link>
      <Link to="/details">
        {' '}
        <CountryCard country="Korea" />
        {' '}
      </Link>
      <Link to="/details">
        {' '}
        <CountryCard country="Argentina" />
        {' '}
      </Link>
      <Link to="/details">
        {' '}
        <CountryCard country="USA" />
        {' '}
      </Link>
      <Link to="/details">
        {' '}
        <CountryCard country="United Kingdom" />
        {' '}
      </Link>
    </div>
  </div>
);

export default Home;
