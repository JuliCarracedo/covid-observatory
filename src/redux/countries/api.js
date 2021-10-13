import {
  getArg, getGlobal, getUk, getUsa, loadedData, loadingData, getSpain, getChina, getItaly,
} from './countries';

const loadAsync = () => async (dispatch) => {
  const date = '2020-09-01';

  dispatch(loadingData());

  await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/i`)
    .then((response) => response.json())
    .then((json) => dispatch(getGlobal(json.total.today_confirmed)));
  /* fetch Argentina */
  const argRaw = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/argentina`)
    .then((response) => response.json());
  const argData = {
    total: argRaw.dates[date].countries.Argentina.today_confirmed,
    regions: (argRaw.dates[date].countries.Argentina.regions)
      .map((region) => ({ name: region.name, count: region.today_confirmed })),
  };
  dispatch(getArg(argData));

  /* fetch United States */
  const usRaw = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/us`)
    .then((response) => response.json());
  const usData = {
    total: usRaw.dates[date].countries.US.today_confirmed,
    regions: (usRaw.dates[date].countries.US.regions)
      .map((region) => ({ name: region.name, count: region.today_confirmed })),
  };
  dispatch(getUsa(usData));

  /* fetch United Kingdom */
  const ukRaw = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/united_kingdom`)
    .then((response) => response.json());
  const ukData = {
    total: ukRaw.dates[date].countries['United Kingdom'].today_confirmed,
    regions: (ukRaw.dates[date].countries['United Kingdom'].regions)
      .map((region) => ({ name: region.name, count: region.today_confirmed })),
  };
  dispatch(getUk(ukData));

  /* fetch Spain */
  const spainRaw = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/spain`)
    .then((response) => response.json());
  const spainData = {
    total: spainRaw.dates[date].countries.Spain.today_confirmed,
    regions: (spainRaw.dates[date].countries.Spain.regions)
      .map((region) => ({ name: region.name, count: region.today_confirmed })),
  };
  dispatch(getSpain(spainData));

  /* fetch China */
  const chinaRaw = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/china`)
    .then((response) => response.json());
  const chinaData = {
    total: chinaRaw.dates[date].countries.China.today_confirmed,
    regions: (chinaRaw.dates[date].countries.China.regions)
      .map((region) => ({ name: region.name, count: region.today_confirmed })),
  };
  dispatch(getChina(chinaData));

  /* fetch italy */
  const italyRaw = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/italy`)
    .then((response) => response.json());
  const italyData = {
    total: italyRaw.dates[date].countries.Italy.today_confirmed,
    regions: (italyRaw.dates[date].countries.Italy.regions)
      .map((region) => ({ name: region.name, count: region.today_confirmed })),
  };
  console.log(italyData);
  dispatch(getItaly(italyData));

  /* finish downloads */
  dispatch(loadedData());
};

export default loadAsync;
