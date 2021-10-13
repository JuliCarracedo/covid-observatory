import PropTypes from 'prop-types';

const CountryCard = (props) => {
  const { country } = props;
  return (
    <section className="countryCard">
      <h3>{ country }</h3>
      <p>x confirmed cases</p>
    </section>
  );
};

export default CountryCard;

CountryCard.propTypes = {
  country: PropTypes.string.isRequired,
};
