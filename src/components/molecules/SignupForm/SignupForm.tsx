import { useState, useEffect } from 'react';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import styles from './SignupForm.module.scss';
import { SignupFormUtils } from './SignupFormUtils';

type UserSignupData = {
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userPassword: string;
  userConfirmPassword: string;
  userRoles: string[];
};

export const SignupForm = () => {
  // user data to submit
  const [userSignupData, setUserSignupData] = useState<UserSignupData>({
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    userPassword: '',
    userConfirmPassword: '',
    userRoles: [],
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // useStates for First Name input
  const [userFirstName, setUserFirstName] = useState<string>('');
  const [userFirstNameErrorMsg, setUserFirstNameErrorMsg] = useState<
    string | undefined
  >('');

  // useStates for Last Name input
  const [userLastName, setUserLastName] = useState<string>('');
  const [userLastNameErrorMsg, setUserLastNameErrorMsg] = useState<
    string | undefined
  >('');

  // useStates for Email input
  const [userEmail, setUserEmail] = useState<string>('');
  const [userEmailErrorMsg, setUserEmailErrorMsg] = useState<
    string | undefined
  >('');

  // useStates for Password input
  const [userPassword, setUserPassword] = useState<string>('');
  const [userPasswordErrorMsg, setUserPasswordErrorMsg] = useState<
    string | undefined
  >('');

  // useStates for Confirm Password input
  const [userConfirmPassword, setUserConfirmPassword] = useState<string>('');
  const [userConfirmPasswordErrorMsg, setUserConfirmPasswordErrorMsg] =
    useState<string | undefined>('');

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
        userRoles: [process.env.USER_ROLE_ID!],
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
    const response = await fetch(
      `${process.env.AUTH_SERVICE_URL}/api/users/v1/authentication/registerUser`,
      {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(userSignupData),
      }
    );

    await response.json();

    //TODO: save the data to a redux store (TBA)
    setIsLoading(false);
  };

  return (
    <section className={styles.signupFormContainer}>
      <div className={styles.signupFormContent}>
        <h1>Create your craftyverse account</h1>
        <div className={styles.signupFormProfileNames}>
          <Input
            inputType="text"
            labelName="First Name"
            placeholderName="Your first name"
            inputErrorMsg={userFirstNameErrorMsg}
            onBlur={(event) => {
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
            onBlur={(event) => {
              setUserLastName(event.target.value);
              setUserLastNameErrorMsg(
                SignupFormUtils.validateUserLastName(event.target.value)
                  .errorMsg
              );
            }}
          />
        </div>
        <div className={styles.signupFormInfo}>
          <Input
            inputType="email"
            labelName="Email"
            placeholderName="Your email"
            inputErrorMsg={userEmailErrorMsg}
            onBlur={(event) => {
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
            onBlur={(event) => {
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
            onBlur={(event) => {
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
        <div className={styles.signupFormBtn}>
          <Button
            type="primary"
            size="large"
            buttonText="Sign up"
            onClick={handleFormSubmit}
            isLoading={isLoading}
          />
        </div>
      </div>
    </section>
  );
};
