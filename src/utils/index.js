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
 * Sorts by name as default option if no/incorrect sort filter0000000000 specified.
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
