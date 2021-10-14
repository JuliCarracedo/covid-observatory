/* eslint-disable no-unused-expressions */
import { useSelector } from 'react-redux';

const Details = () => {
  const { loading, filter } = useSelector((state) => state.countriesReducer);
  let regions = [];
  let total = 0;
  if (!loading) {
    if (useSelector((state) => state.countriesReducer).ukCount) {
      switch (filter) {
        case 'Argentina': regions = useSelector((state) => state.countriesReducer).argCount.regions;
          total = useSelector((state) => state.countriesReducer).argCount.total;
          break;
        case 'Spain': regions = useSelector((state) => state.countriesReducer).spainCount.regions;
          total = useSelector((state) => state.countriesReducer).spainCount.total;
          break;
        case 'China': regions = useSelector((state) => state.countriesReducer).chinaCount.regions;
          total = useSelector((state) => state.countriesReducer).chinaCount.total;
          break;
        case 'Italy': regions = useSelector((state) => state.countriesReducer).italyCount.regions;
          total = useSelector((state) => state.countriesReducer).italyCount.total;
          break;
        case 'United States': regions = useSelector((state) => state.countriesReducer).usaCount.regions;
          total = useSelector((state) => state.countriesReducer).usaCount.total;
          break;
        case 'United Kingdom': regions = useSelector((state) => state.countriesReducer).ukCount.regions;
          total = useSelector((state) => state.countriesReducer).ukCount.total;
          break;
        default: 'Unknown'; break;
      }
    }
  }
  return (
    <div id="details">
      <div className="home-header">
        <h2>
          {filter}
        </h2>
        <p>{total}</p>
      </div>
      <p className="subtitle">Covid-19 cases by region</p>
      {regions.map((region) => (
        <div className="region-card" key={region.name}>
          <h3>{region.name}</h3>
          <div className="count-container">
            <p className="align-right">{region.count}</p>
            <svg className="card-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 17v-4h-8v-2h8v-4l6 5-6 5z" /></svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
