import { Link, Outlet, useLocation } from "react-router-dom";

const TeamsData = [
    {id:"1", name: "India"},
    {id:"2", name: "Australia"},
    {id:"3", name: "London"},
    {id:"4", name: "USA"},
];
const isAuthenticated = true;
const Teams =()=> {
    // To retrieve the data sent while navigating from state use below hook 
    const location = useLocation();
    console.log({location});
    return (
        <>
        <div>
        <h1>Teams</h1>
        {/* we use Link wrapper intead of <a> tag so that the page not gets reloaded */}
         {TeamsData.map((team)=> (
            <Link to={`/teams/${team.id}`} key={team.id} style={{padding: "5px"}} >
            {team.name}
            </Link>
         )
         )}
         {/* we can use context to pass a common data to all children components from a parent component 
         while using Outlet in routing*/}
         <Outlet context={isAuthenticated}/>
        </div>
        </>
        )
    }
    
export default Teams;