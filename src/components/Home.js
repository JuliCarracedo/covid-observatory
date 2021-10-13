// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CountryCard from './CountryCard';

const Home = () => {
  const data = useSelector((state) => state.countriesReducer);

  const { globalCount } = data;
  return (
    <div id="home">
      <section id="home-header">
        <h1>Covid observatory</h1>
        <p>
          {' '}
          {globalCount}
          {' '}
          cases worldwide
        </p>
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
          <CountryCard country="Italy" />
          {' '}
        </Link>
        <Link to="/details">
          {' '}
          <CountryCard country="Argentina" />
          {' '}
        </Link>
        <Link to="/details">
          {' '}
          <CountryCard country="United States" />
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
};

export default Home;
