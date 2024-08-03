import { UserSignupData } from "./SignupForm";
export class SignupFormUtils {
  static validateUserFirstName(userFirstName: string): {
    validUserFirstName: boolean;
    errorMsg?: string;
  } {
    if (userFirstName === "") {
      return {
        validUserFirstName: false,
        errorMsg: "Please enter your first name",
      };
    }

    if (userFirstName.length < 2) {
      return {
        validUserFirstName: false,
        errorMsg: "First name must be at least 2 characters long",
      };
    }

    if (userFirstName.length > 64) {
      return {
        validUserFirstName: false,
        errorMsg: "First name must be at most 64 characters long",
      };
    }

    return {
      validUserFirstName: true,
      errorMsg: "",
    };
  }

  static validateUserLastName(userLastName: string): {
    validUserLastName: boolean;
    errorMsg?: string;
  } {
    if (userLastName === "") {
      return {
        validUserLastName: false,
        errorMsg: "Please enter your last name",
      };
    }

    if (userLastName.length < 2) {
      return {
        validUserLastName: false,
        errorMsg: "Last name must be at least 2 characters long",
      };
    }

    if (userLastName.length > 64) {
      return {
        validUserLastName: false,
        errorMsg: "Last name must be at most 64 characters long",
      };
    }

    return {
      validUserLastName: true,
    };
  }

  static validateUserEmail(userEmail: string): {
    validUserEmail: boolean;
    errorMsg?: string;
  } {
    if (userEmail === "") {
      return {
        validUserEmail: false,
        errorMsg: "Please enter your email.",
      };
    }

    // Check if email contains '@' and '.'
    if (userEmail.indexOf("@") === -1 || userEmail.indexOf(".") === -1) {
      return {
        validUserEmail: false,
        errorMsg: 'Your email must contain "@" and ".".',
      };
    }

    // Check if there is at least one character before '@' and after '.'
    if (
      userEmail.indexOf("@") === 0 ||
      userEmail.lastIndexOf(".") === userEmail.length - 1
    ) {
      return {
        validUserEmail: false,
        errorMsg: "Please enter a valid email.",
      };
    }

    // Check if there is at least one character between '@' and '.'
    if (userEmail.indexOf("@") + 1 === userEmail.lastIndexOf(".")) {
      return {
        validUserEmail: false,
        errorMsg: "Please enter a valid email.",
      };
    }

    // Check if the part after '.' has at least two characters
    if (userEmail.slice(userEmail.lastIndexOf(".") + 1).length < 2) {
      return {
        validUserEmail: false,
        errorMsg: "Please enter a valid email domain.",
      };
    }

    return {
      validUserEmail: true,
    };
  }

  static validateUserPassword(userPassword: string): {
    validUserPassword: boolean;
    errorMsg?: string;
  } {
    if (userPassword === "") {
      return {
        validUserPassword: false,
        errorMsg: "Please enter a password.",
      };
    }

    if (userPassword.length < 8) {
      return {
        validUserPassword: false,
        errorMsg: "Password must be at least 8 characters long.",
      };
    }

    if (userPassword.length > 64) {
      return {
        validUserPassword: false,
        errorMsg: "Password must be at most 64 characters long.",
      };
    }

    if (userPassword.search(/[a-z]/) === -1) {
      return {
        validUserPassword: false,
        errorMsg: "Password must contain at least one lowercase letter.",
      };
    }

    if (userPassword.search(/[A-Z]/) === -1) {
      return {
        validUserPassword: false,
        errorMsg: "Password must contain at least one uppercase letter.",
      };
    }

    if (userPassword.search(/[0-9]/) === -1) {
      return {
        validUserPassword: false,
        errorMsg: "Password must contain at least one number.",
      };
    }

    if (userPassword.search(/[^a-zA-Z0-9]/) === -1) {
      return {
        validUserPassword: false,
        errorMsg: "Password must contain at least one special character.",
      };
    }
    return {
      validUserPassword: true,
    };
  }

  static validateUserConfirmPassword(
    userPassword: string,
    userConfirmPassword: string
  ): {
    validUserConfirmPassword: boolean;
    errorMsg?: string;
  } {
    if (userConfirmPassword === "") {
      return {
        validUserConfirmPassword: false,
        errorMsg: "Please confirm your password.",
      };
    }

    if (userPassword !== userConfirmPassword) {
      return {
        validUserConfirmPassword: false,
        errorMsg: "Passwords do not match.",
      };
    }

    return {
      validUserConfirmPassword: true,
    };
  }

  static validateUserSignupData(userSignupData: UserSignupData): {
    validUserSignupData: boolean;
    errorMsg?: string;
  } {
    console.log(userSignupData);
    if (
      userSignupData.userFirstName === "" ||
      userSignupData.userLastName === "" ||
      userSignupData.userEmail === "" ||
      userSignupData.userPassword === "" ||
      userSignupData.userConfirmPassword === ""
    ) {
      return {
        validUserSignupData: false,
        errorMsg: "Please fill in all fields.",
      };
    } else if (!userSignupData.isTermsAndConditionsAccepted) {
      return {
        validUserSignupData: false,
        errorMsg: "Please accept the terms and conditions.",
      };
    }

    return {
      validUserSignupData: true,
    };
  }
}
