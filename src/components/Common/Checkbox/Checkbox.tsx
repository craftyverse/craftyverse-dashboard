import React, { ChangeEventHandler } from "react";
import "./Checkbox.scss";
import IcomoonReact from "icomoon-react";
import iconSet from "../../../icons/selection.json";

interface CheckboxProps {
  checkboxId: string;
  children: React.ReactNode;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checkboxId,
  children,
  checked,
  disabled,
  onChange,
}) => {
  return (
    <div data-testid={checkboxId} className="checkboxContainer">
      <input
        id={checkboxId}
        type="checkbox"
        name={checkboxId}
        className="checkbox"
        onChange={onChange}
        disabled={disabled}
        checked={checked}
      />
      <label htmlFor={checkboxId}>
        <IcomoonReact
          className="tickIcon"
          iconSet={iconSet}
          icon="tick"
          size={12}
          color="#ffffff"
        />
        {children}
      </label>
    </div>
  );
};

export { Checkbox };
