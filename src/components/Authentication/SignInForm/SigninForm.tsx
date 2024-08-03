import { Link } from "react-router-dom";
import { Button, Input } from "../../Common";
import { AuthFormContainer } from "../Containers";
import "./SignInForm.scss";

export type UserSignInData = {
  userEmail: string;
  userPassword: string;
};

export const SignInForm = () => {
  return (
    <AuthFormContainer formTitle="Login to your account">
      <div className="SigninFormContent">
        <Input
          inputType="email"
          labelName="Your Email"
          placeholderName="Your Email"
        />
        <Input
          inputType="password"
          labelName="Your Password"
          placeholderName="Your Password"
        />
        <Button type="primary" size="large" buttonText="Log In" />
        <p className="loginCta">
          Don't have and account?{" "}
          <Link className="registerLink" to="/register">
            Get Started
          </Link>
        </p>
      </div>
    </AuthFormContainer>
  );
};
