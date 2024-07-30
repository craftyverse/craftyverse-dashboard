import { useState, useEffect } from "react";
import { Button, Input, Checkbox } from "../../Common";
import "./SignupForm.scss";
import { SignupFormUtils } from "./SignupFormUtils";

export type UserSignupData = {
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userPassword: string;
  userConfirmPassword: string;
  userRoles: number[];
  isTermsAndConditionsAccepted: boolean | undefined;
};

export const SignupForm = () => {
  // user data to submit
  const [userSignupData, setUserSignupData] = useState<UserSignupData>({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userPassword: "",
    userConfirmPassword: "",
    userRoles: [],
    isTermsAndConditionsAccepted: undefined,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // useStates for First Name input
  const [userFirstName, setUserFirstName] = useState<string>("");
  const [userFirstNameErrorMsg, setUserFirstNameErrorMsg] = useState<
    string | undefined
  >("");

  // useStates for Last Name input
  const [userLastName, setUserLastName] = useState<string>("");
  const [userLastNameErrorMsg, setUserLastNameErrorMsg] = useState<
    string | undefined
  >("");

  // useStates for Email input
  const [userEmail, setUserEmail] = useState<string>("");
  const [userEmailErrorMsg, setUserEmailErrorMsg] = useState<
    string | undefined
  >("");

  // useStates for Password input
  const [userPassword, setUserPassword] = useState<string>("");
  const [userPasswordErrorMsg, setUserPasswordErrorMsg] = useState<
    string | undefined
  >("");

  // useStates for Confirm Password input
  const [userConfirmPassword, setUserConfirmPassword] = useState<string>("");
  const [userConfirmPasswordErrorMsg, setUserConfirmPasswordErrorMsg] =
    useState<string | undefined>("");

  const [userFormErrorMsg, setUserFormErrorMsg] = useState<string>("");

  const [isTermsAndConditionsChecked, setIsTermsAndConditionsChecked] =
    useState<boolean>(false);

  useEffect(() => {
    if (
      userSignupData.userFirstName !== userFirstName ||
      userSignupData.userLastName !== userLastName ||
      userSignupData.userEmail !== userEmail ||
      userSignupData.userPassword !== userPassword ||
      userSignupData.userConfirmPassword !== userConfirmPassword
    ) {
      setUserSignupData({
        userFirstName: userFirstName,
        userLastName: userLastName,
        userEmail: userEmail,
        userPassword: userPassword,
        userConfirmPassword: userConfirmPassword,
        userRoles: [],
        isTermsAndConditionsAccepted: isTermsAndConditionsChecked,
      });
    }
  }, [
    userFirstName,
    userLastName,
    userEmail,
    userPassword,
    userConfirmPassword,
    userSignupData,
  ]);

  // Handle form submission
  const handleFormSubmit = async () => {
    setIsLoading(true);
    setUserFormErrorMsg(
      SignupFormUtils.validateUserSignupData(userSignupData).errorMsg ?? ""
    );
    const response = await fetch(
      `${process.env.AUTH_SERVICE_URL}/api/users/v1/authentication/registeruser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userSignupData),
      }
    );

    await response.json();
    console.log("This is the user data: ", userSignupData);

    //TODO: save the data to a redux store (TBA)
    setIsLoading(false);
  };

  const handleTermsAndConditionsCheck = () => {
    setIsTermsAndConditionsChecked((prev) => !prev);
  };

  return (
    <section className="signupFormContainer">
      <div className="signupFormContent">
        <h1>Create your craftyverse account</h1>
        <div className="signupFormProfileNames">
          <Input
            inputType="text"
            labelName="First Name"
            placeholderName="Your first name"
            inputErrorMsg={userFirstNameErrorMsg}
            onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
              setUserFirstName(event.target.value);
              setUserFirstNameErrorMsg(
                SignupFormUtils.validateUserFirstName(event.target.value)
                  .errorMsg
              );
            }}
          />
          <Input
            inputType="text"
            labelName="Last Name"
            placeholderName="Your last name"
            inputErrorMsg={userLastNameErrorMsg}
            onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
              setUserLastName(event.target.value);
              setUserLastNameErrorMsg(
                SignupFormUtils.validateUserLastName(event.target.value)
                  .errorMsg
              );
            }}
          />
        </div>
        <div className="signupFormInfo">
          <Input
            inputType="email"
            labelName="Email"
            placeholderName="Your email"
            inputErrorMsg={userEmailErrorMsg}
            onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
              setUserEmail(event.target.value);
              setUserEmailErrorMsg(
                SignupFormUtils.validateUserEmail(event.target.value).errorMsg
              );
            }}
          />
          <Input
            inputType="password"
            labelName="Password"
            placeholderName="Your password"
            inputErrorMsg={userPasswordErrorMsg}
            onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
              setUserPassword(event.target.value);
              setUserPasswordErrorMsg(
                SignupFormUtils.validateUserPassword(event.target.value)
                  .errorMsg
              );
            }}
          />
          <Input
            inputType="password"
            labelName="Confirm Password"
            placeholderName="Confirm your password"
            inputErrorMsg={userConfirmPasswordErrorMsg}
            onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
              setUserConfirmPassword(event.target.value);
              setUserConfirmPasswordErrorMsg(
                SignupFormUtils.validateUserConfirmPassword(
                  event.target.value,
                  userPassword
                ).errorMsg
              );
            }}
          />
        </div>
        <div className="termsConditions">
          <Checkbox
            checked={isTermsAndConditionsChecked}
            onChange={handleTermsAndConditionsCheck}
            checkboxId="termsAndConditionsCheckbox"
          >
            <p>
              By proceeding, you agree to the{" "}
              <a href="#">Terms and Conditions</a>
            </p>
          </Checkbox>
        </div>
        <div className="signupFormBtn">
          <Button
            type="primary"
            size="large"
            buttonText="Sign up"
            onClick={handleFormSubmit}
            isLoading={isLoading}
            errorMsg={userFormErrorMsg}
          />
        </div>
      </div>
    </section>
  );
};
