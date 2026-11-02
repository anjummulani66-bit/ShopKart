import React from 'react';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const Register= () => {

    const navigate = useNavigate();

    
    const {
        register,
        handleSubmit,
        reset,
        formState:{
            errors
        }
    } = useForm();

    const formSubmit =()=>{
        alert('success!')
        reset()
        navigate('/Login');
    }

    
  return (
    <div>
        <form onSubmit={handleSubmit(formSubmit)}>
            <h1>Register Page</h1>
            <input type="text"
                placeholder='Enter Name '
                autoFocus
                {...register('name',{
                    required: 'Name is mandatory'
                })}
            /> <br />
            {errors.Name && <p>{errors.Name.message}</p>}

            <input type="number"
                placeholder='Enter Age '
                
                {...register('age',{
                    required: 'Age is mandatory',
                    min : {
                        value: 18,
                        messages: "Age should be >=18"
                    }
                })}
            /> <br />
            {errors.Age && <p>{errors.Age.message}</p>}

            <input type="password"
                placeholder='Enter Email '
                
                {...register('Email',{
                    required: 'Email is mandatory',
                    pattern: {
                        value: /^[A-Za-z0-9]+@gmail\.com$/,
                        messages: "mail should be a valid gmail id"
                    }
                })}
            /> <br />
            {errors.Email && <p>{errors.Email.message}</p>}

            <input type="password"
                placeholder='Enter assword '
                
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

export default Register;