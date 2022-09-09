import React from 'react'

export default function Login() {
  const [user,setUser]=React.useState({
    username:'',
    password:''
  })
  const [message, setMessage] = React.useState('')
  function login(){
    fetch("http://localhost:5500/login",{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        if(data.message==='success')
        setMessage("Login success")
        else
        setMessage("Login Failed")
        console.log("data",data)
    })
    .catch((err)=>{
    })
  
  }
  return (
    <div>
      <h1 id='logintext'>Login</h1>
      <input type="text" id="username" onChange={(e)=>{setUser({...user,username:e.target.value})}}/><br/>
      <input type="text" id="password" onChange={(e)=>{setUser({...user,password:e.target.value})}}/><br/>
      <button type='button' data-testid='login' onClick={login} id="submit">Login</button><br/>
      <h2 id="message">{message}</h2>
    </div>
  )
}
