import { fireEvent, render, screen } from "@testing-library/react";
import { SignupForm } from "./SignupForm";

import "@testing-library/jest-dom";

describe("<SignupForm />", () => {
  it("should render <SignupForm /> component", () => {
    render(<SignupForm />);
    expect(
      screen.getByText("Create your craftyverse account")
    ).toBeInTheDocument();
  });

  describe("First Name Input", () => {
    it("should render the first name input", () => {
      render(<SignupForm />);
      expect(screen.getByText(/First Name/i)).toBeInTheDocument();
    });

    it('should render the first name input with the placeholder text "Your first name"', () => {
      render(<SignupForm />);
      expect(
        screen.getByPlaceholderText("Your first name")
      ).toBeInTheDocument();
    });

    it("should render a error message when the first name input is empty", () => {
      render(<SignupForm />);

      fireEvent.blur(screen.getByPlaceholderText("Your first name"), {
        target: { value: "" },
      });

      expect(
        screen.getByText("Please enter your first name")
      ).toBeInTheDocument();
    });
  });

  describe("Last Name Input", () => {
    it("should render the last name input", () => {
      render(<SignupForm />);
      expect(screen.getByText(/Last Name/i)).toBeInTheDocument();
    });

    it('should render the last name input with the placeholder text "Your last name"', () => {
      render(<SignupForm />);
      expect(screen.getByPlaceholderText("Your last name")).toBeInTheDocument();
    });

    it("should render a error message when the last name input is empty", () => {
      render(<SignupForm />);

      fireEvent.blur(screen.getByPlaceholderText("Your last name"), {
        target: { value: "" },
      });

      expect(
        screen.getByText("Please enter your last name")
      ).toBeInTheDocument();
    });

    it('should render a error message when the last name input is "a"', () => {
      render(<SignupForm />);

      fireEvent.blur(screen.getByPlaceholderText("Your last name"), {
        target: { value: "a" },
      });

      expect(
        screen.getByText("Last name must be at least 2 characters long")
      ).toBeInTheDocument();
    });

    it(`should render a error message when the last name input is ${"a".repeat(
      65
    )}`, () => {
      render(<SignupForm />);

      fireEvent.blur(screen.getByPlaceholderText("Your last name"), {
        target: { value: "a".repeat(65) },
      });

      expect(
        screen.getByText("Last name must be at most 64 characters long")
      ).toBeInTheDocument();
    });
  });
});
