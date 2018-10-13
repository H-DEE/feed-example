import React from "react";
import { shallow } from 'enzyme';
import { SORT_OPTIONS } from '../../constants';

import Sort from "./";

describe('In Sort Component', () => {
  const handleOnChange = jest.fn();
  const wrapper = shallow(
    <Sort
      sort="name"
      sortOptions={SORT_OPTIONS}
      setSortConfig={handleOnChange}
    />
  );

  it('should exist', () => {
    expect(wrapper.exists('.sort-wrapper')).toEqual(true);
  });

  it('should set the selected value to the one passed as argument - name', () => {
    expect(wrapper.find('select').props().value).toBe("name");
  });

  it("should change the value on clicking select and choosing a different option", () => {
    wrapper.find("select").simulate("change", { target: { value: "date" } });
    expect(handleOnChange).toHaveBeenCalledWith('date');
  });
})
