import React, { FocusEventHandler, MouseEventHandler } from "react";
import { Spinner } from "../Spinner";

import "./Button.scss";

export interface ButtonProps {
  type: "primary" | "secondary";
  size: "large" | "medium" | "small";
  buttonText: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  errorMsg?: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  size,
  buttonText,
  onClick,
  onBlur,
  isLoading,
  errorMsg,
}) => {
  return (
    <div>
      <div
        className={`${type === "primary" && "buttonPrimary"} ${
          type === "secondary" && "buttonSecondary"
        }`}
      >
        <div
          className={`${size === "large" && "buttonLarge"} ${
            size === "medium" && "buttonMedium"
          } ${size === "small" && "buttonSmall"}`}
        >
          <button className="button" onClick={onClick} onBlur={onBlur}>
            <span>{isLoading ? <Spinner /> : buttonText}</span>
          </button>
        </div>
      </div>
      <span className="buttonErrorMsg">{errorMsg}</span>
    </div>
  );
};

export { Button };
