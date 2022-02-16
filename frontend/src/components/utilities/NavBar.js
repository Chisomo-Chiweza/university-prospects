import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png"

function Navbar() {

    return (

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-20">

            <div className="max-w-6xl mx-auto px-4">

                <div className="flex justify-between">

                    <NavLink
                        className="flex space-x-7"
                        activeClassName=""
                        to="/"
                        exact
                    >
                        <div className="flex items-center py-4 px-2">
                            <img src={ Logo } alt="Logo" class="w-10 mr-2" />
                            <span class="font-semibold text-jonquil text-lg">University Prospects</span>
                        </div>

                    </NavLink>

                    <div className="hidden md:flex items-center space-x-3">

                        <NavLink
                            className="py-2 font-medium text-space active:text-jonquil"
                            activeClassName=""
                            to="/"
                            exact
                        >
                            Home
                        </NavLink>

                        <NavLink
                            className="py-2 font-medium text-space active:text-jonquil"
                            activeClassName="is-active"
                            to="/"
                            exact
                        >
                            See your top programs
                        </NavLink>

                    </div>

                    <div className="md:hidden flex items-center">

                        <button className="outline-none mobile-menu-button">
                            <svg
                                className="w-6 h-6 text-space"
                                x-show="!showMenu"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>

                    </div>

                    <div className="hidden mobile-menu">
                        <ul>
                            <li className="block text-sm px-2 text-gray-500 font-semibold">Home</li>
                            <li className="block text-sm px-2 text-gray-500 font-semibold">See top programs</li>
                        </ul>
                    </div>

                </div>

            </div>


        </nav>
    );
}

export default Navbar;