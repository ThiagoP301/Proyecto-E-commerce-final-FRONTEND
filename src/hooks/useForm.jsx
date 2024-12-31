import { useState } from "react"

const useForm = (formInitial) => {

    const [formState, setFormState] = useState(formInitial)
    
    const handleChange = (evento) =>{

        const field_name = evento.target.name
        const field_value = evento.target.value
    
        setFormState( (prevFormState)=>{
          return {...prevFormState, [field_name] : field_value}
        })
      }

      return {
        formState,
        handleChange
      }
      
}
export default useForm