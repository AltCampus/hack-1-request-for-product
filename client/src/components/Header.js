import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="container  mx-auto font-Balsamiq bg-blue-400  w-20  fixed top-0 h-full shadow-lg">
        <div>
          <h1 className="text-center py-4 text-white">Logo</h1>
        </div>
        <nav className="h-full">
          <ul className="flex  flex-col justify-evenly h-full  items-center text-white">
            <li>
              <i class="far fa-user text-2xl"></i>
            </li>
            <li>
              <i class="fas fa-columns text-2xl"></i>
            </li>
            <li>
              <i class="fal fa-calendar-week text-2xl"></i>
            </li>
            <li>
              <i class="fab fa-product-hunt text-2xl"></i>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
