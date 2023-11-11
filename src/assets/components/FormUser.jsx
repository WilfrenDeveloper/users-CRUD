import { useEffect } from "react"
import { useForm } from "react-hook-form"
import './FormUser.css'

const FormUser = ({ createUsers, infoUpdate, setinfoUpdate, updateUsers, buttonLabel, setButtonLabel }) => {

    const { handleSubmit, register, reset } = useForm()

    useEffect(() => {
        reset(infoUpdate)
    }, [infoUpdate])


    const submit = data => {

        if (infoUpdate) {
            updateUsers('/users', infoUpdate.id, data)
            setinfoUpdate()
            setButtonLabel({ button: "Add New User", h2: "New User" })
        } else {
            createUsers('/users', data)
        }

        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })

        document.querySelector('.form__div').classList.remove("form__div--active")
    }

    const handleExit = () => {
        document.querySelector('.form__div').classList.remove("form__div--active")
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
        setinfoUpdate()
    }

    return (
        <div className="form__div">
            <form className="form__form" onSubmit={handleSubmit(submit)}>
                <h2 className="form__h2">{buttonLabel.h2}</h2>
                <div className="form__x" onClick={handleExit}>
                    <i className='bx bx-x'></i>
                </div>
                <label className="form__label">
                    <span className="form__span">First name</span>
                    <input className="form__input" {...register('first_name')} type="text" />
                </label>
                <label className="form__label">
                    <span className="form__span">Last name</span>
                    <input className="form__input" {...register('last_name')} type="text" />
                </label>
                <label className="form__label">
                    <span className="form__span">Email</span>
                    <input className="form__input" {...register('email')} type="email" />
                </label>
                <label className="form__label">
                    <span className="form__span">Password</span>
                    <input className="form__input" {...register('password')} type="password" />
                </label>
                <label className="form__label">
                    <span className="form__span">Birthday</span>
                    <input className="form__input input__date" {...register('birthday')} type="date" />
                </label>
                <button className="form__button">{buttonLabel.button}</button>
            </form>
        </div>
    )
}

export default FormUser