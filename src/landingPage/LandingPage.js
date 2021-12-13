import React from 'react'
import './LandingPage.css'


export const LandingPage = () => {
    return (
        <div className='LandingPage-Div'>
            <div id='img'>
                <div className='menu-landingPage'>
                    <ul>
                        <li><a href='#'>TIME</a></li>
                        <li><a href='#'>Información</a></li>
                        <li><a href='#'>Seguridad</a></li>
                        <li><a href='#'>Ayuda</a></li>
                        <li><a href='#'>Descargar</a></li>
                    <button href="#" className= 'button-iniciaSesion'>
                       <span id='span1'></span>
                       <span id='span2'></span>
                       <span id='span3'></span>
                       <span id='span4'></span>
                       Inicia sesión
                    </button>
                    </ul>
              
                </div>
           

            
                <div className='texto-landinPage'>
                    <h1 >BIENVENIDOS A TIME</h1>
                    <button href="#" className= 'button-iniciaSesion'>
                    <span id='span1'></span>
                    <span id='span2'></span>
                    <span id='span3'></span>
                    <span id='span4'></span>
                    CREA UNA CUENTA
                    </button> 
               </div>
            
                    <p className='texto-landinPage'>Time única
                     y exclusivamente para personas auténticas,
                    experimentaras la maravilla de conocer personas y  
                    saber exactamente lo que quieres hacer, cuando como y donde. 
                        <p>¿A QUE SUENA GENIAL?</p>
                    </p>
            
            </div>
        </div>
    )
};
