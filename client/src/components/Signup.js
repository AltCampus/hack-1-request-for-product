import React from "react";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <section className='w-full h-screen flex py-20 items-center justify-center'>
              <div className='shadow-xl flex h-full   overflow-hidden flex-row justify-center items-center rounded-md'>
                  <div className=' h-full '>
                      <img className='h-full w-full  ' src='https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt=''></img>
                  </div>
                    <div className='px-4 w-full h-full  '>
                      <h2 className="text-4xl text-center text-green-800 text-shadow-md font-bold py-4">Register</h2>
                      <form className='flex flex-col'>
                          <div className='flex flex-col my-4'>
                                <label htmlFor="Username" className="text-xl text-shadow-sm font-bold">
                                  Username
                                </label>
                                <input
                                  className="py-2 w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent "
                                  id="Username"
                                  name="Username"
                                  type="text"
                                  placeholder="Enter your username"
                                />
                          </div>
                          <div className='flex flex-col my-4'>
                                <label htmlFor="email" className="text-xl text-shadow-sm font-bold  ">
                                  Email
                                </label>
                                <input
                                  className="py-2 w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent  "
                                  id="email"
                                  name="email"
                                  type="email"
                                  placeholder="Enter your email"
                                />
                          </div>
                          <div className='flex flex-col my-4'>
                                <label htmlFor="password" className="text-xl text-shadow-sm font-bold ">
                                  Password
                                </label>
                                <input
                                  className="py-2 w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent  "
                                  id="password"
                                  name="password"
                                  type="password"
                                  placeholder="Enter your password"
                                />
                          </div>
                          <div className='flex items-center justify-center'>
                                <button className=" px-6 py-4 text-white bg-blue-800 rounded-sm">
                                  SIGNUP
                                </button>
                          </div>
                          <div className='flex flex-row justify-center my-4'>
                            <h2 className='text-green-600 text-xl'>Already Registered? </h2>
                            <Link to='/login'>
                                <h3 className='text-xl mx-2 text-shadow-md font-bold underline'>Login</h3>
                            </Link>
                          </div>
                      </form>
                  </div>
              </div>
        </section>
    );
  }
}

export default Signup;


