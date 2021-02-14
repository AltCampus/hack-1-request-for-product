import React from "react";
import {Link} from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="container  mx-auto font-Balsamiq bg-blue-400  w-20 left-0   fixed top-0 h-full shadow-2xl">
        <Link className='text-center px-1   text-white '>
           <i class="fab text-7xl py-2 text-white fa-battle-net "></i>
        </Link>
        <nav className="h-full my-10">
          <ul className="flex  flex-col   h-80 justify-between  items-center text-white">
            <li >
              <i className="far hover:bg-transparent hover:bg-opacity-40 hover:bg-gray-100 hover:px-2 hover:text-white py-2 px-5  rounded-full text-gray-200 fa-user text-3xl"></i>
            </li>
            <li>
              <i className="fas hover:bg-transparent hover:bg-opacity-40 hover:bg-gray-100 hover:px-2 hover:text-white py-2 px-5  rounded-full text-gray-200 fa-columns text-3xl"></i>
            </li>
            <li>
              <i className="fal hover:bg-transparent hover:bg-opacity-40 hover:bg-gray-100 hover:px-2 hover:text-white py-2 px-5  rounded-full text-gray-200 fa-calendar-week text-3xl"></i>
            </li>
            <li>
              <i className="fab hover:bg-transparent hover:bg-opacity-40 hover:bg-gray-100 hover:px-2 hover:text-white py-2 px-5  rounded-full text-gray-200 fa-product-hunt text-3xl"></i>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
