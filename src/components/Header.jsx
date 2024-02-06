import Logo from "./Logo.svg";

import React from "react";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img 
      className="w-44 my-4"
      src={Logo} alt="" />
    </div>
  );
};

export default Header;
