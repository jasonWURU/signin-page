import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "../Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button>", () => {
  test("Should render", () => {
    const mockFunc = jest.fn();
    const ButtonComponent = shallow(
      <Button text="testTest" handleClick={mockFunc} />
    );
    expect(ButtonComponent.find(".Button").length).toBe(1);
  });

  test("Should text render", () => {
    const mockFunc = jest.fn();
    const ButtonComponent = shallow(
      <Button text="testTest" handleClick={mockFunc} />
    );
    expect(
      ButtonComponent.contains(
        <button className="Button" onClick={mockFunc}>
          testTest
        </button>
      )
    ).toBe(true);
  });

  test("Should click", () => {
    const mockFunc = jest.fn();
    const ButtonComponent = shallow(
      <Button text="testTest" handleClick={mockFunc} />
    );
    ButtonComponent.find(".Button").simulate("click");
    expect(mockFunc).toHaveBeenCalled();
  });
});
