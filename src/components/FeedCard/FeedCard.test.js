import React from "react";
import { shallow } from "enzyme";

import MockData from "../../static/mock_data.json";
import FeedCard from "./";

describe("In FeedCard Component", () => {
  const wrapper = shallow(<FeedCard cardDetails={MockData[0]} />);

  it("should exist", () => {
    expect(wrapper.exists(".card-wrapper")).toEqual(true);
  });

  it("should set the values in the card as per the mock data passed as props", () => {
    expect(wrapper.find(".card-wrapper .card h3").text()).toBe(MockData[0].name);
    expect(wrapper.find(".card-wrapper .card img").props().src).toBe(MockData[0].image);
    expect(wrapper.find(".card-wrapper .card p").text()).toBe(MockData[0].description);
    expect(wrapper.find(".card-wrapper .card small").text()).toBe(new Date(MockData[0].date).toLocaleString());
  });
});
