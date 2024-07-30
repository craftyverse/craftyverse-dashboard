import React from "react";
import "./Spinner.scss";

export interface SpinnerProps {
  color?: "white";
}

export const Spinner: React.FC<SpinnerProps> = ({ color = "white" }) => {
  return (
    <div
      data-testid="loading-spinner"
      className={`loaderSpinner ${[`${color}`]}`}
    ></div>
  );
};
