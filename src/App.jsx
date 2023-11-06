import { useState } from 'react'
import './App.css'
import {Formulario} from "./Components/Formulario"
import {v4 as uuid} from "uuid"
import { ViewListUsers } from './Components/ViewListUsers'
function App() {
const [ListUsers, setListUsers] = useState([{id:uuid(), nombre:"juan", apellido:"carrillo"},{id:uuid(), nombre:"jhon", apellido:"carro"},{id:uuid(), nombre:"jose", apellido:"castro"},])
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
