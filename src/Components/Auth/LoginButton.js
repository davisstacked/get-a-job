import React from "react";
import { SignIn } from "phosphor-react";

const LoginButton = (smallScreen) => {
  // if prop passed in, button will span entire width of container
  const width = smallScreen ? "w-full" : "";
  return (
    <li>
      <a
        href="/login"
        className={`${width} inline-flex items-center justify-center shadow-md bg-deep-purple-accent-400 h-12`}
        aria-label="Login"
        title="Login"
      >
        Login
        <SignIn size={24} />
      </a>
    </li>
  );
};

export default LoginButton;