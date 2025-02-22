import React from "react";
import notfound from "../assets/web.png";

function Notfound() {
  return (
    <div className="flex justify-center items-center flex-col bg-gray-700 gap-5 mt-5 h-screen rounded-md">
      <img src={notfound} alt="" className="h-36" />
      <h1 className="font-semibold text-white text-2xl">Page not found!</h1>
    </div>
  );
}

export default Notfound;
