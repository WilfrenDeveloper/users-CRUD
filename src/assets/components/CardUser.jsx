import './CardUser.css'

const CardUser = ({ user, deleteUsers, setinfoUpdate, setButtonLabel }) => {

    const handleUpdate = () => {
        setinfoUpdate(user)
        setButtonLabel({button:"Save Changes",  h2:"Edit User"})
        document.querySelector(".form__div").classList.add("form__div--active")
    }
    
    const handleDelete = () => {
        deleteUsers('/users', user.id)
    }

    const handleConfirm = () =>{
        document.querySelector(`.card__${user.id}`).classList.add("card__confirm")
    }

    const handleCancel = () => {
        document.querySelector(`.card__${user.id}`).classList.remove("card__confirm")
    }

    //document.querySelector(".card__div--confirm").classList.remove("card__confirm")//

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
            <button className="card__button button__delete" onClick={handleConfirm}><i className='bx bx-trash'></i></button>
            <button className="card__button button__edit" onClick={handleUpdate}><i className='bx bx-pencil'></i></button>
        </div>
        <div className={`card__div--confirm card__${user.id}`}>
            <div>
                <h3 className='card__h3'>Are you sure on delete the user <span className='card__h3--span'>{user.first_name} {user.last_name}</span></h3>
                <button className='button__acept' onClick={handleDelete}>Acept</button>
                <button className='button__cancel' onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    </article>
  )
}

export default CardUser