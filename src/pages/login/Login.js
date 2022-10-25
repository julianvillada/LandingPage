import React from 'react'
import '../login/Login.css'


export const Login = () => {
    return (
       <div className='cover'>
        <h1>Login</h1>
        <input type="text" placeholder='username'/>
        <input type="password" placeholder='password'/>
        <input type="password" placeholder='password'/>
       </div>
    )
}
