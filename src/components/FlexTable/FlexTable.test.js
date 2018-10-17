import React from "react";
import { shallow } from "enzyme";

import MockData from '../../static/mock_data.json';
import FlexTable from ".";

describe("In FlexTable Component", () => {
  const wrapper = shallow(<FlexTable data={MockData} />);

  it("should exist", () => {
    expect(wrapper.exists(".flex-table-wrapper")).toEqual(true);
  });

  it("should set the cell values in the table as per the mock data passed as props", () => {
    expect(wrapper.find(".flex-table-wrapper .td-cell").first().text()).toBe(MockData[0].name);
  });
});
