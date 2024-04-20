import React, { MouseEventHandler } from 'react';

import styles from './Button.module.scss';

export interface ButtonProps {
  type: 'primary' | 'secondary';
  size: 'large' | 'medium' | 'small';
  buttonText: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ type, size, buttonText, onClick }) => {
  return (
    <div
      className={
        (type === 'primary' && styles.buttonPrimary) ||
        (type === 'secondary' && styles.buttonSecondary)
      }
    >
      <div
        className={
          (size === 'large' && styles.buttonLarge) ||
          (size === 'medium' && styles.buttonMedium) ||
          (size === 'small' && styles.buttonSmall)
        }
      >
        <button className={styles.button} onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export { Button };
