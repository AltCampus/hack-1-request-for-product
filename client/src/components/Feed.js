import React from "react";
import { Link } from "react-router-dom";
import Aside from "./Aside";

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <article className="px-20 py-5 w-full shadow-md">
          <section className="feed-part flex">
            <div className="filters my-6  rounded  w-60 px-4 py-6  text-center h-full">
              <div className="text-center">
                <h1 className="text-2xl text-shadow-sm text-purple-500">
                  Filter Section
                </h1>
              </div>
              <div className="flex flex-col justify-items-center mt-2 justify-between">
                <span className="pt-2 text-md text-gray-700"><p>Today</p></span>
                <span className="py-3 text-md text-gray-700"><p>This week</p></span>
                <span className="pb-3 text-md text-gray-700"><p>Last Week</p></span>
              </div>
            </div>
            <div className="product-cards flex py-2  flex-col ml-20 w-full h-full">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </section>
        </article>
      </>
    );
  }
}

function Card(props) {
  return (
    <>
      <div className="px-7  bg-purple-50 bg-transparent py-5 my-5 rounded  shadow-inner  flex flex-row items-center justify-around  ">
        <div className=" flex flex-col justify-between ">
          <img
            className="w-20 h-20 rounded-full"
            src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="product"
          ></img>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col py-2 ml-8">
            <div className="px-1 leading-5">
              <h2 className="text-2xl py-2 text-black">
                Lorem ipsum dolor sit amet consectetur adipiscing elit
              </h2>
              <p className="text-sm py-2 text-gray-600 leading-6 tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipiscing elit odio,
                pulvinar urna pretium ultricies viverra dis. Cras et mus{" "}
              </p>
            </div>
          </div>
          <div className=" items-center flex flex-row ml-9 pb-4">
            <Link>
              <span className="py-6 text-blue-600 ">Read More</span>
            </Link>
            <div className="flex mx-10 flex-row">
              <div className="mx-4 text-shadow-xl text-gray-800">
                <i className="fas text-blue-800 fa-tag mr-1.5"></i>
                <span>Tech</span>
              </div>
              <div className="mx-4  text-shadow-xl text-gray-800">
                <i className="fas text-blue-800 fa-tag mr-1.5"></i>
                <span>Tech</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="shadow-xl cursor-pointer flex flex-col items-center mx-5 py-2 px-6">
            <h2 className="text-2xl">1</h2>
            <button>
              <i className="fas text-2xl fa-chevron-up"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;


