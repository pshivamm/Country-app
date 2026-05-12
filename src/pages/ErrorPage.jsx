import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1><b>{error && error.status}</b> <br /> Oops!</h1>
            <p>Something went wrong</p>
            {error && <p>{error.data}</p>}
            <NavLink to="/">
                <button className="text-sm md:text-base px-4 py-2 mt-3 rounded-lg bg-blue-500 text-white hover:bg-blue-700 transition duration-600 ease-in-out"> Go back to home</button>
            </NavLink>
        </div>
    )
}