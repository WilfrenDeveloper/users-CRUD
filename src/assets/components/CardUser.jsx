import './CardUser.css'

const CardUser = ({ user, deleteUsers, setinfoUpdate }) => {

    const handleDelete = () => {
        deleteUsers('/users', user.id)
    }

    const handleUpdate = () => {
        setinfoUpdate(user)
    }


  return (
    <article className="card__article">
        <h2 className="card__h2">{user.first_name} {user.last_name}</h2>
        <hr />
        <ul className="card__ul">
            <li className="card__li"><span className="card__span--label">Email:</span> <span className="card__span--value">{user.email}</span></li>
            <li className="card__li birthday">
                <span className="card__span--label">Birthday:</span> <span className="card__span--value"><i class='bx bx-gift'></i>  {user.birthday}</span>
            </li>
        </ul>
        <div className='card__div--button'>
        <button className="card__button button__delete" onClick={handleDelete}><i class='bx bx-trash'></i></button>
        <button className="card__button button__edit" onClick={handleUpdate}><i class='bx bx-pencil'></i></button>
        </div>
    </article>
  )
}

export default CardUser