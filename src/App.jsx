import { useState } from 'react'
import './App.css'
import {Formulario} from "./Components/Formulario"
import {v4 as uuid} from "uuid"
import { ViewListUsers } from './Components/ViewListUsers'
function App() {
const [ListUsers, setListUsers] = useState([{id:uuid(), nombre:"Juan", apellido:"Carrillo"},{id:uuid(), nombre:"Jhom", apellido:"Carro"},{id:uuid(), nombre:"Jose", apellido:"Castro"},])
const [viewListUsers, setviewListUsers] = useState(false)
  return (
    <div className=' container flex flex-col items-center justify-center h-screen'>
    {
      !viewListUsers?(
        <Formulario setviewListUsers={setviewListUsers} setListUsers={setListUsers} ListUsers={ListUsers}/>
  
      ):(
        <ViewListUsers setviewListUsers={setviewListUsers} setListUsers={setListUsers} ListUsers={ListUsers}/>
      )
    }
      </div>   
  )
}

export default App
