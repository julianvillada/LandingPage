import React, { useState } from 'react';
import { Modal } from '../../components/Modal/Modal';

import '../landingPage/LandingPage.css';
import { Login } from '../login/Login';
import { Register } from '../register/Register';


export const LandingPage = () => {

  //Gestión modal registro
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const handleOpenRegister = () => setOpenModalRegister(!openModalRegister);

  const handleCloseRegister = (e) => {
    const { className: el } = e.target;
    if (el !== "backdrop" && el !== "fas fa-times" && el !== "GoToLogin-link")
    return;
    setOpenModalRegister(!openModalRegister);
    };


  //Gestión modal login
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const handleOpenLogin = () => setOpenModalLogin(!openModalLogin);
  const handleCloseLogin = (e) => {
  const { className: el } = e.target;
    if (
      el !== "backdrop" &&
      el !== "fas fa-times" &&
      el !== "GoToRegister-link"
    )
      return;
    setOpenModalLogin(!openModalLogin);
  };



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
            <button className='button-iniciaSesion'onClick={handleOpenLogin} > Inicia sesión </button>
          </ul>
        </div>



        <div className='texto-landinPage'>
          <h1 >BIENVENIDOS A TIME</h1>
          <button className='button-register' onClick={handleOpenRegister} > Crea una cuenta </button>
        </div>

        <div>
        <p className='texto-landinPage'>Time única
          y exclusivamente para personas auténticas,
          experimentaras la maravilla de conocer personas y
          saber exactamente lo que quieres hacer, cuando como y donde.
          <p>¿A QUE SUENA GENIAL?</p>
        </p>        
        </div>
        

        {openModalRegister && (
          <Modal handleClose={handleCloseRegister}>
            <Register
              handleCloseRegister={handleCloseRegister}
              openLogin={handleOpenLogin}
            />
          </Modal>
        )}

        {openModalLogin && (
          <Modal handleClose={handleCloseLogin}>
            <Login
              handleCloseLogin={handleCloseLogin}
              openRegister={handleOpenRegister}
            />
          </Modal>
        )}

      </div>
    </div>
  )
};
