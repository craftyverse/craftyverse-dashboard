import { Link } from "react-router-dom";
import { Button, Checkbox, Input } from "../../Common";
import { AuthFormContainer } from "../Containers";
import "./SignInForm.scss";
import { useEffect, useState } from "react";
import { AuthFormUtils } from "../../utils/authFormUtils";
import { ApiCall } from "../../../utils/ApiCall";

export type UserSignInData = {
  userEmail: string;
  userPassword: string;
};

export const SignInForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [userSigninData, setUserSigninData] = useState<UserSignInData>({
    userEmail: "",
    userPassword: "",
  });

  const [userEmail, setUserEmail] = useState<string>("");
  const [userEmailErrorMsg, setUserEmailErrorMsg] = useState<
    string | undefined
  >("");

  const [userPassword, setUserPassword] = useState<string>("");
  const [userPasswordErrorMsg, setUserPasswordErrorMsg] = useState<
    string | undefined
  >("");

  const [isForgotPasswordChecked, setIsForgotPasswordChecked] =
    useState<boolean>(false);

  const [userFormErrorMsg, setUserFormErrorMsg] = useState<string>("");

  useEffect(() => {
    if (
      userSigninData.userEmail !== userEmail ||
      userSigninData.userPassword !== userPassword
    ) {
      setUserSigninData({
        userEmail,
        userPassword,
      });
    }
  }, [userEmail, userPassword, userSigninData]);

  const handleFormSubmit = async () => {
    setIsLoading(true);

    setUserFormErrorMsg(
      AuthFormUtils.validateUserSigninData(userSigninData).errorMsg ?? ""
    );

    await ApiCall.post(
      `${
        import.meta.env.VITE_AUTH_SERVICE_URL
      }/api/users/v1/authentication/loginuser`,
      userSigninData
    );

    setIsLoading(false);
  };

  return (
    <AuthFormContainer formTitle="Login to your account">
      <div className="SigninFormContent">
        <Input
          inputType="email"
          labelName="Your Email"
          placeholderName="Your Email"
          inputErrorMsg={userEmailErrorMsg}
          onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
            setUserEmail(event.target.value);
            setUserEmailErrorMsg(
              AuthFormUtils.validateUserEmail(event.target.value).errorMsg
            );
          }}
        />
        <Input
          inputType="password"
          labelName="Your Password"
          placeholderName="Your Password"
          inputErrorMsg={userPasswordErrorMsg}
          onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
            setUserPassword(event.target.value);
            setUserPasswordErrorMsg(
              AuthFormUtils.validateUserPassword(event.target.value).errorMsg
            );
          }}
        />
        <div className="forgotPasswordCheckbox">
          <Checkbox
            checked={isForgotPasswordChecked}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setIsForgotPasswordChecked(event.target.checked)
            }
            checkboxId="termsAndConditionsCheckbox"
          >
            <p>Remember me?</p>
          </Checkbox>
          <p>Forgot Password?</p>
        </div>
        <Button
          type="primary"
          size="large"
          buttonText="Log In"
          onClick={handleFormSubmit}
          errorMsg={userFormErrorMsg}
          isLoading={isLoading}
        />
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
