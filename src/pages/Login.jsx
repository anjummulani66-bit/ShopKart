import React from 'react';
import {useForm} from 'react-hook-form'
import './login.css'
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState:{
            errors
        }
    } = useForm();

    const navigate = useNavigate();

    const formSubmit=()=>{
        alert('success!')
        reset();
        navigate('/')
    }

    
  return (
    <div>
        <form onSubmit={handleSubmit(formSubmit)}>
              <h3>Login page</h3>
             <input type="password" placeholder='enter email '
                {...register('email',{
                    required: 'email is mandatory',
                    pattern: {
                        value: /^[A-Za-z0-9]+@gmail\.com$/,
                        messages: "mail should be a valid gmail id"
                    }
                })}
            /> <br />
            {errors.email && <p>{errors.email.message}</p>}

            <input type="password"
                placeholder='enter password '
                
                {...register('password',{
                    required: 'password is mandatory',
                    pattern: {
                        value: 8,
                        messages: "password should be at least 8 characters long "
                    }
                })}
            /> <br />
            {errors.password && <p>{errors.password.message}</p>}  


            <button type="submit">signup </button>  

        </form>
    </div>
  );
}

export default Login;