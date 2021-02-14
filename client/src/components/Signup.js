import React from "react";

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col justify-center items-center w-96 mx-auto my-14  px-15 shadow-2xl">
        <h2 className="text-2xl py-4">Register Here</h2>
        <form className="flex flex-col  py-7">
          <label for="Username" className="text-2xl py-2">
            Username
          </label>
          <input
            className="py-4 shadow-md my-4"
            id="Username"
            name="Username"
            type="text"
            placeholder="Username"
          />
          <label for="email" className="text-2xl py-2 ">
            Email
          </label>
          <input
            className="py-4 shadow-md my-4"
            id="email"
            name="email"
            type="email"
            placeholder="email"
          />
          <label for="password" className="text-2xl py-2 ">
            Password
          </label>
          <input
            className="py-4 shadow-md my-4"
            id="password"
            name="password"
            type="password"
            placeholder="password"
          />
          <button className="  py-4 text-white bg-blue-800 rounded-sm">
            SIGNUP
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
