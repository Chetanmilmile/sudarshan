import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './LoginPage.css';

const LoginPage = () => {

  return (
    
    <div className='loginpagemain'>
        <Form className='loginpagemain1'>
          <h2>Log in to Your Account</h2>
          <input type="email" placeholder='Enter Your Username'/>
          <input type="password" placeholder='Enter Your Password'/>
          <p>Forgot Password?</p>
          <Link to='/dashboard'> 
          <button type="submit">Login</button></Link>

          <h6>Need an Account? <span> Sign Up</span></h6>
        </Form>
    </div>
  )
}

export default LoginPage