import { useContext } from "react";
import { DarkModeContext } from "../App";

function Container() {
const {darkMode, toggleDarkMode}  = useContext(DarkModeContext);

// using function to render DOM elements inside JSX
const content = ()=>{
    return (
        <div>
            {darkMode && <p>Lights ON</p>}
            {!darkMode && <p>Lights OFF</p>}
        </div>
    );
};

const turnOnOffLights = ()=> {
    toggleDarkMode();
};
;

return(
    <div>
        {content()}
        <button onClick={turnOnOffLights}>Turn ON</button>
        <button onClick={turnOnOffLights}>Turn OFF</button>
    </div>
    )
}

export default Container;