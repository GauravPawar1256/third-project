import React from "react";
import Greetings from "./Greetings";  

export default function App() {
  const student=[
    'Gaurav','Shardul','Shravani','Rutuja','Trusha','Ayush','Anamika','Apeksha','Nikita',
  ];
  return (
    <div>
     <Greetings Name={student}/>
    </div>
  );
}
