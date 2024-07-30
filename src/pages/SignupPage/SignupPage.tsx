import "./SignupPage.scss";

import { SignupForm } from "../../components/Authentication";

const SignupPage = () => {
  return (
    <div className="signupPageContainer">
      <div className="signupPageFormContainer">
        <SignupForm />
      </div>
      <div className="signupGraphicContainer">
        <h1>Craftyverse</h1>
      </div>
    </div>
  );
};

export { SignupPage };
