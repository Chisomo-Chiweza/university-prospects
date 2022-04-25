import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png"

function Navbar() {

    return (

        <nav className="bg-white border-b-2 shadow-sm border-gray-200 top-0 z-10">

            <div className="max-w-6xl mx-auto px-4">

                <div className="flex justify-between">

                <NavLink
                        className="flex space-x-7"
                        to="/"
                    >
                        <div className="flex items-center py-4 px-2">
                            <img src={ Logo } alt="Logo" className="w-10 mr-2" />
                            <span className="font-bold text-jonquil text-2xl">
                                <span className="text-space">University</span> Prospects
                            </span>
                        </div>
                    </NavLink>
                    <div className="hidden md:flex items-center gap-8 bg-clip-padding">
                        <NavLink
                            className="py-2 font-medium text-space text-lg mr-5"
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className="py-2 font-medium text-space text-lg mr-5"
                            to="/generate"
                        >
                            Contacts 
                        </NavLink>
                        <NavLink
                            className="py-2 font-medium text-space text-lg mr-5"
                            to="/generate"
                        >
                            About Us
                        </NavLink>
                        
                    </div>
                    

                    <div className="md:hidden flex items-center">

                        <button className="outline-none mobile-menu-button">
                            <svg
                                className="w-6 h-6 text-space"
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
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
                            <li className="block text-sm px-2 text-gray-500 font-semibold">Get Started</li>
                            <li className="block text-sm px-2 text-gray-500 font-semibold">About</li>
                            <li className="block text-sm px-2 text-gray-500 font-semibold">Contacts</li>
                        </ul>
                    </div>

                </div>

            </div>


        </nav>
        
    );
}

export default Navbar;