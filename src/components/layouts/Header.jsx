import React from "react";
import Images from "../Images";
import logo from "/src/assets/hubert.png";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-[400px] h-screen py-7 px-7 text-center lg:flex flex-col justify-between items-center absolute hidden">
      <div>
        <Images className="w-[200px] m-auto" src={logo} />
        <h1 className="font-Inter font-semibold text-[30px] mt-[20px]">
          Hubert Dhrubo Gomes
        </h1>
      </div>

      <div>
        <ul className="text-[20px] font-Karla flex flex-col gap-y-[20px]">
          <li>
            {/* <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-500 text-white px-4 py-2 rounded"
                  : "px-4 py-2"
              }
            >
              Home
            </NavLink> */}
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-500 text-white px-4 py-2 rounded"
                  : "px-4 py-2"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
            to={"/About"}
            className={({isActive})=>
              isActive ? "bg-blue-500 text-white px-4 py-2 rounded" : "px-4 py-2"
            }
            >About</NavLink>
          </li>
          <li>
            <NavLink
              to="/Services"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-500 text-white px-4 py-2 rounded"
                  : "px-4 py-2"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Portfolio"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-500 text-white px-4 py-2 rounded"
                  : "px-4 py-2"
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Blog"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-500 text-white px-4 py-2 rounded"
                  : "px-4 py-2"
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-500 text-white px-4 py-2 rounded"
                  : "px-4 py-2"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex text-[46px] gap-x-[20px]">
          <a href="https://www.facebook.com/hubert.d.gomes" target="_blank">
            <CiFacebook />
          </a>
          <a href="https://github.com/hubertDgomes" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hubert-gomes-64a01b360/"
            target="_blank"
          >
            <CiLinkedin />
          </a>
        </div>
        <p className="font-Karla">Copyright © 2025 Hubert Dhrubo Gomes</p>
        <p className="font-Karla">All rights reserved.</p>
      </div>
    </div>
  );
};

export default Header;
