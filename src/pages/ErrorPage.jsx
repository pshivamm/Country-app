import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1><b>{error && error.status}</b> <br /> Oops!</h1>
            <p>Something went wrong</p>
            {error && <p>{error.data}</p>}
            <NavLink to="/">
                <button> Go back to home</button>
            </NavLink>
        </div>
    )
}