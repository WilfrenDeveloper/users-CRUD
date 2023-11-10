import { useEffect, useState } from "react"
import useCrud from "./assets/hooks/useCrud"
import FormUser from "./assets/components/FormUser"
import './App.css'
import CardUser from "./assets/components/CardUser"


function App() {

  const [infoUpdate, setinfoUpdate] = useState()

  const url = 'https://users-crud.academlo.tech'
  const [ users, getUsers, createUsers, deleteUsers, updateUsers ] = useCrud(url)

  useEffect(() => {
    getUsers('/users')
  }, [])


  return (
    <div>
      <h1>Users</h1>
      <FormUser 
      createUsers = {createUsers}
      infoUpdate = {infoUpdate}
      updateUsers = {updateUsers}
      />
      {
        users?.map( user =>(
          <CardUser
            key = {user.id}
            user = {user}
            deleteUsers = {deleteUsers}
            setinfoUpdate = {setinfoUpdate}
          />
        ))
      }
    </div>
  )
}

export default App
