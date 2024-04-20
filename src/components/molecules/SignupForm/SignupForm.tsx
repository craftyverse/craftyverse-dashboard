import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import styles from './SignupForm.module.scss';

const SignupForm = () => {
  return (
    <div className={styles.signupFormContainer}>
      <div className={styles.signupFormContent}>
        <h1>Create your craftyverse account</h1>
        <div className={styles.signupFormProfileNames}>
          <Input
            inputType="text"
            labelName="First Name"
            placeholderName="Enter your first name"
            inputErrorMsg="First name is required"
          />
          <Input
            inputType="text"
            labelName="Last Name"
            placeholderName="Enter your last name"
          />
        </div>
        <div className={styles.signupFormInfo}>
          <Input
            inputType="email"
            labelName="Email"
            placeholderName="Enter your email"
          />
          <Input
            inputType="password"
            labelName="Password"
            placeholderName="Enter your password"
          />
          <Input
            inputType="password"
            labelName="Confirm Password"
            placeholderName="Confirm your password"
          />
        </div>

        <Button type="primary" size="large" buttonText="Sign up" />
      </div>
    </div>
  );
};

export { SignupForm };
