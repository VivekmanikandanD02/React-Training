import { useNavigate } from "react-router-dom";

const Home =()=> {
    const someData = {key: "123"};
    // For navigating to routes automatically through button click or code we can use the below hook
    const navigate = useNavigate();
    // we can pass any data while navigating like below through state
    const handleNavigate = () => {
        navigate("/teams",{state: someData});
    };

    return (
    <>
    <h1>Home</h1>
    <button onClick={handleNavigate}>Navigate to Teams</button>
    </>
    )
}
    
export default Home;