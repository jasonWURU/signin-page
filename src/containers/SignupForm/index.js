import React, { PureComponent } from "react";
import "./styles.scss";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import withFormHOC from "../../HOC/withFormHOC";

import { ReactComponent as DoctorIcon } from "../../../img/doctor@3x.svg";
import { ReactComponent as PatientIcon } from "../../../img/patient@3x.svg";

// 種類
const typeOptions = [
  {
    id: "Doctor",
    name: "Doctor",
    icon: <DoctorIcon />
  },
  {
    id: "Patien",
    name: "Patien",
    icon: <PatientIcon />
  }
];
// 驗證規則
const SignupFormRules = {
  password: {
    type: "password",
    massage: "password check error",
    isRequired: true,
    regex: ""
  },
  email: {
    type: "text",
    massage: "email check error",
    isRequired: true,
    regex: ""
  },
  type: {
    type: "text",
    massage: "type check error",
    isRequired: true,
    regex: ""
  }
};

class SignupForm extends PureComponent {
  state = {
    type: "",
    typeErrorMsg: "",
    email: "",
    emailErrorMsg: "",
    password: "",
    passwordErrorMsg: ""
  };

  checkSameString = (mainString, subString) => {
    let result = false;
    for (let i = 0; i + 6 <= subString.length; i++) {
      if (mainString.indexOf(subString.slice(i, i + 6)) !== -1) result = true;
    }
    return result;
  };

  // 選擇 Type
  handleTypeClick = id => {
    const type = id;
    this.setState({ type, typeErrorMsg: "" });
  };

  handleInputChange = ({ target: { name, value } }) => {
    //  驗證資料規則
    const errorMsg = this.props.checkError(SignupFormRules[name], value);
    this.setState({ [name]: value, [`${name}ErrorMsg`]: errorMsg });
  };

  handleLogin = e => {
    e.preventDefault();
    const { email, password, type } = this.state,
      data = { type, email, password },
      validationResult = this.props.validation(SignupFormRules, data),
      checkSameStringResult = this.checkSameString(email, password);

    if (validationResult.some(item => !!item.msg)) {
      // 驗證所有資料規則
      let errors = {};
      validationResult.forEach(item => {
        const { name, msg } = item;
        errors = { ...errors, [`${name}ErrorMsg`]: msg };
      });
      this.setState(errors);
    } else if (checkSameStringResult) {
      // 檢查兩字串 是否任意連續 6 碼
      this.setState({ passwordErrorMsg: "Same string" });
    } else {
      console.log("登入中");
    }
  };

  render() {
    const {
        type,
        email,
        password,
        typeErrorMsg,
        emailErrorMsg,
        passwordErrorMsg
      } = this.state,
      checkedType = typeOptions.find(option => option.id === type);
    return (
      <div className="SignupForm">
        <div className="SignupForm-type">
          {/* 所有種類 */}
          {typeOptions.length
            ? typeOptions.map((option, key) => (
                <Card
                  key={`${key}${option.name}`}
                  icon={option.icon}
                  text={option.name}
                  isChecked={option.id === type}
                  handleClick={() => this.handleTypeClick(option.id)}
                />
              ))
            : "NO TYPES"}
        </div>
        <p className="SignupForm-text-error">{typeErrorMsg && "請選擇"}</p>
        {/* 描述 */}
        <p className="SignupForm-text">
          Hello {checkedType && checkedType.name}! <br />
          Please fill out the form below to get started
        </p>
        <Input
          handleChange={this.handleInputChange}
          name="email"
          placeholder="email"
          value={email}
          type="text"
          icon="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/mail-512.png"
          error={!!emailErrorMsg}
        />
        <p className="SignupForm-text-error">{emailErrorMsg}</p>
        <Input
          handleChange={this.handleInputChange}
          name="password"
          placeholder="password"
          value={password}
          type="password"
          icon="https://cdn1.iconfinder.com/data/icons/hawcons/32/698634-icon-118-lock-rounded-512.png"
          text="Forgot?"
          error={!!passwordErrorMsg}
        />
        <p className="SignupForm-text-error test-password">
          {passwordErrorMsg}
        </p>
        {/* 操作 */}
        <div className="SignupForm-footer">
          <div>
            No account?{" "}
            <a href="/" target="_blank">
              Signup
            </a>
          </div>
          <Button text="Login" handleClick={this.handleLogin} />
        </div>
      </div>
    );
  }
}

export default withFormHOC(SignupForm);
