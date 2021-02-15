import React from "react";
import { Link } from "react-router-dom";
class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="flex flex-col py-2  justify-items-between shadow justify-between">
        <div className="flex flex-row px-10 py-5 justify-between items-center w-full">
          <div className="mx-20">
            <h2 className="text-green-800 font-bold text-shadow-sm text-2xl">
              Ideathon
            </h2>
          </div>
          <div className="box-shadow">
            <div className="flex flex-row items-center shadow  border-gray-200 py-1 px-2 justify-between profile-outer">
              <div className=" px-2 mx-2 border py-1 border-gray-400 shadow-md bell-icon ">
                <i className="far text-md text-blue-500 text-shadow-md fa-bell"></i>
              </div>
              <Link>
                <div className="flex mx-2  items-end  flex-row profile-box">
                  <i className="far text-2xl mx-3 fa-user"></i>
                  <h2 className="text-xl font-bold text-shadow-md">
                    Gangadhar
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="px-20  flex-row justify-center  flex">
          <div className=" justify-center ">
            <div className="bg-blue-500 my-4 mb-8  shadow-xl">
              <input
                className="w-96 h-8 border border-gray-400 px-1 py-5 "
                type="text"
                id="search"
                name="search"
              ></input>
              <i className="fas px-7 text-white   top-5 fa-search"></i>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default Hero;

