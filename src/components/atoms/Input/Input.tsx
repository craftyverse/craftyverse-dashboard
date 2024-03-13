import React, { ChangeEventHandler, FocusEventHandler, useState } from 'react';
import iconSet from '../../../icons/selection.json';
import IcomoonReact from 'icomoon-react';
import styles from './Input.module.scss';

export interface inputProps {
  inputType: 'email' | 'text' | 'password' | 'number';
  labelName: string;
  placeholderName: string;
  inputErrorMsg?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  toggleInputFocus?: boolean;
  value?: string;
}

/**
 * Rendering different icons according to different input types
 */
const renderInputIcons = (type: string, labelName: string) => {
  if (type === 'email') {
    return (
      <div data-testid="email-icon">
        <IcomoonReact iconSet={iconSet} icon="email-outline" size={24} color="#000000" />
      </div>
    );
  }

  if (type === 'password') {
    return (
      <div data-testid="password-icon">
        <IcomoonReact iconSet={iconSet} icon="lock-outline" size={24} color="#000000" />
      </div>
    );
  }

  if (type === 'text' && (labelName.includes('First') || labelName.includes('Last'))) {
    return (
      <div data-testid="user-icon">
        <IcomoonReact iconSet={iconSet} icon="user-icon" size={24} color="#000000" />
      </div>
    );
  }
};

const Input: React.FC<inputProps> = ({
  inputType,
  labelName,
  placeholderName,
  inputErrorMsg,
  onBlur,
  onChange,
  onFocus,
  toggleInputFocus,
  value,
}) => {
  const [togglePasswordVisibility, setTogglePasswordVisibility] = useState<boolean>(false);

  const handleTogglePasswordVisibility = () => {
    setTogglePasswordVisibility(!togglePasswordVisibility);
  };

  const renderPasswordIconToggle = (): React.ReactNode => {
    return (
      <button onClick={handleTogglePasswordVisibility}>
        {!togglePasswordVisibility ? (
          <div data-testid="eye-hide-icon">
            <IcomoonReact className={styles.eyehideIcon} iconSet={iconSet} icon="eye-hide" size={24} color="#000000" />
          </div>
        ) : (
          <div data-testid="eye-icon">
            <IcomoonReact className={styles.eyehideIcon} iconSet={iconSet} icon="eye" size={24} color="#000000" />
          </div>
        )}
      </button>
    );
  };

  return (
    <div className={`${styles.inputContainer} ${toggleInputFocus && styles.inputFocus}`}>
      <label className={styles.inputLabelName} htmlFor={labelName}>
        {labelName}
      </label>
      <div className={styles.inputTextContainer}>
        {renderInputIcons(inputType, labelName)}
        {togglePasswordVisibility && inputType === 'password' ? (
          <input
            type="text"
            name={labelName}
            placeholder={placeholderName}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        ) : (
          <input
            type={inputType}
            name={labelName}
            placeholder={placeholderName}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        <div className={styles.inputEyeIcon}>{labelName.includes('Password') && renderPasswordIconToggle()}</div>
      </div>
      <p className={styles.inputErrorMessage}>{inputErrorMsg}</p>
    </div>
  );
};

export { Input };
