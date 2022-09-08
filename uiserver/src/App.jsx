import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import store from './store/store';
import {Provider} from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <div data-testid='maindiv'>
        <Header></Header>
        <Outlet></Outlet>      
      </div>
    </Provider>
  );
}

export default App;
