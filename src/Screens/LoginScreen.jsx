import React, { useState } from 'react'
import "./LoginScreen.css"
import useForm from '../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import ENVIROMENT from '../config/enviroment'

const LoginScreen = () => {

	const navigate  = useNavigate()


  const { formState, handleChange } = useForm({
		email: '',
		contraseña: ''
	})

  const [errorState, setErrorState] =  useState({
    general: [],
  })


	const handleLogin = async (e) => {
		e.preventDefault()
		const responseHTTP = await fetch( ENVIROMENT.URL_VITE + "/api/auth/login",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            })


        console.log(responseHTTP)
        const data = await responseHTTP.json()

        console.log("Respuesta del servidor:", data);
        console.log(data.message)

        if (!data.ok) {
         setErrorState((prevState) => {
            const updatedState ={
              ...prevState,
              general: Array.isArray(data.message) ? data.message : [data.message],  
             }
    
        console.log('Error State actualizado:', updatedState);  
          return updatedState;
        })
        }
        
		if(data.ok){
		  sessionStorage.setItem('access-token', data.payload.accessToken)
      sessionStorage.setItem('user-name', data.payload.userInfo.nombre)
			navigate('/')
      window.location.reload();
  }
		else{
      
		}
        console.log(data)
	}
      
      return (
        <div className='container-view-form'>
        <div className='container-form'>
          <h1>Iniciar sesión</h1>
          <form className='form' onSubmit={handleLogin}>
          {errorState.general.length > 0 && (
          <div className='validacion-form-login'>
            {errorState.general.map((error, index) => (
              <span style={{color : "red"}} key={index}>{error}</span>
            ))}
          </div>
             )}
            <div className='register-login-form'>
              <label htmlFor="email">Ingrese su correo electrónico</label>
              <input className='register-login-input' type="email" name="email" id="email" placeholder="Correo electrónico" onChange={handleChange} value={formState.email}/>
            </div>
            <div className='register-login-form'>
              <label htmlFor="password">Ingrese su contraseña</label>
              <input className='register-login-input' type="password" name="contraseña" id="contraseña" placeholder="Contraseña" onChange={handleChange} value={formState.contraseña} />
            </div>
            <button type="submit">Iniciar sesión</button>
          </form>
        </div>
        </div>
      )
      
}


export default LoginScreen
