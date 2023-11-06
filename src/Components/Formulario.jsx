import React, { useState } from 'react';
import {v4 as uuid} from "uuid"

export const Formulario = ({setListUsers, ListUsers, setviewListUsers}) => {
    const [newUser, setNewUser] = useState({id:"", nombre: "", apellido: "" });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewUser({
          ...newUser,
          id:uuid(),
          [name]: value.toLowerCase().trim()
        });
      };
      const handleSubmit = (e)=>{
        e.preventDefault()
        const foundUser = ListUsers.find(user=>user.nombre===newUser.nombre&&user.apellido===newUser.apellido)
        if(foundUser){
            console.log("Usuario ya existe")
        }else{
            setListUsers([...ListUsers, newUser])
            setNewUser({id:"", nombre: "", apellido: "" })
        }
      
      }
  return (
    <>
      
    <form onSubmit={handleSubmit} className=" flex gap-3 flex-col border-2 border-blue-500 rounded-md w-80 p-12">
    <h1 className=" font-bold text-2xl text-blue-500">Agregar Usuario:</h1>
      <div className=' flex flex-col gap-1'>
        <label className=' text-blue-500 font-medium'>Nombre:</label>
        <input type="text" name="nombre" value={newUser.nombre} onChange={handleInputChange} className='border-2 rounded-md border-blue-500' required />
      </div>
      <div className=' flex flex-col gap-1'>
        <label className='text-blue-500 font-medium'>Apellido:</label>
        <input type="text" name="apellido" value={newUser.apellido} onChange={handleInputChange} className='border-2 rounded-md border-blue-500' required />
      </div>
      <div className=' flex gap-1 text-base text-blue-500 font-medium pt-2'>
          <button type="submit" className='border-2 border-blue-500 rounded-md w-2/4 h-8 text-blue-500 '>Guardar</button>
          <button onClick={()=>setviewListUsers(true)} className='border-2 border-blue-500 h-8 rounded-md w-2/4 bg-blue-500 text-white'>Ver usuarios</button>
      </div>
    </form>

  </>
  )
}
