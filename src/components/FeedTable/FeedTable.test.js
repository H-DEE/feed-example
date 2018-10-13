import React from "react";
import { shallow } from "enzyme";

import MockData from '../../static/mock_data.json';
import FeedTable from "./";

describe("In FeedTable Component", () => {
  const wrapper = shallow(<FeedTable data={MockData} />);

  it("should exist", () => {
    expect(wrapper.exists(".feed-table")).toEqual(true);
  });

  it("should set the cell values in the table as per the mock data passed as props", () => {
    expect(wrapper.find(".feed-table td.card-name").first().text()).toBe(MockData[0].name);
  });
});
