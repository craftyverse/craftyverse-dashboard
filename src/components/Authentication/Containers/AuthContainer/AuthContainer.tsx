import "./AuthContainer.scss";

export type AuthContainerProps = {
  children: React.ReactNode;
};

export const AuthContainer: React.FC<AuthContainerProps> = ({ children }) => {
  return (
    <div className="authContainerWrapper">
      <div className="authContainerContents">{children}</div>
      <div className="authContainerLogo">
        <h1>Craftyverse</h1>
      </div>
    </div>
  );
};
