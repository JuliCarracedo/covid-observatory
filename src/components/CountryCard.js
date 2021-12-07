import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import { useFilter } from '../redux/countries/countries';

const CountryCard = (props) => {
  const { country } = props;
  let optional = null;
  let count = 0;
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.countriesReducer.loading);
  const handleClick = (e, country) => {
    e.stopPropagation();
    dispatch(useFilter(country));
  };
  if (!loading) {
    if (useSelector((state) => state.countriesReducer).ukCount) {
      switch (country) {
        case 'Argentina': count = useSelector((state) => state.countriesReducer).argCount.total;
          break;
        case 'Spain': count = useSelector((state) => state.countriesReducer).spainCount.total;
          break;
        case 'China': count = useSelector((state) => state.countriesReducer).chinaCount.total;
          break;
        case 'Italy': count = useSelector((state) => state.countriesReducer).italyCount.total;
          break;
        case 'United States': count = useSelector((state) => state.countriesReducer).usaCount.total;
          break;
        case 'United Kingdom': count = useSelector((state) => state.countriesReducer).ukCount.total;
          break;
        default: count = 0; break;
      }
    }
  }

  if (country === 'United States') { optional = 'US'; }
  if (country === 'United Kingdom') { optional = 'UK'; }

  return (
    <section className="countryCard">
      <Link className="link" to="/details" onClick={(e) => handleClick(e, country)}>
        <div className="card-header">
          <svg className="card-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 17v-4h-8v-2h8v-4l6 5-6 5z" /></svg>
        </div>
        <div className="country-lower">
          <h3>{ optional || country }</h3>
          <p>
            {count}
          </p>
        </div>
      </Link>
    </section>
  );
};

export default CountryCard;

CountryCard.propTypes = {
  country: PropTypes.string.isRequired,
};
