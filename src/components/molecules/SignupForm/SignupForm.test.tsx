// create unit tests for the SignupForm component
import { fireEvent, screen } from '@testing-library/react';
import { SignupForm } from './SignupForm';
import { renderWithRouter } from '../../../../tests/utils/renderWithRouter';

describe('<SignupForm />', () => {
  it('should render SignupForm component', () => {
    renderWithRouter(<SignupForm />, { route: '/register' });
    const signupFormElement = screen.getByText(
      /Create your craftyverse account/i
    );
    expect(signupFormElement).toBeInTheDocument();
  });

  describe('input UI validation', () => {
    it('should render first name label text', () => {
      renderWithRouter(<SignupForm />, { route: '/register' });
      const firstNameInputElement = screen.getByText(/First Name/i);
      expect(firstNameInputElement).toBeInTheDocument();
    });

    it('should render first name placeholder text', () => {
      renderWithRouter(<SignupForm />, { route: '/register' });
      const firstNamePlaceholderText =
        screen.getByPlaceholderText(/Your First Name/i);
      expect(firstNamePlaceholderText).toBeInTheDocument();
    });

    it('should render last name label text', () => {
      renderWithRouter(<SignupForm />, { route: '/register' });
      const lastNameInputElement = screen.getByText(/Last Name/i);
      expect(lastNameInputElement).toBeInTheDocument();
    });

    it('should render last name placeholder text', () => {
      renderWithRouter(<SignupForm />, { route: '/register' });
      const lastNameInputElement =
        screen.getByPlaceholderText(/Your last name/i);
      expect(lastNameInputElement).toBeInTheDocument();
    });

    it('should render email label text', () => {
      renderWithRouter(<SignupForm />, { route: '/register' });
      const emailInputElement = screen.getByText(/Email/i);
      expect(emailInputElement).toBeInTheDocument();
    });

    it('should render email placeholder text', () => {
      renderWithRouter(<SignupForm />, { route: '/register' });
      const emailInputElement = screen.getByPlaceholderText(/Your email/i);
      expect(emailInputElement).toBeInTheDocument();
    });

    it('should render password label text', () => {
      renderWithRouter(<SignupForm />, { route: '/register' });
      const passwordInputElement = screen.getByText('Password');
      expect(passwordInputElement).toBeInTheDocument();
    });

    it('should render password placeholder text', () => {
      renderWithRouter(<SignupForm />, { route: '/register' });
      const passwordInputElement = screen.getByPlaceholderText('Your password');
      expect(passwordInputElement).toBeInTheDocument();
    });

    it('should render confirm password label text', () => {
      renderWithRouter(<SignupForm />, { route: '/register' });
      const confirmPasswordInputElement = screen.getByText(/Confirm Password/i);
      expect(confirmPasswordInputElement).toBeInTheDocument();
    });

    it('should render confirm password placeholder text', () => {
      renderWithRouter(<SignupForm />, { route: '/register' });
      const confirmPasswordInputElement = screen.getByPlaceholderText(
        /Confirm Your Password/i
      );
      expect(confirmPasswordInputElement).toBeInTheDocument();
    });
  });
  describe('input error message validation', () => {
    describe('First Name', () => {
      it('should render a error message when the first name input is empty', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const firstNameInputElement =
          screen.getByPlaceholderText(/Your First Name/i);
        fireEvent.blur(firstNameInputElement, { target: { value: '' } });
        const firstNameErrorMessage = screen.getByText(
          /Please enter your first name/i
        );
        expect(firstNameErrorMessage).toBeInTheDocument();
      });

      it('should render a error message when the first name input is less than 2 characters', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const firstNameInputElement =
          screen.getByPlaceholderText(/Your First Name/i);
        fireEvent.blur(firstNameInputElement, { target: { value: 'a' } });
        const firstNameErrorMessage = screen.getByText(
          /First name must be at least 2 characters long/i
        );
        expect(firstNameErrorMessage).toBeInTheDocument();
      });

      it('should render a error message when the first name input is more than 64 characters', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const firstNameInputElement =
          screen.getByPlaceholderText(/Your First Name/i);
        fireEvent.blur(firstNameInputElement, {
          target: { value: 'a'.repeat(65) },
        });
        const firstNameErrorMessage = screen.getByText(
          /First name must be at most 64 characters long/i
        );
        expect(firstNameErrorMessage).toBeInTheDocument();
      });
    });

    describe('Last Name', () => {
      it('should render a error message when the last name input is empty', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const lastNameInputElement =
          screen.getByPlaceholderText(/Your last name/i);
        fireEvent.blur(lastNameInputElement, { target: { value: '' } });
        const lastNameErrorMessage = screen.getByText(
          /Please enter your last name/i
        );
        expect(lastNameErrorMessage).toBeInTheDocument();
      });

      it('should render a error message when the last name input is less than 2 characters', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const lastNameInputElement =
          screen.getByPlaceholderText(/Your last name/i);
        fireEvent.blur(lastNameInputElement, { target: { value: 'a' } });
        const lastNameErrorMessage = screen.getByText(
          /Last name must be at least 2 characters long/i
        );
        expect(lastNameErrorMessage).toBeInTheDocument();
      });

      it('should render a error message when the last name input is more than 64 characters', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const lastNameInputElement =
          screen.getByPlaceholderText(/Your last name/i);
        fireEvent.blur(lastNameInputElement, {
          target: { value: 'a'.repeat(65) },
        });
        const lastNameErrorMessage = screen.getByText(
          /Last name must be at most 64 characters long/i
        );
        expect(lastNameErrorMessage).toBeInTheDocument();
      });
    });

    describe('Email', () => {
      it('should render a error message when the email input is empty', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const emailInputElement = screen.getByPlaceholderText(/Your email/i);
        fireEvent.blur(emailInputElement, { target: { value: '' } });
        const emailErrorMessage = screen.getByText(/Please enter your email/i);
        expect(emailErrorMessage).toBeInTheDocument();
      });

      it('should render a error message if the email does not contain "@" and "."', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const emailInputElement = screen.getByPlaceholderText(/Your email/i);
        fireEvent.blur(emailInputElement, { target: { value: 'test' } });
        const emailErrorMessage = screen.getByText(
          /Your email must contain "@" and "."/i
        );
        expect(emailErrorMessage).toBeInTheDocument();
      });

      it('should render a error message if the email has a "@" before "."', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const emailInputElement = screen.getByPlaceholderText(/Your email/i);
        fireEvent.blur(emailInputElement, { target: { value: 'test.@com' } });
        const emailErrorMessage = screen.getByText(
          /Your email must contain "@" before "."./i
        );
        expect(emailErrorMessage).toBeInTheDocument();
      });

      it('should render a error message if the email has at least one character before "@" ', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const emailInputElement = screen.getByPlaceholderText(/Your email/i);
        fireEvent.blur(emailInputElement, { target: { value: '@gmail.com' } });
        const emailErrorMessage = screen.getByText(
          /Please enter a valid email./i
        );
        expect(emailErrorMessage).toBeInTheDocument();
      });
      it('should render a error message if the email has at least one character before "@" ', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const emailInputElement = screen.getByPlaceholderText(/Your email/i);
        fireEvent.blur(emailInputElement, {
          target: { value: 'tony.li@gmail.' },
        });
        const emailErrorMessage = screen.getByText(
          /Please enter a valid email./i
        );
        expect(emailErrorMessage).toBeInTheDocument();
      });

      it('should rendser a error message if the email has at least one character between "@" and "."', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const emailInputElement = screen.getByPlaceholderText(/Your email/i);
        fireEvent.blur(emailInputElement, {
          target: { value: 'tony.li@.com' },
        });
        const emailErrorMessage = screen.getByText(
          /Please enter a valid email./i
        );
        expect(emailErrorMessage).toBeInTheDocument();
      });
    });

    describe('password', () => {
      it('should initially set the input mode to "password"', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const passwordInputElement =
          screen.getByPlaceholderText('Your password');
        expect(passwordInputElement).toHaveAttribute('type', 'password');
      });

      it('should render a error message when the password input is empty', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const passwordInputElement =
          screen.getByPlaceholderText('Your password');
        fireEvent.blur(passwordInputElement, { target: { value: '' } });
        const passwordErrorMessage = screen.getByText(
          /Please enter a password/i
        );
        expect(passwordErrorMessage).toBeInTheDocument();
      });

      it('should render a error message when the password input is less than 8 characters', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const passwordInputElement =
          screen.getByPlaceholderText('Your password');
        fireEvent.blur(passwordInputElement, { target: { value: '1234567' } });
        const passwordErrorMessage = screen.getByText(
          /Password must be at least 8 characters long/i
        );
        expect(passwordErrorMessage).toBeInTheDocument();
      });

      it('should render a error message when the password input is more than 64 characters', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const passwordInputElement =
          screen.getByPlaceholderText('Your password');
        fireEvent.blur(passwordInputElement, {
          target: { value: 'a'.repeat(65) },
        });
        const passwordErrorMessage = screen.getByText(
          /Password must be at most 64 characters long/i
        );
        expect(passwordErrorMessage).toBeInTheDocument();
      });

      it('should render an error message when the password is missing a lowercase letter', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const passwordInputElement =
          screen.getByPlaceholderText('Your password');
        fireEvent.blur(passwordInputElement, {
          target: { value: 'ASDFGHJKL' },
        });
        const passwordErrorMessage = screen.getByText(
          /Password must contain at least one lowercase letter./i
        );
        expect(passwordErrorMessage).toBeInTheDocument();
      });

      it('should render an error message when the password is missing an uppercase letter', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const passwordInputElement =
          screen.getByPlaceholderText('Your password');
        fireEvent.blur(passwordInputElement, {
          target: { value: 'asdfghjkl' },
        });
        const passwordErrorMessage = screen.getByText(
          /Password must contain at least one uppercase letter./i
        );
        expect(passwordErrorMessage).toBeInTheDocument();
      });

      it('should render an error message when the password is missing a number', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const passwordInputElement =
          screen.getByPlaceholderText('Your password');
        fireEvent.blur(passwordInputElement, {
          target: { value: 'ASdrhrterg' },
        });
        const passwordErrorMessage = screen.getByText(
          /Password must contain at least one number./i
        );
        expect(passwordErrorMessage).toBeInTheDocument();
      });

      it('should render an error message when the password is missing a special character', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const passwordInputElement =
          screen.getByPlaceholderText('Your password');
        fireEvent.blur(passwordInputElement, {
          target: { value: 'Hyn686996' },
        });
        const passwordErrorMessage = screen.getByText(
          /Password must contain at least one special character./i
        );
        expect(passwordErrorMessage).toBeInTheDocument();
      });
    });

    describe('Confirm Password', () => {
      it('should render a error message when the confirm password input is empty', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const confirmPasswordInputElement = screen.getByPlaceholderText(
          /Confirm Your Password/i
        );
        fireEvent.blur(confirmPasswordInputElement, { target: { value: '' } });
        const confirmPasswordErrorMessage = screen.getByText(
          /Please confirm your password/i
        );
        expect(confirmPasswordErrorMessage).toBeInTheDocument();
      });

      it('should render a error message when the confirm password input does not match the password input', () => {
        renderWithRouter(<SignupForm />, { route: '/register' });
        const passwordInputElement =
          screen.getByPlaceholderText('Your password');
        const confirmPasswordInputElement = screen.getByPlaceholderText(
          /Confirm Your Password/i
        );
        fireEvent.blur(passwordInputElement, {
          target: { value: 'Password1!' },
        });
        fireEvent.blur(confirmPasswordInputElement, {
          target: { value: 'Password1' },
        });
        const confirmPasswordErrorMessage = screen.getByText(
          /Passwords do not match/i
        );
        expect(confirmPasswordErrorMessage).toBeInTheDocument();
      });
    });
  });

  describe('form submission', () => {
    const accessToken = `${process.env.USER_ACCESS_TOKEN}`;
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          userAccessToken: accessToken,
        }),
      });
    });

    it('should submit the form when all inputs are valid', async () => {
      renderWithRouter(<SignupForm />, { route: '/register' });

      const firstNameInputElement =
        screen.getByPlaceholderText(/Your First Name/i);
      const lastNameInputElement =
        screen.getByPlaceholderText(/Your last name/i);
      const emailInputElement = screen.getByPlaceholderText(/Your email/i);
      const passwordInputElement = screen.getByPlaceholderText('Your password');
      const confirmPasswordInputElement = screen.getByPlaceholderText(
        /Confirm Your Password/i
      );
      const submitButtonElement = screen.getByText(/Sign up/i);
      fireEvent.blur(firstNameInputElement, { target: { value: 'Tony' } });
      fireEvent.blur(lastNameInputElement, { target: { value: 'Li' } });
      fireEvent.blur(emailInputElement, {
        target: { value: 'tony.li@test.io' },
      });
      fireEvent.blur(passwordInputElement, { target: { value: 'Password1!' } });
      fireEvent.blur(confirmPasswordInputElement, {
        target: { value: 'Password1!' },
      });

      fireEvent.click(submitButtonElement);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
