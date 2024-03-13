import { render, screen } from '@testing-library/react';
import { Input } from './Input';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('<Input />', () => {
  it('should render <Input /> component', () => {
    render(
      <Input inputType="email" labelName="Email" placeholderName="Email" />
    );

    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('should render a border color of $logo-main when the input is active', () => {
    render(
      <Input
        inputType="email"
        labelName="Email"
        placeholderName="Email"
        toggleInputFocus={true}
      />
    );

    expect(screen.getByText('Email')).toHaveStyle(
      'border-color: 1px solid #EA5523 !important'
    );
  });

  it('should render an error message', () => {
    render(
      <Input
        inputType="email"
        labelName="Email"
        placeholderName="Email"
        inputErrorMsg="Invalid email"
      />
    );

    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  describe('<Input /> email type', () => {
    beforeEach(() => {
      render(
        <Input inputType="email" labelName="Email" placeholderName="Email" />
      );
    });

    it('should render <Input /> component with "Email" as the placeholder text', () => {
      expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
      expect(screen.getByText('Email')).toBeInTheDocument();
    });

    it('should render the email icon when the labelName is "Email"', () => {
      expect(screen.getByTestId('email-icon')).toBeInTheDocument();
    });
  });

  describe('<Input /> text type', () => {
    it('should render <Input /> component with "Description of your product" as the placeholder text', () => {
      render(
        <Input
          inputType="text"
          labelName="Product Descritpion"
          placeholderName="Description of your product"
        />
      );
      expect(
        screen.getByPlaceholderText('Description of your product')
      ).toBeInTheDocument();
      expect(screen.getByText('Product Descritpion')).toBeInTheDocument();
    });

    it('should not render an icon if the text input does not have a labelName of "First Name" or "Last Name"', () => {
      render(
        <Input
          inputType="text"
          labelName="Product Descritpion"
          placeholderName="Description of your product"
        />
      );
      expect(screen.queryByTestId('user-icon')).not.toBeInTheDocument();
    });

    it('should render the user icon when the labelName is "First Name"', () => {
      render(
        <Input
          inputType="text"
          labelName="First Name"
          placeholderName="First Name"
        />
      );
      expect(screen.getByTestId('user-icon')).toBeInTheDocument();
    });

    it('should render the user icon when the labelName is "Last Name"', () => {
      render(
        <Input
          inputType="text"
          labelName="Last Name"
          placeholderName="Last Name"
        />
      );
      expect(screen.getByTestId('user-icon')).toBeInTheDocument();
    });
  });

  describe('<Input /> password type', () => {
    it('should render <Input /> component with "Password" as the placeholder and label text text', () => {
      render(
        <Input
          inputType="password"
          labelName="Password"
          placeholderName="Password"
        />
      );
      expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
      expect(screen.getByText('Password')).toBeInTheDocument();
    });

    it('should render the lock icon when the labelName is "Password"', () => {
      render(
        <Input
          inputType="password"
          labelName="Password"
          placeholderName="Password"
        />
      );
      expect(screen.getByTestId('password-icon')).toBeInTheDocument();
    });

    it('should render the eye-icon icon when the password is visible', async () => {
      render(
        <Input
          inputType="password"
          labelName="Password"
          placeholderName="Password"
        />
      );

      expect(screen.getByTestId('eye-hide-icon')).toBeInTheDocument();

      //Check if the input type is password
      const input = screen.getByPlaceholderText('Password');
      expect(input).toHaveAttribute('type', 'password');
    });

    it('should render the eye-icon icon when the password is visible', async () => {
      render(
        <Input
          inputType="password"
          labelName="Password"
          placeholderName="Password"
        />
      );
      const showPasswordButton = screen.getByRole('button');
      await userEvent.click(showPasswordButton);
      expect(screen.getByTestId('eye-icon')).toBeInTheDocument();

      //Check if the input type is text
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('type', 'text');
    });
  });

  describe('<Input /> number type', () => {
    it('should render <Input /> component with "Number" as the placeholder and label text text', () => {
      render(
        <Input inputType="number" labelName="Number" placeholderName="Number" />
      );
      expect(screen.getByPlaceholderText('Number')).toBeInTheDocument();
      expect(screen.getByText('Number')).toBeInTheDocument();
    });
  });
});
