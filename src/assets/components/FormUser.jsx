import { useEffect } from "react"
import { useForm } from "react-hook-form"

const FormUser = ({ createUsers, infoUpdate, updateUsers }) => {

    const { handleSubmit, register, reset } = useForm ()

    useEffect(() => {
      reset(infoUpdate)
    }, [infoUpdate])
    

    const submit = data => {

        if (infoUpdate){
            updateUsers('/users', infoUpdate.id, data)
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
    }

  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <label>
                Email
                <input {...register('email')} type="email" />
            </label>
            <label>
                Password
                <input {...register('password')} type="password" />
            </label>
            <label>
                First name
                <input {...register('first_name')} type="text" />
            </label>
            <label>
                Last name
                <input {...register('last_name')} type="text" />
            </label>
            <label>
                Birthday
                <input {...register('birthday')} type="date" />
            </label>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FormUser