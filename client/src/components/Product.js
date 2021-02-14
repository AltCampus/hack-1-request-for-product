import React from "react";

function Product() {
  return (
    <section className="container flex flex-col items-center  justify-items-center bg-white shadow border-2 border-gray-200 w-96 mx-auto my-4 px-6 py-6">
      <div className="flex flex-row justify-between  py-10  my-5 ">
        <div>
          <i class="fas fa-ad"></i>
        </div>
        <div className=" mx-4 flex flex-col">
          <h2>UX Designer</h2>
          <span>Evernote</span>
          <span>Redwood City, US</span>
          <span>Computer Software</span>
        </div>
        <div className=" mx-4 flex flex-col">
          <span>Senority</span>
          <span>Employment type</span>
          <span>Salary</span>
        </div>
        <div>
          <i class="fas fa-ad"></i>
        </div>
      </div>
      <div className="flex justify-between w-72 border-gray-200 border">
        <span>30 min ago</span>
        <span>UX Design</span>
        <span>UX Research</span>
        <span>Project Management</span>
      </div>
    </section>
  );
}

export default Product;
