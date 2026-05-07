import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Headers = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white border-b px-4 border-gray-300">
            <nav>
                <div className="relative container flex flex-wrap items-center justify-between mx-auto py-5">
                    <NavLink to="/">
                        <h1 className="text-xl font-bold uppercase text-blue-800">Country App</h1>
                    </NavLink>
                    <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center text-sm text-body rounded-sm md:hidden bg-gray-300 hover:bg-blue-200 p-1" aria-controls="navbar-default" aria-expanded={isMenuOpen}>
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                        </svg>
                    </button>
                    <div className={`${isMenuOpen ? '' : 'hidden'} absolute md:static left-0 right-0 top-full w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="md:flex md:space-x-4 p-4 md:p-0 mt-2 md:mt-0 border md:border-0 border-gray-300 rounded-lg bg-white">
                            <li><NavLink to="/" aria-current="page" className="text-sm md:text-base inline-block w-full rounded-sm hover:bg-blue-200 px-3 py-1">Home</NavLink></li>
                            <li><NavLink to="/about" className="text-sm md:text-base inline-block w-full rounded-sm hover:bg-blue-200 px-3 py-1">About</NavLink></li>
                            <li><NavLink to="/contact" className="text-sm md:text-base inline-block w-full rounded-sm hover:bg-blue-200 px-3 py-1">Contact</NavLink></li>
                            <li><NavLink to="/country" className="text-sm md:text-base inline-block w-full rounded-sm hover:bg-blue-200 px-3 py-1">Country</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav >
        </header >
    );
}