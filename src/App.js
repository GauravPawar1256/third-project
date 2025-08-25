

 function App() {
  let student=[{Sr_NO:"1",Name:"Gaurav",Marks:"100"},{Sr_NO:"2",Name:"Shardul",Marks:"90"},
    {Sr_NO:"3",Name:"Shravani",Marks:"80"},
    {Sr_NO:"4",Name:"Trusha",Marks:"70"},{Sr_NO:"5",Name:"Rutuja",Marks:"60"},
  {Sr_NO:"6",Name:"Ayush",Marks:"50"}];
  return (
    <div>
      
        <table border={1}>
          <tr>
            <th>Sr.No.</th>
            <th>Name</th>
            <th>Marks</th>
          </tr>
          {student.map((singleElement)=>
            <tr>
              <td>{singleElement.Sr_NO}</td>
              <td>{singleElement.Name}</td>
              <td>{singleElement.Marks}</td>
            </tr>

          )}
        
        </table>
      

    </div>
    );
}

export default App;
