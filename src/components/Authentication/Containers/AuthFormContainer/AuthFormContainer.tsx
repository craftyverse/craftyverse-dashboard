import "./AuthFormContainer.scss";

export type AuthFormContainerProps = {
  formTitle: string;
  children: React.ReactNode;
};

export const AuthFormContainer: React.FC<AuthFormContainerProps> = ({
  formTitle,
  children,
}) => {
  return (
    <div className="authFormContainerWrapper">
      <h1>{formTitle}</h1>
      {children}
    </div>
  );
};
