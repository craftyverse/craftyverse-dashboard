import { SignInForm } from "./SigninForm";
import { renderWithRouter } from "../../../test/testUtils";
import { fireEvent, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import nock from "nock";

describe("<SignInForm />", () => {
  beforeEach(() => {
    renderWithRouter(<SignInForm />);
  });
  it("should render <SignInForm /> component", () => {
    expect(screen.getByText("Login to your account")).toBeInTheDocument();
  });

  describe("Email Input", () => {
    it("should render the email input", () => {
      expect(screen.getByText(/Email/i)).toBeInTheDocument();
    });

    it('should render an error message if the email does not have an "@" symbol', () => {
      fireEvent.blur(screen.getByPlaceholderText("Your Email"), {
        target: { value: "tony.li#test.com" },
      });

      expect(
        screen.getByText('Your email must contain "@" and ".".')
      ).toBeInTheDocument();
    });

    it('should render an error message if there no character between "@" and "."', () => {
      fireEvent.blur(screen.getByPlaceholderText("Your Email"), {
        target: { value: "@." },
      });

      expect(
        screen.getByText("Please enter a valid email.")
      ).toBeInTheDocument();
    });

    it('should render an error message if the email does not have at least one character after "."', () => {
      fireEvent.blur(screen.getByPlaceholderText("Your Email"), {
        target: { value: "tony.li@aol.w" },
      });

      expect(
        screen.getByText("Please enter a valid email domain.")
      ).toBeInTheDocument();
    });
  });

  describe("Password Input", () => {
    it("should render the password input", () => {
      expect(screen.getByText("Your Password")).toBeInTheDocument();
    });

    it("should render an error message if the password is less than 8 characters", () => {
      fireEvent.blur(screen.getByPlaceholderText("Your Password"), {
        target: { value: "sfe" },
      });

      expect(
        screen.getByText("Password must be at least 8 characters long.")
      ).toBeInTheDocument();
    });

    it("should render an error message if the password is more than 64 characters", () => {
      fireEvent.blur(screen.getByPlaceholderText("Your Password"), {
        target: { value: "a".repeat(65) },
      });

      expect(
        screen.getByText("Password must be at most 64 characters long.")
      ).toBeInTheDocument();
    });

    it("should render an error message if the password input does not have a lower case letter", () => {
      fireEvent.blur(screen.getByPlaceholderText("Your Password"), {
        target: { value: "PASSWORD123!" },
      });

      expect(
        screen.getByText("Password must contain at least one lowercase letter.")
      ).toBeInTheDocument();
    });

    it("should render an error message if the password input does not container a upper case letter", () => {
      fireEvent.blur(screen.getByPlaceholderText("Your Password"), {
        target: { value: "password123!" },
      });

      expect(
        screen.getByText("Password must contain at least one uppercase letter.")
      ).toBeInTheDocument();
    });

    it("should render an error message if the password input does not contain a number", () => {
      fireEvent.blur(screen.getByPlaceholderText("Your Password"), {
        target: { value: "Password!" },
      });

      expect(
        screen.getByText("Password must contain at least one number.")
      ).toBeInTheDocument();
    });

    it("should render an error message if the password input does not contain a special character", () => {
      fireEvent.blur(screen.getByPlaceholderText("Your Password"), {
        target: { value: "Password123" },
      });

      expect(
        screen.getByText(
          "Password must contain at least one special character."
        )
      ).toBeInTheDocument();
    });
  });

  describe("Log in button", () => {
    nock(`${process.env.VITE_AUTH_SERVICE_URL}`)
      .post("/api/users/v1/authentication/loginuser")
      .reply(200, {
        accessToken: "accessToken",
      });
    it("should render the log in button", () => {
      expect(screen.getByText(/Log in/i)).toBeInTheDocument();
    });

    it("should render an error message if the email input is empty", () => {
      fireEvent.blur(screen.getByPlaceholderText("Your Email"), {
        target: { value: "" },
      });

      fireEvent.blur(screen.getByPlaceholderText("Your Password"), {
        target: { value: "" },
      });

      fireEvent.click(screen.getByText(/Log in/i));

      expect(
        screen.getByText("Please fill in all fields.")
      ).toBeInTheDocument();
    });

    it("should successfully log in if the email and password are valid", async () => {
      fireEvent.blur(screen.getByPlaceholderText("Your Email"), {
        target: { value: "tony.li@test.io" },
      });

      fireEvent.blur(screen.getByPlaceholderText("Your Password"), {
        target: { value: "Password123!" },
      });

      fireEvent.click(screen.getByText(/Log in/i));

      const errorMsg = screen.queryByText("Please fill in all fields.");

      expect(errorMsg).not.toBeInTheDocument();
    });
  });
});
