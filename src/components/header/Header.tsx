import React from "react";

import { SlNotebook } from "react-icons/sl";

import logo from "../../assets/logo-nlw-expert.svg";

const Header = () => {
  return (
    <div className="w-full bg-slate-700 text-slate-900 p-6 flex justify-around shadow-3xl">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-3">
        <h1 className="font-semibold text-2xl">BLOCO DE NOTAS</h1>
        <SlNotebook className="text-2xl"/>
      </div>
    </div>
  );
};

export default Header;
