import React, { useState } from "react";
import Button from './Button'

const SignupScreen = () => {
    const [loginCred, setloginCred] = useState({ username: '', email: '', password: '' })

    const handleChange = (e) => {
        setloginCred({ ...loginCred, [e.target.name]: e.target.value })
    }

    return (
        <div className='end-screen'>
            <div className='end-content'>
                <div className='name-form'>
                    <form onSubmit=''>
                        <label htmlFor='username'>
                            Name
                        <input
                                placeholder='username'
                                value={loginCred.username}
                                name='username'
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor='email'>
                            Email
                        <input
                                type="email"
                                placeholder='username'
                                value={loginCred.email}
                                name='username'
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor='password'>
                            Password
                        <input
                                type="password"
                                placeholder='password'
                                value={loginCred.password}
                                name='password'
                                onChange={handleChange}
                            />
                        </label>
                        <Button type='submit' buttonText={'SUBMIT'} pathName={''} />
                    </form>
                </div></div></div>
    )
}

export default SignupScreen
