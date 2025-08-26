import React from "react";

function Greetings(props) {

  return (
    props.Name.map((singleElement)=>{
        return <h1> hello {singleElement}</h1>
    })
  );
}

export default Greetings; 
