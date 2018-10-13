import {
  updateLocalStorage,
  fetchFromLocalStorage,
  customSort,
} from './';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }
}

global.localStorage = new LocalStorageMock();

describe('LocalStorage', () => {
  const stateObj = { search: "ABC", sort: "title" };

  it('should update localStorage with state passed as arguments', () => {
    updateLocalStorage(stateObj);
    expect(JSON.parse(localStorage.getItem("feedState"))).toEqual(stateObj);
  });

  it("should fetch state from localStorage", () => {
    localStorage.setItem('feedState', JSON.stringify(stateObj));
    expect(fetchFromLocalStorage()).toEqual(stateObj);
  });
});

describe("Custom Sort", () => {
  const objectsList = [
    { name: 'ABC', date: '2018-05-19T12:33:25.545Z' },
    { name: 'GHI', date: '2017-05-19T12:33:25.545Z' },
    { name: 'DEF', date: '2016-05-19T12:33:25.545Z' },
    { name: 'XYZ', date: '2018-03-19T12:33:25.545Z' },
  ];

  it("should sort list of objects by name", () => {
    const expectedList = [
      { name: 'ABC', date: '2018-05-19T12:33:25.545Z' },
      { name: 'DEF', date: '2016-05-19T12:33:25.545Z' },
      { name: 'GHI', date: '2017-05-19T12:33:25.545Z' },
      { name: 'XYZ', date: '2018-03-19T12:33:25.545Z' },
    ];
    expect(customSort(objectsList, 'name')).toEqual(expectedList);
  });

  it("should sort list of objects by name as default if no sort filter specified", () => {
    const expectedList = [
      { name: 'ABC', date: '2018-05-19T12:33:25.545Z' },
      { name: 'DEF', date: '2016-05-19T12:33:25.545Z' },
      { name: 'GHI', date: '2017-05-19T12:33:25.545Z' },
      { name: 'XYZ', date: '2018-03-19T12:33:25.545Z' },
    ];
    expect(customSort(objectsList)).toEqual(expectedList);
  });

  it("should sort list of objects by name in reverse order", () => {
    const expectedList = [
      { name: 'XYZ', date: '2018-03-19T12:33:25.545Z' },
      { name: 'GHI', date: '2017-05-19T12:33:25.545Z' },
      { name: 'DEF', date: '2016-05-19T12:33:25.545Z' },
      { name: 'ABC', date: '2018-05-19T12:33:25.545Z' },
    ];
    expect(customSort(objectsList, 'name_r')).toEqual(expectedList);
  });

  it("should sort list of objects by date", () => {
    const expectedList = [
      { name: 'DEF', date: '2016-05-19T12:33:25.545Z' },
      { name: 'GHI', date: '2017-05-19T12:33:25.545Z' },
      { name: 'XYZ', date: '2018-03-19T12:33:25.545Z' },
      { name: 'ABC', date: '2018-05-19T12:33:25.545Z' },
    ];
    expect(customSort(objectsList, 'date')).toEqual(expectedList);
  });

  it("should sort list of objects by date in reverse order", () => {
    const expectedList = [
      { name: 'ABC', date: '2018-05-19T12:33:25.545Z' },
      { name: 'XYZ', date: '2018-03-19T12:33:25.545Z' },
      { name: 'GHI', date: '2017-05-19T12:33:25.545Z' },
      { name: 'DEF', date: '2016-05-19T12:33:25.545Z' },
    ];
    expect(customSort(objectsList, 'date_r')).toEqual(expectedList);
  });
});