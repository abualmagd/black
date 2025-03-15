import { NavLink } from "react-router";
import { title } from "../data/const";
import { ActionButton } from "./utils";

export function MyHeader() {
  return (
    <header className="navbar mr-0">
      <div className="nav-start flex-0">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            x
          </div>
          <ul className="menu menu-sm dropdown-content bg-neutral rounded-box z-[1] mt-3 p-2 w-52 shadow">
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/connect">book a call</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <NavLink to={"/"} className="btn btn-ghost text-xl">
        {title}
      </NavLink>
      <div className="flex-1"></div>
      <div className="navbar-end hidden md:flex"></div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
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
      <div className="navbar-end">
        <ActionButton word={"book a call"} link={"/connect"} />
      </div>
    </header>
  );
}
