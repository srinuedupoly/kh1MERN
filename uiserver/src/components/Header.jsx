import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
        <nav class="navbar navbar-expand-sm bg-danger navbar-dark">
            <div class="container">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <Link to="/" class="nav-link" id="home">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/employee" class="nav-link" id='employee'>Employee</Link>
                </li>
                
                <li class="nav-item">
                    <Link to="/login" class="nav-link" id='login'>Login</Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
            </div>
        </nav>
  )
}

export default Header