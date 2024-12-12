import React from "react";

const Header = () => {
  return (
    <header>
      <nav className=" bg-[#005b1c] rounded-[30px] navbar flex items-center justify-between h-[60px] m-6">
        <div className="logo p-6">
          <a className=" font-[poppins] font-medium text-[24px] text-white" href="/">
            Cabieses
          </a>
        </div>
        <div className=" flex gap-4">
          <div className=" relative">
            <span className=" text-white material-symbols-outlined">
              notifications
            </span>
            <span className=" absolute top-[-5px] right-[-5px] bg-red-900 w-4 h-4 rounded-[30px] flex items-center justify-center text-white text-[10px]">
              1
            </span>
            <div></div>
          </div>
          <div className=" pr-6">
            <span className=" text-white material-symbols-outlined">
              account_circle
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
