import { useState } from 'react'
import React from 'react'
import Macwhite from './assets/mac-login-white.png'
import Image from './assets/image-login-2.png'
import './styles/register.css';
import { useForm } from 'react-hook-form'
import Line from './assets/line-white.png'

function Register() {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='container-register'>
            <div className='left-part-register'>
                <img src={Macwhite} alt="Mi imagen" className='mac-image-register' />

                <div className="text-register">
                    <h1 className='h1-text-register'>REGISTRATE</h1>
                    <h2 className='h2-text-register'>"Emprende tu viaje a través del clima con WeatherSense"</h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-register">
                        <input type="email"
                            {...register('email', {
                                required: true,
                                maxLength: 10
                            })} placeholder='Email' className='reg input-email-register' />

                        <input type="password"
                            {...register('pwd', {
                                required: true,
                                maxLength: 10
                            })} placeholder='Contraseña' className='reg input-pwd-register' />

                        <img src={Line} alt="" className='line' />

                        <div className="btn">
                            <input type='submit' value='Registrate' className='btn-register'></input>
                        </div>
                    </div>
                </form>

                <img src={Line} alt="" className='line2' />

                <div className="text-login-register">
                    <h2 className='txt-login'>¿Ya tienes una cuenta?</h2>
                    <a className='register-login' href='/'>INICIA SESION</a>
                </div>
            </div>
            <img src={Image} alt="" className='image-login-main' />
        </div>
    )
}

export default Register
