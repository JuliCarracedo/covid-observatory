import { useSelector } from 'react-redux';
import CountryCard from './CountryCard';

const Home = () => {
  const data = useSelector((state) => state.countriesReducer);
  let globalCount = 0;
  if (data.globalCount) {
    globalCount = data.globalCount;
  }
  return (
    <div id="home">
      <div className="home-header">
        <h2>Worldwide</h2>
        <p>
          {globalCount}
        </p>
      </div>
      <p className="subtitle">
        Covid-19 cases by country
      </p>
      <div id="countries">
        <div className="country-container">
          <CountryCard country="Spain" />
        </div>
        <div className="country-container">
          <CountryCard country="China" />
        </div>
        <div className="country-container">
          <CountryCard country="Italy" />
        </div>
        <div className="country-container">
          <CountryCard country="Argentina" />
        </div>
        <div className="country-container">
          <CountryCard country="United States" />
        </div>
        <div className="country-container">
          <CountryCard country="United Kingdom" />
        </div>
      </div>
    </div>
  );
};

export default Home;
