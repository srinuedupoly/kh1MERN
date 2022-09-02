import React from 'react'
import { useLocation } from 'react-router-dom'

function EditEmployee() {
    
    var empDetails=useLocation()
    console.log(empDetails)
    const [employee,setEmployee] = React.useState({
        firstname:empDetails.state.employee.firstname,
        lastname:empDetails.state.employee.lastname,
        age:empDetails.state.employee.age,
        _id:empDetails.state.employee._id
    })
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
        })
          .catch(()=>{})
    }
  return (
    <div className='container'>
        <h1>EditEmployee</h1>
        <input  type='text' 
              placeholder='firstname' 
              onChange={(e)=>{setEmployee({...employee,firstname:e.target.value})}} 
              value={employee.firstname}
        /><br/>
        <input  type='text' 
                placeholder='lastname'  
                onChange={(e)=>{setEmployee({...employee,lastname:e.target.value})}} 
                value={employee.lastname}

        /><br/>
        <input  type='text' 
                placeholder='age'  
                onChange={(e)=>{setEmployee({...employee,age:e.target.value})}} 
                value={employee.age}
        /><br/>
        <button onClick={()=>{updateEmp()}}>Update Employee</button>
    </div>
  )
}

export default EditEmployee