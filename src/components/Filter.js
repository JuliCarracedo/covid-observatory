import PropTypes from 'prop-types';
import CountryCard from './CountryCard';

const Filter = (props) => {
  const { filter } = props;
  let list = ['Argentina', 'China', 'Italy', 'Spain', 'United Kingdom', 'United States'];
  switch (filter) {
    case 'asia': list = ['China']; break;
    case 'america': list = ['Argentina', 'United States']; break;
    case 'europe': list = ['Italy', 'Spain', 'United Kingdom']; break;
    case 'spanish': list = ['Argentina', 'Spain']; break;
    case 'english': list = ['United Kingdom', 'United States']; break;
    case 'other': list = ['Italy', 'China']; break;
    default: list = ['Argentina', 'China', 'Italy', 'Spain', 'United Kingdom', 'United States']; break;
  }
  return (
    <div id="countries">
      {list.map((country) => (
        <div key={country} className="country-container">
          <CountryCard country={country} />
        </div>
      ))}
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Filter;
