/* eslint-disable no-unused-expressions */
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const CountryCard = (props) => {
  const { country } = props;
  let count = 0;
  const loading = useSelector((state) => state.countriesReducer.loading);
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
        default: 'Unknown'; break;
      }
    }
  }
  return (
    <section className="countryCard">
      <h3>{ country }</h3>
      <p>
        {count}
        {' '}
        confirmed cases
      </p>
    </section>
  );
};

export default CountryCard;

CountryCard.propTypes = {
  country: PropTypes.string.isRequired,
};
