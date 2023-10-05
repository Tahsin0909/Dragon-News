import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";


const NavBar = () => {
    const { currentuser, GoogleSignOut } = useContext(AuthContext)
    const { photoURL } = currentuser
    console.log(currentuser)
    const handleGoogleSignOut = () => {
        GoogleSignOut()
        console.log(currentuser)
    }

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
                    <img className="w-10 rounded-full" src={currentuser.uid ? `${photoURL}` : "https://i.ibb.co/PDdQSKL/user.png"} alt="" />
                    <Link to={currentuser.uid ? ' ' : '/signIn'} ><button onClick={() =>handleGoogleSignOut()} className="btn btn-primary">{currentuser.uid ? 'Sign Out' : 'Sign In'}</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;