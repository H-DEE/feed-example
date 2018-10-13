import React from "react";
import { shallow } from 'enzyme';
import Feed from "./Feed";

describe("In Sort Component", () => {
  const wrapper = shallow(<Feed />);
  
  it("should exist", () => {
    expect(wrapper.exists(".feed-container")).toEqual(true);
  });

  it("should set search string in state to 'customer' on executing setSearchStr('customer')", () => {
    wrapper.instance().setSearchStr('customer');
    expect(wrapper.instance().state.searchStr).toBe('customer');
  });

  it("should set sort method in state to 'name' on executing setSortConfig('name_r')", () => {
    wrapper.instance().setSortConfig('name_r');
    expect(wrapper.instance().state.sort).toBe("name_r");
  });

  it("should return a list of filtered data based on search string and sort method selected", () => {
    expect(wrapper.instance().getFilteredCards()[0]).toMatchObject({
      name: 'Customer Web Specialist'
    });
  })
});