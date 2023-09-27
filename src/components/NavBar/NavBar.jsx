import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="w-[1380px] bg-slate-500 mx-auto">

            <header className="mt-10 flex justify-between items-center">
                <img  src="./Logo.png" alt="" />
                <ul className="flex gap-10 text-xl">
                    <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
                        }
                    >
                    Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
                        }
                    >
                    Donation
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
                        }
                    >
                    Statistics
                    </NavLink>
                    </li>
                    
            
                </ul>

            </header>

        </div>
    );
};

export default NavBar;