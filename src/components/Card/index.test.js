import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "../Card";
import { ReactComponent as DoctorIcon } from "../../../img/doctor@3x.svg";

Enzyme.configure({ adapter: new Adapter() });

describe("<Card>", () => {
  test("Should render", () => {
    const mockFunc = jest.fn();
    const CardComponent = shallow(
      <Card
        text="testTest"
        icon={<DoctorIcon />}
        isChecked={false}
        handleClick={mockFunc}
      />
    );
    expect(CardComponent.find(".Card").length).toBe(1);
  });

  test("Should text render", () => {
    const mockFunc = jest.fn();
    const CardComponent = shallow(
      <Card
        text="testTest"
        icon={<DoctorIcon />}
        isChecked={false}
        handleClick={mockFunc}
      />
    );
    expect(CardComponent.contains(<p className="Card-text">testTest</p>)).toBe(
      true
    );
  });

  test("Should click", () => {
    const mockFunc = jest.fn();
    const CardComponent = shallow(
      <Card
        text="testTest"
        icon={<DoctorIcon />}
        isChecked={false}
        handleClick={mockFunc}
      />
    );
    CardComponent.find(".Card").simulate("click");
    expect(mockFunc).toHaveBeenCalled();
  });

  test("Should clicked className render", () => {
    const mockFunc = jest.fn();
    const CardComponent = shallow(
      <Card
        text="testTest"
        icon={<DoctorIcon />}
        isChecked={true}
        handleClick={mockFunc}
      />
    );
    expect(CardComponent.find(".Card-checked").length).toBe(1);
  });

  test("Should icon render", () => {
    const mockFunc = jest.fn();
    const CardComponent = shallow(
      <Card
        text="testTest"
        icon={<DoctorIcon />}
        isChecked={false}
        handleClick={mockFunc}
      />
    );
    expect(CardComponent.contains(<DoctorIcon />)).toBe(true);
  });
});
