import React, { useContext, useEffect, useState } from 'react'
import "./IconUser.css"
import { useNavigate } from 'react-router-dom';


const IconUser = () => {
    const [userModal, setUserModal] = useState(false)
    const [user, setUser] = useState([])

    const navigate = useNavigate()

    const handleLogout = () => {
        sessionStorage.removeItem("access-token")
        sessionStorage.removeItem("user-name")
        setUserModal(null) 
        window.location.reload();
    }

    useEffect(() => {
    const logged = sessionStorage.getItem("user-name")
    console.log(logged)
    if(logged){
        setUser({nombre : logged})
    }

    }, [])

    console.log(user)

    const capitalizeFirstLetter = (str) => {
        if (!str) return ""
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
      }
  return (
    <div className='container-user'>
        <div className="user-icon">            
            <i  class="bi bi-person-circle" onClick={() => setUserModal(!userModal)} ></i>
        {
            userModal && (
                <div className='user-modal'>
                    <div className='user-info'>
                         <span>Bienvenido!</span>
                        <div>
                           
                            <span>{capitalizeFirstLetter(user.nombre)}</span>
                        </div>
                        <div>
                             <button onClick={handleLogout}>Cerrar Sesión</button>
                        </div>
                       
                    </div>
                </div>
            )
        }
        </div>
    </div>
  )
}

export default IconUser