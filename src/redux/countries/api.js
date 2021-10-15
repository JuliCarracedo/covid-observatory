import {
  getArg, getGlobal, getUk, getUsa, loadedData, loadingData, getSpain, getChina, getItaly,
} from './countries';

export const filterData = (raw, date = '2020-09-01') => {
  const country = Object.keys(raw.dates[date].countries)[0];
  const curedData = {
    total: raw.dates[date].countries[country].today_confirmed,
    regions: (raw.dates[date].countries[country].regions)
      .map((region) => ({ name: region.name, count: region.today_confirmed })),
  };

  return curedData;
};

const loadAsync = () => async (dispatch) => {
  const date = '2020-09-01';

  dispatch(loadingData());

  await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/i`)
    .then((response) => response.json())
    .then((json) => dispatch(getGlobal(json.total.today_confirmed)));
  /* fetch Argentina */
  const argRaw = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/argentina`)
    .then((response) => response.json());
  const argData = filterData(argRaw);
  dispatch(getArg(argData));

  /* fetch United States */
  const usRaw = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/us`)
    .then((response) => response.json());
  const usData = filterData(usRaw);
  dispatch(getUsa(usData));

  /* fetch United Kingdom */
  const ukRaw = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/united_kingdom`)
    .then((response) => response.json());
  const ukData = filterData(ukRaw);
  dispatch(getUk(ukData));

  /* fetch Spain */
  const spainRaw = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/spain`)
    .then((response) => response.json());
  const spainData = filterData(spainRaw);
  dispatch(getSpain(spainData));

  /* fetch China */
  const chinaRaw = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/china`)
    .then((response) => response.json());
  const chinaData = filterData(chinaRaw);
  dispatch(getChina(chinaData));

  /* fetch italy */
  const italyRaw = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/italy`)
    .then((response) => response.json());
  const italyData = filterData(italyRaw);
  dispatch(getItaly(italyData));

  /* finish downloads */
  dispatch(loadedData());
};

export default loadAsync;
