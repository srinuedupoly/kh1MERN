import logo from './logo.svg';
import './App.css';
import React from 'react'
function App() {
  var [employee,setEmployee]=React.useState({
    firstname:'',
    lastname:'',
    age:''
  })
  var [employees,setEmployees] = React.useState([])
  React.useEffect(()=>{
   getEmployees()
  },[])
  function getEmployees(){
    fetch("http://localhost:5500/employees")
    .then(res=>res.json())
    .then(data=>setEmployees(data))
  }
  function addEmp(){
    fetch("http://localhost:5500/addEmployee",{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(employee)
    })
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      console.log("data",data)
      getEmployees();
    })
  }
  return (
    <div className="App">
      <input type='text' placeholder='firstname' onKeyUp={(e)=>{setEmployee({...employee,firstname:e.target.value})}} /><br/>
      <input type='text' placeholder='lastname'  onKeyUp={(e)=>{setEmployee({...employee,lastname:e.target.value})}}  /><br/>
      <input type='text' placeholder='age'  onKeyUp={(e)=>{setEmployee({...employee,age:e.target.value})}} /><br/>
      <button onClick={addEmp}>AAdd Employee</button>
      <table border='2' cellSpacing='0'>
        {
          employees.map((employee)=>{
            return(
              <tr>
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>{employee.age}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  );
}

export default App;
