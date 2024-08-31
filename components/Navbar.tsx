import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="shadow themeColor1 text-white">
      <div className="max-w-7xl mx-auto flex justify-between   py-2 items-center">
        <div className="search min-w-84 flex items-center gap-5">
          <div>Logo</div>
          <input
            type="text"
            placeholder="Search"
            className="border px-7 rounded outline-none py-1"
          />
        </div>

        <div className="cart flex items-center gap-4 ">
          <div className="profile">
            <CgProfile size={27} />
          </div>
          <IoBagHandleOutline size={27} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
