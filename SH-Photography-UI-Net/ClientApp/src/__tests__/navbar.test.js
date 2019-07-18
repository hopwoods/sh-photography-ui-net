/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { create } from "react-test-renderer";
import { NavBar } from "./../_components/NavBar";

describe("NavBar component", () => {
  test("it matches the snapshot", () => {
    const component = create(<NavBar />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
