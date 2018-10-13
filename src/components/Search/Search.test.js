import React from "react";
import { shallow } from "enzyme";

import Search from "./";

describe("In Search Component", () => {
  const handleOnChange = jest.fn();
  const wrapper = shallow(
    <Search
      searchStr="abc"
      setSearchStr={handleOnChange}
    />
  );

  it("should exist", () => {
    expect(wrapper.exists(".search-wrapper")).toEqual(true);
  });

  it("should set the search box value to the one passed as argument - abc", () => {
    expect(wrapper.find("input.search-bar").props().value).toBe("abc");
  });

  it("should call setSearchStr method passing in new value on change", () => {
    wrapper.find("input.search-bar").simulate("change", { target: { value: "abcd" } });
    expect(handleOnChange).toHaveBeenCalledWith("abcd");
  });
});
