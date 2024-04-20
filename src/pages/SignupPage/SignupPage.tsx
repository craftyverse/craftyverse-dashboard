import styles from './SignupPage.module.scss';

import { SignupForm } from '../../components/molecules/SignupForm';

const SignupPage = () => {
  return (
    <div className={styles.signupPageContainer}>
      <div className={styles.signupPageFormContainer}>
        <SignupForm />
      </div>
      <div className={styles.signupGraphicContainer}>
        <h1>Craftyverse</h1>
      </div>
    </div>
  );
};

export { SignupPage };
