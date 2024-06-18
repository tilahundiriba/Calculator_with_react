import React from "react";
import './DisplayResult.css'
const TakeInput = (props) =>{
return(
<div className="takenInput">
<input type="text" readOnly className="screen" style={props.textSize} value={props.value}/>
</div>
);
}
export default TakeInput;