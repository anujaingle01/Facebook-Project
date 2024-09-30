import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <div className='Login'>

        <div className='facebook'>
            <div className='facebooktext'>
                facebook
            </div>
            <div className='title'>
                Application used for <br/>
                connecting friends and finding friends
            </div>
        </div>

        <div className='LoginContainer'>

            <div className='Logindetails'>
                <input type='text' placeholder='Email address or Phone number' name='email'/>
                <br/>
                <input type='password' placeholder='Password' name='password' maxLength={10}/>
                <br/>
                <Link to="/home" className='btn'><strong>Login</strong></Link>
            </div>

            <div className='forget'>
                <a href='forget'>Forgotten Password  ?</a>
                <br/>
                <Link to="/signup" className='btns' style={{color:'white'}}>
                Create new Account    
                </Link>
            </div>

        </div>

    </div>
    </>
  )
}

export default Login
