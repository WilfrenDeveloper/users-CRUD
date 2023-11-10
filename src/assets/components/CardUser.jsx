

const CardUser = ({ user, deleteUsers, setinfoUpdate }) => {

    const handleDelete = () => {
        deleteUsers('/users', user.id)
    }

    const handleUpdate = () => {
        setinfoUpdate(user)
    }


  return (
    <article>
        <h2>{user.first_name} {user.last_name}</h2>
        <hr />
        <ul>
            <li><span>Email:</span> <span>{user.email}</span></li>
            <li><span>Birthday:</span> <span>{user.birthday}</span></li>
        </ul>
        <button onClick={handleDelete}><i class='bx bx-trash'></i></button>
        <button onClick={handleUpdate}><i class='bx bx-pencil'></i></button>
    </article>
  )
}

export default CardUser