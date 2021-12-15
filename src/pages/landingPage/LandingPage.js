import React from 'react';
import '../landingPage/LandingPage.css';


export const LandingPage = () => {
    return (
        <div className='LandingPage-Div'>
            <div id='img'>
                <div className='menu-landingPage'>
                    <ul className='lista-landingPage'>
                        <li><a>TIME</a></li>
                        <li><a>Información</a></li>
                        <li><a>Seguridad</a></li>
                        <li><a>Ayuda</a></li>
                        <li><a>Descargar</a></li>
                    <button className= 'button-iniciaSesion'>
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
                    <button className= 'button-iniciaSesion'>
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
