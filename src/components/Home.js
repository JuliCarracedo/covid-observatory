import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import Filter from './Filter';

const Home = () => {
  const data = useSelector((state) => state.countriesReducer);
  let globalCount = 0;
  const [filter, setFilter] = useState('default');
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
      <div className="subtitle">
        <select id="select-filter" defaultValue="default" onChange={(e) => setFilter(e.target.value)}>
          <option value="default" disabled>Choose a filter</option>
          <option value="by-continent" disabled>By continent</option>
          <option value="all">All continents</option>
          <option value="asia">Asia</option>
          <option value="america">America</option>
          <option value="europe">Europe</option>
          <option value="by-language" disabled>By language</option>
          <option value="spanish">Spanish</option>
          <option value="english">English</option>
          <option value="other">Other languages</option>
        </select>
      </div>
      <Filter filter={filter} />
    </div>
  );
};

export default Home;
