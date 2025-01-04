import React, { useState } from 'react'
import "./LoginScreen.css"
import useForm from '../hooks/useForm'
import {useNavigate } from 'react-router-dom'
import ENVIROMENT from '../config/enviroment'


const RegisterScreen = () => {

  const navigate = useNavigate()

const {formState, handleChange} = useForm({
  email : "",
  contraseña : "",
  nombre : ""
})

const [errorState, setErrorState] =  useState({
  email : [],
  contraseña : [],
  nombre : [],
})

    const handleRegister =  async (event) =>{
        event.preventDefault()
        console.log("formulario de registro enviado")
    
      console.log(formState)

      const responseHTTP = await fetch(ENVIROMENT.URL_VITE + "/api/auth/register", {
        method : "POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(formState)
    
      })
    
    
    const data  = await responseHTTP.json()
    console.log("esta es la data", data)

    if (!data.ok) {
      const errors = data.payload?.registerState || {};

      setErrorState((prevState) => {
        const updatedState ={
          ...prevState,
          email: errors.email?.error || [],  
          contraseña: errors.contraseña?.error || [],  
          nombre: errors.nombre?.error || []}

    console.log('Error State actualizado:', updatedState);  
      return updatedState;
    });
    } else {
      navigate("/register/validate-email");
    }
  }


  
  
  return (
    <div className='container-view-form'>
    <div className='container-form-register'>
    <h1>Registrarse</h1>
    <form className='form' onSubmit={handleRegister}>
      
      <div className='register-login-form'>
        <label htmlFor="nombre">Ingrese su nombre de usuario</label>
        <input className='register-login-input' type="text" name='nombre' id='nombre' placeholder='Nombre de Usuario' onChange={handleChange} value={formState.nombre}/>
        {errorState.nombre.length > 0 && (
          <div className='validacion-form'>
            {errorState.nombre.map((error, index) => (
              <span style={{color : "red"}} key={index}>{error}</span>
            ))}
          </div>
        )}
      </div>
    
      <div className='register-login-form'>
        <label htmlFor="email">Ingrese su correo electrónico</label>
        <input className='register-login-input' type="email" name="email" id="email" placeholder="Correo electrónico" onChange={handleChange} value={formState.email}/>
          {errorState.email.length > 0 && (
          <div className='validacion-form'>
            {errorState.email.map((error, index) => (
              <span style={{color : "red"}} key={index}>{error}</span>
            ))}
          </div>
        )}
      </div>
      <div className='register-login-form'>
        <label htmlFor="contraseña">Ingrese su contraseña</label>
        <input className='register-login-input' type="password" name="contraseña" id="contraseña" placeholder="Contraseña" onChange={handleChange} value={formState.contraseña} />
        {errorState.contraseña.length > 0 && (
          <div className='validacion-form'>
            {errorState.contraseña.map((error, index) => (
              <span key={index}>{error}</span>
            ))}
          </div>
        )}
      </div>
      <button type="submit">Registrarme</button>
    </form>
  </div>
  </div>
  )
}

export default RegisterScreen
