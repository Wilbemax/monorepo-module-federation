import { Link, Outlet } from "react-router-dom";


export function App() {

    return(
        <div>
            <h1>PAGE</h1>
            <Link to={'/about'}>About</Link>
            <br/> 
            <Link to={'/shop'}>shop</Link>
            <Outlet />
        </div>
    )
};
