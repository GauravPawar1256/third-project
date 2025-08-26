import React from "react";
import GreetingsBCS from "./GreetingsBCS";  
import GreetingsBCA from "./GreetingsBCA";

export default function App() {
  const student = [
    { name: 'Gaurav', department: 'BCS' },
    { name: 'Shardul', department: 'BCS' },
    { name: 'Shravani', department: 'BCA' },
    { name: 'Rutuja', department: 'BCA' },
    { name: 'Trusha', department: 'BCS' },
    { name: 'Ayush', department: 'BCS' },
    { name: 'Anamika', department: 'BCA' },
    { name: 'Apeksha', department: 'MCS' },
    { name: 'Nikita', department: 'MCS' },
  ];

  return (
    <div>
      {student.map((singleElement) => (
        <div>
          {singleElement.department === "BCS" ? 
            <GreetingsBCS Name={singleElement.name} department={singleElement.department}/>
           : 
            <GreetingsBCA Name={singleElement.name} department={singleElement.department} />
          
      }
        </div>
      ))}
    </div>
  );
}
