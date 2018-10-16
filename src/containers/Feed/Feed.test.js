import React from "react";
import { shallow } from 'enzyme';
import CardsData from '../../static/mock_data.json';
import Feed from "./Feed";

describe("In Feed Component", () => {
  let wrapper, historyPush;

  beforeEach(() => {
    historyPush = jest.fn();
    wrapper = shallow(
      <Feed
        match={{ params: { searchStr: undefined, sortBy: undefined }, isExact: true, path: "", url: "" }}
        history={{ push: historyPush }}
      />
    );
  });
  
  it("should exist", () => {
    expect(wrapper.exists(".feed-container")).toEqual(true);
  });

  it("should set search string in state to 'customer' on executing setSearchStr('customer')", () => {
    wrapper.instance().setSearchStr('customer');
    expect(historyPush.mock.calls[0]).toEqual(['/name/customer']);
  });

  it("should set sort method in state to 'name' on executing setSortConfig('name_r')", () => {
    wrapper.instance().setSortConfig('name_r');
    expect(historyPush.mock.calls[0]).toEqual(["/name_r/"]);
  });

  it("should return a list of filtered data based on search string and sort method selected", () => {
    wrapper.setState({ cardsData: CardsData });
    expect(wrapper.instance().getFilteredCards('customer', 'name_r')[0]).toMatchObject({
      name: 'Customer Web Specialist'
    });
  })
});