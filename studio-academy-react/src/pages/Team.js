import { useOutletContext, useParams, useSearchParams } from "react-router-dom";

const Team =()=> {
    // To fetch the dynamic route parameters being passed in url like :teamId mentioned in route
    const {teamId} = useParams();
    // To fetch query parameters like ?order=desc&page=1 from url
    const [searchParams] = useSearchParams();
    // To fetch the data passed from Outlet via context in parent component useOutletContext hook is used
    const context = useOutletContext();
    console.log({
        searchParams: searchParams.get("order"),
        page: searchParams.get("page")
    });
    console.log({context});
    return (
        <>
        <h1>Team</h1>
        <p>Team Id: {teamId}</p>
        </>
    )
    };
    
export default Team;