import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import LoginPage from './components/LoginPage';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const show =() =>{
        navigate('/')
    }
  return (
  
      <div className='loginpagemain'>
        <Form className='loginpagemain1'>
          <h2>Log in to Your Account</h2>
          <input type="email" placeholder='Enter Your Username'/>
          <input type="password" placeholder='Enter Your Password'/>
          <p>Forgot Password?</p>
          
          <button type="submit" onClick={show}>Login</button>

          <h6>Need an Account? <span> Sign Up</span></h6>
        </Form>
    </div>

  )
}

export default Home