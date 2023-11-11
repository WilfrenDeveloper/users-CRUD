import './CardUser.css'

const CardUser = ({ user, deleteUsers, setinfoUpdate, setButtonLabel }) => {

    const handleDelete = () => {
        deleteUsers('/users', user.id)
    }

    const handleUpdate = () => {
        setinfoUpdate(user)
        setButtonLabel({button:"Save Changes",  h2:"Edit User"})
        document.querySelector(".form__div").classList.add("form__div--active")
    }

    

  return (
    <article className="card__article">
        <h2 className="card__h2">{user.first_name} {user.last_name}</h2>
        <hr />
        <ul className="card__ul">
            <li className="card__li"><span className="card__span--label">Email:</span> <span className="card__span--value">{user.email}</span></li>
            <li className="card__li birthday">
                <span className="card__span--label">Birthday:</span> <span className="card__span--value"><i className='bx bx-gift'></i>  {user.birthday}</span>
            </li>
        </ul>
        <div className='card__div--button'>
        <button className="card__button button__delete" onClick={handleDelete}><i className='bx bx-trash'></i></button>
        <button className="card__button button__edit" onClick={handleUpdate}><i className='bx bx-pencil'></i></button>
        </div>
    </article>
  )
}

export default CardUser