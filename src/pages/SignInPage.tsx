import { AuthContainer } from "../components/Authentication/Containers";
import { SignInForm } from "../components/Authentication/SignInForm";

export const SigninPage = () => {
  return (
    <AuthContainer>
      <SignInForm />
    </AuthContainer>
  );
};
