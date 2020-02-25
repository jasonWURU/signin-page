import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Input from "../Input";

Enzyme.configure({ adapter: new Adapter() });

describe("<Input>", () => {
  test("Should render", () => {
    const mockFunc = jest.fn();
    const ButtonComponent = shallow(
      <Input handleChange={mockFunc} value="test-value" />
    );
    expect(ButtonComponent.find(".Input").length).toBe(1);
  });

  test("Should value render", () => {
    const mockFunc = jest.fn();
    const ButtonComponent = shallow(
      <Input handleChange={mockFunc} value="test-value" />
    );
    ButtonComponent.find("input").simulate("change");
    expect(ButtonComponent.find("input").prop("value")).toEqual("test-value");
  });

  test("Should change", () => {
    const mockFunc = jest.fn();
    const ButtonComponent = shallow(
      <Input handleChange={mockFunc} value="test-value" />
    );
    ButtonComponent.find("input").simulate("change");
    expect(mockFunc).toHaveBeenCalled();
  });
});
