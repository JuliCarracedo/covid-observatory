import { loadingData } from './countries';

const loadAsync = () => async (dispatch) => {
  const today = new Date();
  let month = today.getMonth() + 1.0;
  let day = today.getDate();

  if (month < 10) { month = `0${month}`; } else { month = month.toString(); }
  if (day < 10) { day = `0${day}`; } else { day = day.toString(); }

  const date = `${today.getFullYear()}/${(today.getMonth + 1)}/${today.getDate}`;
  console.log(date);
  dispatch(loadingData);
  const globalFetch = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/i`);
  console.log(globalFetch);
};

export default loadAsync;
