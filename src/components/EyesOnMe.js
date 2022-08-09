import React from "react";

function EyesOnMe(){
    render (
        <button onFocus={()=>console.log('Good!')} onBlur={()=>console.log('Hey! Eyes on me!')}></button>
    )
};

export default EyesOnMe;