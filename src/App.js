import React from "react";
import "./styles.scss";
import SignupForm from "./containers/SignupForm";

export default function App() {
  return (
    <div className="App">
      <h1 className="App-title">Choose Account Type</h1>
      <SignupForm />
    </div>
  );
}
