import React, { useState } from 'react'
import Swal from "sweetalert2"
export const ViewListUsers = ({setListUsers,ListUsers, setviewListUsers}) => {
    const [isEditing, setisEditing] = useState(false)
    const [editUser, setEditUser] = useState({id:"", nombre: "", apellido: "" });
    const handleDelete = (e)=>{
        const id = e.target.closest('tr').id;
        const userDeleted = ListUsers.filter(user=>user.id!==id)
        setListUsers(userDeleted)
        Swal.fire({
          title: "success",
          text: "El usuario ha sido eliminado correctamente",
          icon: "success"
        });
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditUser({
          ...editUser,
          [name]: value
        });
    };
    const handleSubmit = (e)=>{
        e.preventDefault()
        const foundUser = ListUsers.find(user=>user.nombre===editUser.nombre&&user.apellido===editUser.apellido)
        if(foundUser){
          Swal.fire({
            title: "Error",
            text: "El usuario ya se encuentra registrado, intente con otro nombre o apellido",
            icon: "error"
          });
        }else{
            const newListUsers= ListUsers.map(user=>user.id===editUser.id? editUser : user)
            setListUsers(newListUsers)
            Swal.fire({
              title: "Success",
              text: "El usuario ha sido editado correctamente",
              icon: "success"
            });
        }
        setisEditing(!isEditing)
      
    };
    const handleEdit =(e)=>{
        const id = e.target.closest('tr').id;
        const user = ListUsers.find(user=>user.id===id)
        setEditUser(user)
        setisEditing(!isEditing)
    }
  return (
    <>
    {
        !isEditing?(
            <>
            <h1 className=' font-bold text-2xl text-blue-500 pb-3'>Listado de Usuarios:</h1>
            <table className=" text-center w-3/5 border-2 border-blue-500 ">
              <thead>
                <tr className='border-2 border-blue-500'>
                  <th className="">ID</th>
                  <th className="">Nombre</th>
                  <th className="">Apellido</th>
                  <th className="">Actions</th>
                </tr>
              </thead>
              <tbody>
                {ListUsers.map(({id,nombre,apellido}) => (
                  <tr id={id} key={id} className='border-2 border-blue-500'>
                    <td className="">{id}</td>
                    <td className="">{nombre}</td>
                    <td className="">{apellido}</td>
                    <td className=' flex items-center justify-center gap-2 h-10'>
                    <img width="24" onClick={handleDelete} height="24" src="https://img.icons8.com/ios/24/delete--v1.png" alt="delete--v1"/>
                    <img width="24" onClick={handleEdit} height="24" src="https://img.icons8.com/ios/24/edit--v1.png" alt="edit--v1"/>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={()=>setviewListUsers(false)} className=' font-bold border-2 border-blue-500 rounded-md w-44 h-8 mt-4 text-blue-500 hover:bg-blue-500 hover:text-white transition-all'>Guardar un usuario</button>
            </>
        ):(
          <form onSubmit={handleSubmit} className=" flex gap-3 flex-col border-2 border-blue-500 rounded-md w-80 p-12">
          <h1 className=" font-bold text-2xl text-blue-500">Agregar Usuario:</h1>
            <div className=' flex flex-col gap-1'>
              <label className=' text-blue-500 font-medium'>Nombre:</label>
              <input type="text" name="nombre" value={editUser.nombre} onChange={handleInputChange} className='border-2 rounded-md border-blue-500  focus:outline-blue-800' required />
            </div>
            <div className=' flex flex-col gap-1'>
              <label className='text-blue-500 font-medium'>Apellido:</label>
              <input type="text" name="apellido" value={editUser.apellido} onChange={handleInputChange} className='border-2 rounded-md border-blue-500  focus:outline-blue-800' required />
            </div>
            <div className=' flex gap-1 text-base text-blue-500 font-medium pt-2'>
          <button type="submit" className='border-2 border-blue-500 rounded-md w-2/4 h-8 text-blue-500 hover:bg-blue-500 hover:text-white transition-all '>Guardar</button>
          <button onClick={()=>setisEditing(!isEditing)} className='border-2 border-blue-500 h-8 rounded-md w-2/4 bg-blue-500 text-white hover:bg-white hover:text-blue-500 transition-all'>Cancelar</button>
      </div>
          </form>
        )
    }
  
  </>
  )
}
