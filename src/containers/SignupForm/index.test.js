import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SignupForm from "../SignupForm";

Enzyme.configure({ adapter: new Adapter() });

describe("<SignupForm>", () => {
  test("Should render", () => {
    const SignupFormComponent = mount(<SignupForm />);
    expect(SignupFormComponent.find(".SignupForm").length).toBe(1);
  });

  test("account abc12345/xxabc123wer Same string", () => {
    const SignupFormComponent = mount(<SignupForm />);
    SignupFormComponent.find(".Card")
      .at(0)
      .simulate("click");
    SignupFormComponent.find("input[name='email']").simulate("change", {
      target: { name: "email", value: "abc12345" }
    });
    SignupFormComponent.find("input[name='password']").simulate("change", {
      target: { name: "password", value: "xxabc123wer" }
    });
    SignupFormComponent.find(".SignupForm-footer")
      .find("button")
      .simulate("click");
    expect(SignupFormComponent.find(".test-password").text()).toBe(
      "Same string"
    );
  });

  test("account abc12345/c12345er12fda Same string", () => {
    const SignupFormComponent = mount(<SignupForm />);
    SignupFormComponent.find(".Card")
      .at(0)
      .simulate("click");
    SignupFormComponent.find("input[name='email']").simulate("change", {
      target: { name: "email", value: "abc12345" }
    });
    SignupFormComponent.find("input[name='password']").simulate("change", {
      target: { name: "password", value: "c12345er12fda" }
    });
    SignupFormComponent.find(".SignupForm-footer")
      .find("button")
      .simulate("click");
    expect(SignupFormComponent.find(".test-password").text()).toBe(
      "Same string"
    );
  });

  test("account abc12345/c124345ksfh pass", () => {
    const SignupFormComponent = mount(<SignupForm />);
    SignupFormComponent.find(".Card")
      .at(0)
      .simulate("click");
    SignupFormComponent.find("input[name='email']").simulate("change", {
      target: { name: "email", value: "abc12345" }
    });
    SignupFormComponent.find("input[name='password']").simulate("change", {
      target: { name: "password", value: "c124345ksfh" }
    });
    SignupFormComponent.find(".SignupForm-footer")
      .find("button")
      .simulate("click");
    expect(SignupFormComponent.find(".test-password").text()).toBe("");
  });
});
