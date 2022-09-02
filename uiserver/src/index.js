import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Home from './pages/Home';
import Employee from './pages/Employee';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}> 
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/employee" element={<Employee></Employee>}></Route>
              <Route path="/addEmployee" element={<AddEmployee></AddEmployee>}></Route>
              <Route path="/editEmployee" element={<EditEmployee></EditEmployee>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
