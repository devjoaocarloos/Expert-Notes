import React from "react";

import logo from "../../assets/logo-nlw-expert.svg";

const Header = () => {
  return (
    <div className="w-full bg-slate-700 text-slate-400 p-6 flex justify-around shadow-3xl">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex items-center space-x-5">
        <h1 className="font-semibold">Bloco de Notas</h1>
      </div>
    </div>
  );
};

export default Header;
