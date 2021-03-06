import React from "react";
import { SignIn } from "phosphor-react";

const LoginButton = (smallScreen) => {
  // if prop passed in, button will span entire width of container
  const width = smallScreen ? "w-full" : "";
  return (
    <li className="list-none">
        <a
          href="/login"
          className={`${width} inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-5000 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none`}
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