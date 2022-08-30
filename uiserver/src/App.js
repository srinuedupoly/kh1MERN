import logo from './logo.svg';
import './App.css';
import React from 'react'
function App() {
  var [employee,setEmployee]=React.useState({
    firstname:'',
    lastname:'',
    age:''
  })
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
    })
  }
  return (
    <div className="App">
      <input type='text' placeholder='firstname' onKeyUp={(e)=>{setEmployee({...employee,firstname:e.target.value})}} /><br/>
      <input type='text' placeholder='lastname'  onKeyUp={(e)=>{setEmployee({...employee,lastname:e.target.value})}}  /><br/>
      <input type='text' placeholder='age'  onKeyUp={(e)=>{setEmployee({...employee,age:e.target.value})}} /><br/>
      <button onClick={addEmp}>Add Employee</button>
    </div>
  );
}

export default App;
