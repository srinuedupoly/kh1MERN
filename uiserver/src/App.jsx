import logo from './logo.svg';
import './App.css';
import React from 'react'
function App() {
  var [employee,setEmployee]=React.useState({
    firstname:'',
    lastname:'',
    age:''
  })
  var fnRef = React.createRef();
  var lnRef = React.createRef();
  var ageRef = React.createRef();

  var [employees,setEmployees] = React.useState([])
  React.useEffect(()=>{
   getEmployees()
  },[])
  function getEmployees(){
    fetch("http://localhost:5500/employees")
    .then(res=>res.json())
    .then(data=>setEmployees(data))
    .catch((err)=>{console.log(err)})
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
    .catch(()=>{})
  }
  function deleteEmployee(id){
    fetch("http://localhost:5500/deleteEmployee/"+id,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>getEmployees())
    .catch(err=>console.log(err))
  }
  function editEmployee(emp){
    fnRef.current.value=emp.firstname;
    lnRef.current.value=emp.lastname;
    ageRef.current.value=emp.age
    setEmployee(emp)
  }
  function updateEmp(){
    fetch("http://localhost:5500/updateEmployee",{
      method:'PUT',
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
    .catch(()=>{})
  }
  return (
    <div className="App">
      <input  type='text' 
              placeholder='firstname' 
              onKeyUp={(e)=>{setEmployee({...employee,firstname:e.target.value})}} 
              ref={fnRef}
      /><br/>
      <input  type='text' 
              placeholder='lastname'  
              onKeyUp={(e)=>{setEmployee({...employee,lastname:e.target.value})}} 
              ref={lnRef}
      /><br/>
      <input  type='text' 
              placeholder='age'  
              onKeyUp={(e)=>{setEmployee({...employee,age:e.target.value})}} 
              ref={ageRef}
      /><br/>
      <button onClick={addEmp}>Add Employee</button>
      <button onClick={updateEmp}>Update Employee</button>
      <table border='2' cellSpacing='0'>
            <thead>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Operations</th>
            </thead>
        {
          employees.map((employee)=>{
            
            return(
              <tbody>
              <tr>
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>{employee.age}</td>
                <td>
                  <button onClick={()=>{deleteEmployee(employee._id)}}>delete</button>
                  <button onClick={()=>{editEmployee(employee)}}>Edit</button>
                </td>
              </tr>
              </tbody>
            )
          })
        }
      </table>
    </div>
  );
}

export default App;
// function without name// callbacks
// C-create-POST
// R-read-GET
// U-update-PUT
// D-delete-DELETE 