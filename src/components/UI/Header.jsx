import { NavLink } from "react-router-dom";

export const Headers = () => {
    return (
        <header className="bg-white border-b border-gray-300">
            <nav>
                <div className="container mx-auto flex flex-wrap items-center justify-between mx-auto px-4 py-6 ">
                    <NavLink to="/">
                        <h1 className="text-xl font-bold">Logo</h1>
                    </NavLink>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-default" aria-expanded="false">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/country">Country</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav >
        </header >
    );
}