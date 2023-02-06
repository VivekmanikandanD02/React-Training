import { Outlet } from "react-router-dom";

const TeamsLayout = ()=> {
    return (
        <>
        <h1>This is Teams Page Layout</h1>
        <Outlet/>
        </>
    );
}

export default TeamsLayout;