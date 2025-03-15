import { NavLink } from "react-router";
import { title } from "../data/const";
import { ActionButton } from "./utils";

export function MyHeader() {
  return (
    <header className="navbar mr-0">
      <div className="nav-start flex-0">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost mx-0 md:hidden"
          >
            <svg
              fill="#ffffff"
              width="256px"
              height="256px"
              viewBox="0 0 32.00 32.00"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              className=" h-8 w-8 "
            >
              <g id="SVGRepo_bgCarrier"></g>
              <g id="SVGRepo_tracerCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>menu</title>{" "}
                <path d="M8 24h16v-4h-16v4zM8 18.016h16v-4h-16v4zM8 12h16v-4h-16v4z"></path>{" "}
              </g>
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-neutral rounded-box z-[1] mt-3 p-2 w-52 shadow">
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
          </ul>
        </div>
      </div>
      <NavLink to={"/"} className="md:flex btn hidden btn-ghost text-xl">
        <img src="/logo-white.svg" className="h-10 w-10" alt="" />
        {title}
      </NavLink>
      <div className="flex-1"></div>
      <div className="navbar-end hidden md:flex"></div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <a href="/#projects">projects</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ActionButton word={"book a call"} link={"/connect"} />
      </div>
    </header>
  );
}
