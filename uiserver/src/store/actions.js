const empUrl = "http://localhost:5500"
export function getEmployees(){
    return (dispatch)=>{
        fetch(empUrl+"/employees")
        .then(res=>res.json())
        .then(data=>{
            dispatch({type:"INIT_EMP",payload:data})
        })
        .catch((err)=>{console.log(err)})
    }
}

export function deleteEmployee(id){
    return (dispatch)=>{
        fetch(empUrl+"/deleteEmployee/"+id,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            dispatch(getEmployees())
        })
        .catch(err=>console.log(err))
    }
}