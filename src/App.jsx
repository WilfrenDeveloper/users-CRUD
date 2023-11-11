import { useEffect, useState } from "react"
import useCrud from "./assets/hooks/useCrud"
import FormUser from "./assets/components/FormUser"
import CardUser from "./assets/components/CardUser"
import './App.css'


function App() {

  const [infoUpdate, setinfoUpdate] = useState()
  const [buttonLabel, setButtonLabel] = useState({ button: "Add New User", h2: "New User" })

  const url = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUsers, deleteUsers, updateUsers] = useCrud(url)

  useEffect(() => {
    getUsers('/users')
  }, [])

  const handleClick = () => {
    document.querySelector(".form__div").classList.add("form__div--active")
  }


  return (
    <main className="app__main">
      <h1 className="app__h1">Users</h1>
      <button className="app__button" onClick={handleClick}>+ Create new User</button>
      <FormUser
        createUsers={createUsers}
        infoUpdate={infoUpdate}
        setinfoUpdate={setinfoUpdate}
        updateUsers={updateUsers}
        buttonLabel={buttonLabel}
        setButtonLabel={setButtonLabel}
      />
      <section className="app__section">
        {
          users?.map(user => (
            <CardUser
              key={user.id}
              user={user}
              deleteUsers={deleteUsers}
              setinfoUpdate={setinfoUpdate}
              setButtonLabel={setButtonLabel}
            />
          ))
        }
      </section>
    </main>
  )
}

export default App
