import React from "react";
import TakeInput from '../Output/TakeInput'
const DisplayResult = (props) =>{
return(
    <div className="resultDisplay">
        <TakeInput value={props.answer} textSize={{fontSize:'20px'}} />
        <TakeInput value={props.user} textSize={{fontSize:'20px'}} />
    </div>
);
}
export default DisplayResult;