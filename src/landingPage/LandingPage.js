import React from 'react'
import './LandingPage.css'

export const LandingPage = () => {
    return (
        <div className='LandingPage-Div'>
            <div>
            <button>Login</button>
            <button>Register</button> 
            </div>
            
            <h1>BIENVENIDOS A TIME</h1>
            <p>Esta es una red social unica
                 y exclusivamente para personas autenticas,
                 aqui experimentaras la maravilla de conocer a personas 
                 conociendo exactamente lo que quieres hacer.</p>
            
            <img className='LandingPage-img' src='./image/04-landing.jpg' />
        </div>
    )
};
