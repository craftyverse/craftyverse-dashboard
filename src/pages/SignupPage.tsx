import { SignupForm } from "../components/Authentication";
import { AuthContainer } from "../components/Authentication/Containers";

export const SignupPage = () => {
  return (
    <AuthContainer>
      <SignupForm />
    </AuthContainer>
  );
};
