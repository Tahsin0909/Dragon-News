import { Link } from "react-router-dom";
import NavLink from "./NavLink";


const NavBar = () => {
    return (
        <div className="mx-2 md:mx-10">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                <NavLink></NavLink>
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            <NavLink></NavLink>
                        }
                    </ul>
                </div>
                <div className="navbar-end flex gap-1">
                    <img className="w-10" src="https://i.ibb.co/PDdQSKL/user.png" alt="" />
                    <Link><button className="btn btn-primary">Sign In</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;