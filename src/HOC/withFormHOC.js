import React, { Component } from "react";

const withFormHOC = WrappedComponent =>
  class extends Component {
    checkError = (rule, data) => {
      let error = "";
      const { isRequired, regex, massage } = rule;
      if (isRequired && !data) {
        error = "Is Required!!";
      } else if (regex && data.test(regex)) {
        error = massage;
      }
      return error;
    };

    validation = (ruleConfig, datas) =>
      Object.keys(datas).map(key => {
        return { name: key, msg: this.checkError(ruleConfig[key], datas[key]) };
      });

    render() {
      return (
        <form>
          <WrappedComponent
            {...this.props}
            checkError={this.checkError}
            validation={this.validation}
          />
        </form>
      );
    }
  };

export default withFormHOC;
