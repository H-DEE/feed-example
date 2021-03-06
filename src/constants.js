/* App Constants */

export const CARDS_PER_PAGE = 5;
export const DEFAULT_SEARCH_STR = '';
export const SORT_OPTIONS = [
  { title: "Title", value: "name" },
  { title: "Title Reverse", value: "name_r" },
  { title: "Date", value: "date" },
  { title: "Date Reverse", value: "date_r" }
];
export const DEFAULT_SORT = 'name';


/* API URLs */
export const MOCK_DATA_URL = "../../static/mock_data.json"; // Change to API URL when deploying to Prod
