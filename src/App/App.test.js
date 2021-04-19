import React from "react";
import { render, screen } from '@testing-library/react';
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import App from './App';

it("renders correctly", () => {
  const wrapper = mount(<App />);
  expect(wrapper.state("error")).toEqual(null);
});

it("renders without crashing", () => {
  shallow(<App />);
});
