import React from "react";
import { Outlet } from "react-router-dom";  
import Header from "./Header";
import SplashCursor from '/src/components/SplashCursor'
const RootLayout = () => {
  return (
    <>
      <div className="flex flex-1">
        <div className="lg:w-[350px]">
          <Header />
        </div>
        <div className="flex-1 bg-[#EFFBF8] h-screen border-1 rounded-2xl py-[30px] overflow-scroll">
        
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
