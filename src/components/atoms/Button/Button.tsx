import React, { MouseEventHandler } from 'react';
import { Spinner } from '../Spinner';

import styles from './Button.module.scss';

export interface ButtonProps {
  type: 'primary' | 'secondary';
  size: 'large' | 'medium' | 'small';
  buttonText: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  size,
  buttonText,
  onClick,
  isLoading,
}) => {
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
          {isLoading ? <Spinner /> : buttonText}
        </button>
      </div>
    </div>
  );
};

export { Button };
