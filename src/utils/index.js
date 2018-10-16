/**
 * Push/Update application filter settings to localStorage
 * @param state - State object containing filters configuration
 * @returns null
 */
export const updateLocalStorage = state => {
  localStorage.setItem("feedState", JSON.stringify(state));
};

/**
 * Fetch existing configuration setting for app filters from localStorage
 * @returns object - State object
 */
export const fetchFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("feedState"));
};

/**
 * Sort a list of objects based on the sort type selected.
 * Sorts by name as default option if no/incorrect sort filter specified.
 * @param arr - List of objects to sort
 * @param sortBy - Filter to sort the array: name, name_r (Reverse), date, date_r (Reverse)
 * @returns arr - Sorted list of objects
 */
export const customSort = (arr, sortBy) => {
  return arr.sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
      case "name_r":
        return a.name < b.name ? 1 : b.name < a.name ? -1 : 0;
      case "date":
        return Date.parse(a.date) > Date.parse(b.date)
          ? 1
          : Date.parse(b.date) > Date.parse(a.date)
            ? -1
            : 0;
      case "date_r":
        return Date.parse(a.date) < Date.parse(b.date)
          ? 1
          : Date.parse(b.date) < Date.parse(a.date)
            ? -1
            : 0;
      default:
        return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
    }
  });
};

/**
 * Executes a GET HTTP call to fetch the data from the URL specified.
 * In development mode, it imports the file directly.
 * @param url - API URL or file path if present locally.
 * @returns promise - Promise with data on successful execution, or error in case of request failure.
 */
export const getDataFromAPI = (url) =>
  new Promise((res, rej) => {
    /* Since CRA webpack-dev-server is configured by default to return index.html as fallback 
    for dot-notation paths - importing the Mock Data if running in Dev mode is an alternative. */
    if (process.env.NODE_ENV.toLowerCase() === 'development') {
      const CardsData = require('../static/mock_data.json');
      res(CardsData);
      return;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => res(data))
      .catch((err) => rej(err));
  });
