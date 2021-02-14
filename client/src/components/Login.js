import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col justify-center items-center w-96 mx-auto my-14  px-15 shadow-2xl">
        <h2 className="text-black text-3xl py-4">Login</h2>
        <form className="flex flex-col  py-7">
          <label for="email" className="text-2xl ">
            E-mail
          </label>
          <input
            className="py-4"
            id="email"
            name="email"
            type="email"
            placeholder="e-mail address"
          />
          <label for="password" className="text-2xl ">
            Password
          </label>
          <input
            className="py-4"
            id="password"
            name="password"
            type="password"
            placeholder="password"
          />
          <button className="  py-4 text-white bg-gray-800 rounded-sm">
            LOGIN
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
