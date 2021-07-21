import {useState} from "react";
import './App.css';


 function Button(){
    let [value,setValue] = useState(0);
    let handleCount = () => {
        return setValue(value+1);
    }


    return(
        <div className ="button">
            <button onClick={handleCount}>{value}</button>
        </div>
    )

}

export default Button;

