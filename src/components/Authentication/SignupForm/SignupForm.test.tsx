import { fireEvent, render, screen } from "@testing-library/react";
import { SignupForm } from "./SignupForm";
import nock from "nock";

import "@testing-library/jest-dom";

describe("<SignupForm />", () => {
  beforeEach(() => {
    render(<SignupForm />);
  });
  it("should render <SignupForm /> component", () => {
    expect(
      screen.getByText("Create your craftyverse account")
    ).toBeInTheDocument();
  });

  describe("First Name Input", () => {
    it("should render the first name input", () => {
      expect(screen.getByText(/First Name/i)).toBeInTheDocument();
    });

    it('should render the first name input with the placeholder text "Your first name"', () => {
      expect(
        screen.getByPlaceholderText("Your first name")
      ).toBeInTheDocument();
    });

    it("should render a error message when the first name input is empty", () => {
      fireEvent.blur(screen.getByPlaceholderText("Your first name"), {
        target: { value: "" },
      });

      expect(
        screen.getByText("Please enter your first name")
      ).toBeInTheDocument();
    });

    it('should render a error message when the first name input is "a"', () => {
      fireEvent.blur(screen.getByPlaceholderText("Your first name"), {
        target: { value: "a" },
      });

      expect(
        screen.getByText("First name must be at least 2 characters long")
      ).toBeInTheDocument();
    });

    it(`should render a error message when the first name input is more than 64 characters`, () => {
      fireEvent.blur(screen.getByPlaceholderText("Your first name"), {
        target: { value: "a".repeat(65) },
      });

      expect(
        screen.getByText("First name must be at most 64 characters long")
      ).toBeInTheDocument();
    });
  });

  describe("Last Name Input", () => {
    it("should render the last name input", () => {
      expect(screen.getByText(/Last Name/i)).toBeInTheDocument();
    });

    it('should render the last name input with the placeholder text "Your last name"', () => {
      expect(screen.getByPlaceholderText("Your last name")).toBeInTheDocument();
    });

    it("should render a error message when the last name input is empty", () => {
      fireEvent.blur(screen.getByPlaceholderText("Your last name"), {
        target: { value: "" },
      });

      expect(
        screen.getByText("Please enter your last name")
      ).toBeInTheDocument();
    });

    it('should render a error message when the last name input is "a"', () => {
      fireEvent.blur(screen.getByPlaceholderText("Your last name"), {
        target: { value: "a" },
      });

      expect(
        screen.getByText("Last name must be at least 2 characters long")
      ).toBeInTheDocument();
    });

    it(`should render a error message when the last name input is more than 64 characters`, () => {
      fireEvent.blur(screen.getByPlaceholderText("Your last name"), {
        target: { value: "a".repeat(65) },
      });

      expect(
        screen.getByText("Last name must be at most 64 characters long")
      ).toBeInTheDocument();
    });
  });

  describe("Email Input", () => {
    it("should render the email input", () => {
      expect(screen.getByText(/Email/i)).toBeInTheDocument();
    });

    it('should render an error message if the email does not have an "@" symbol', () => {
      fireEvent.blur(screen.getByPlaceholderText("Your email"), {
        target: { value: "tony.li#test.com" },
      });

      expect(
        screen.getByText('Your email must contain "@" and ".".')
      ).toBeInTheDocument();
    });

    it('should render an error message if there no character between "@" and "."', () => {
      fireEvent.blur(screen.getByPlaceholderText("Your email"), {
        target: { value: "@." },
      });

      expect(
        screen.getByText("Please enter a valid email.")
      ).toBeInTheDocument();
    });

    it('should render an error message if the email does not have at least one character after "."', () => {
      fireEvent.blur(screen.getByPlaceholderText("Your email"), {
        target: { value: "tony.li@aol.w" },
      });

      expect(
        screen.getByText("Please enter a valid email domain.")
      ).toBeInTheDocument();
    });
  });

  describe("Password Input", () => {
    it("should render the password input", () => {
      expect(screen.getByText("Password")).toBeInTheDocument();
    });

    it("should render an error message if the password is less than 8 characters", () => {
      fireEvent.blur(screen.getByPlaceholderText("Your password"), {
        target: { value: "sfe" },
      });

      expect(
        screen.getByText("Password must be at least 8 characters long.")
      ).toBeInTheDocument();
    });

    it("should render an error message if the password is more than 64 characters", () => {
      fireEvent.blur(screen.getByPlaceholderText("Your password"), {
        target: { value: "a".repeat(65) },
      });

      expect(
        screen.getByText("Password must be at most 64 characters long.")
      ).toBeInTheDocument();
    });

    it("should render an error message if the password input does not have a lower case letter", () => {
      fireEvent.blur(screen.getByPlaceholderText("Your password"), {
        target: { value: "PASSWORD123!" },
      });

      expect(
        screen.getByText("Password must contain at least one lowercase letter.")
      ).toBeInTheDocument();
    });

    it("should render an error message if the password input does not container a upper case letter", () => {
      fireEvent.blur(screen.getByPlaceholderText("Your password"), {
        target: { value: "password123!" },
      });

      expect(
        screen.getByText("Password must contain at least one uppercase letter.")
      ).toBeInTheDocument();
    });

    it("should render an error message if the password input does not contain a number", () => {
      fireEvent.blur(screen.getByPlaceholderText("Your password"), {
        target: { value: "Password!" },
      });

      expect(
        screen.getByText("Password must contain at least one number.")
      ).toBeInTheDocument();
    });

    it("should render an error message if the password input does not contain a special character", () => {
      fireEvent.blur(screen.getByPlaceholderText("Your password"), {
        target: { value: "Password123" },
      });

      expect(
        screen.getByText(
          "Password must contain at least one special character."
        )
      ).toBeInTheDocument();
    });
  });

  describe("Confirm Password Input", () => {
    it("should render the confirm password input", () => {
      expect(screen.getByText("Confirm Password")).toBeInTheDocument();
    });

    it("should render an error message if the confirm password input is empty", () => {
      fireEvent.blur(screen.getByPlaceholderText("Confirm your password"), {
        target: { value: "" },
      });

      expect(
        screen.getByText("Please confirm your password.")
      ).toBeInTheDocument();
    });

    it("should render an error message if the confirm password does not match the password", () => {
      fireEvent.blur(screen.getByPlaceholderText("Your password"), {
        target: { value: "Password123" },
      });
      fireEvent.blur(screen.getByPlaceholderText("Confirm your password"), {
        target: { value: "Password123!" },
      });

      expect(screen.getByText("Passwords do not match.")).toBeInTheDocument();
    });
  });

  describe("Submit Button", () => {
    const response = nock(`${import.meta.env.VITE_AUTH_SERVICE_URL}`)
      .post("/api/users/v1/authentication/registeruser")
      .reply(200, {
        userFirstName: "Tony",
        userLastName: "Li",
        userEmail: "tony.li@test.io",
        userPassword: "Password123!",
        userConfirmPassword: "Password123!",
        userRoles: [],
        isTermsAndConditionsAccepted: undefined,
      });
    it("should render the submit button", () => {
      expect(
        screen.getByRole("button", { name: "Sign up" })
      ).toBeInTheDocument();
    });

    it("should render an error message if the submit button is clicked and the form is invalid", () => {
      fireEvent.click(screen.getByRole("button", { name: "Sign up" }));

      expect(
        screen.getByText("Please fill in all fields.")
      ).toBeInTheDocument();
    });

    it("should successfully submit the form when all fields are filled in correctly", () => {
      fireEvent.blur(screen.getByPlaceholderText("Your first name"), {
        target: { value: "Tony" },
      });
      fireEvent.blur(screen.getByPlaceholderText("Your last name"), {
        target: { value: "Li" },
      });
      fireEvent.blur(screen.getByPlaceholderText("Your email"), {
        target: { value: "tony.li@test.io" },
      });
      fireEvent.blur(screen.getByPlaceholderText("Your password"), {
        target: { value: "Password123!" },
      });
      fireEvent.blur(screen.getByPlaceholderText("Confirm your password"), {
        target: { value: "Password123!" },
      });
      fireEvent.click(screen.getByTestId("termsAndConditionsCheckbox"));

      fireEvent.click(screen.getByRole("button", { name: "Sign up" }));
      console.log(response);

      const errorMsg = screen.queryByText(
        "Please accept the terms and conditions."
      );
      expect(errorMsg).toBeInTheDocument();
    });
  });
});
