import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteEmployee, getEmployees } from '../store/actions'
function Employee(props) {
    console.log(props)
    var [employees,setEmployees] = React.useState([])
    React.useEffect(()=>{
        props.dispatch(getEmployees())
    },[])
    function delEmployee(id){
        props.dispatch(deleteEmployee(id))
    }
    React.useEffect(()=>{
        setEmployees(props.empReducer.employees)
    },[props.empReducer.employees])
  return (
    <div className='container'>
        <div className='d-flex justify-content-between'>
            <h1 id="welcometext">
                My Employee 
            </h1>
            <Link to="/addEmployee" className='btn btn-success'>+Add Employee</Link>
        </div>
       
        <table border='2' cellSpacing='0' className='table'>
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
                  <button onClick={()=>{delEmployee(employee._id)}}>delete</button>
                  <Link to="/editEmployee" className='btn btn-warning' state={{employee}}>Edit</Link>
                </td>
              </tr>
              </tbody>
            )
          })
        }
      </table>
    </div>
  )
}

export default connect(store=>store)(Employee)