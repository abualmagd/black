import { title } from "../data/const";
import { ActionButton } from "./utils";



export function MyHeader(){

    return  <header className="navbar mr-0">
        <div className="nav-start flex-0">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                    x
                </div>
                <ul className="menu menu-sm dropdown-content bg-neutral rounded-box z-[1] mt-3 p-2 w-52 shadow">
                <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    <li><a>Item 3</a></li>
                    <li><a>Item 4</a></li>
                </ul>
            </div>
        </div>
        <a className="btn btn-ghost text-xl">{title}</a>
        <div className="flex-1"></div>
        <div className="navbar-end hidden md:flex"></div>
        <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    <li><a>Item 3</a></li>
                    <li><a>Item 4</a></li>
                </ul>

            </div>
        <div className="navbar-end">
            <ActionButton  word={'book a call'} link={'/'}/>
        </div>
    </header>
}


