import * as React from "react";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";
import useToggle from "../../../hooks/Toggle"; // Update the import path
const SignInSide = () => {
  const { toggle, toggler } = useToggle(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="login-container">
      {toggle ? (
        <SignInForm onSubmit={handleSubmit} onToggleForm={toggler} />
      ) : (
        <SignUpForm onSubmit={handleSubmit} onToggleForm={toggler} />
      )}
    </div>
  );
};

export default SignInSide;
