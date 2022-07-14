import React from "react";
import "./Styling.css"

function Stylesheet(props){
    const className= props.primary ? "primary" :" secondary"
  return(
       <div>
        <h1 className="primary">Heading One</h1>
       </div>



  )
}

export default Stylesheet
