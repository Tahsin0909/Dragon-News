import { NavLink } from "react-router-dom";


const NavLinks = () => {
    return (
        <div className="flex">
            <li className="text-lg">
                <NavLink to={'/'} className={({ isActive, isPending }) =>
                    isActive ? "underline font-semibold text-blue-500" : isPending ? "pending" : ""
                }
                >
                    Home
                </NavLink>
            </li>
            <li className="text-lg">
                <NavLink to={'/about'} className={({ isActive, isPending }) =>
                    isActive ? "underline font-semibold text-blue-500" : isPending ? "pending" : ""
                }
                >
                    About
                </NavLink>
            </li>
            <li className="text-lg">
                <NavLink to={'/career'} className={({ isActive, isPending }) =>
                    isActive ? "underline font-semibold text-blue-500" : isPending ? "pending" : ""
                }
                >
                   Career
                </NavLink>
            </li>
        </div>
    );
};

export default NavLinks;