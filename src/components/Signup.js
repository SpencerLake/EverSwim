import React, { useState, useRef } from 'react'
import { useAuth } from './contexts/AuthContext'

export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passConfirmRef = useRef()
    const { signup } = useAuth()
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to sign in')
        }

        setLoading(false)
    }

    return (
        <div>
            <div className='card'>
                <h2 className='card-title'>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input type='email' ref={emailRef} placeholder='Email' required></input>
                    <input type='password' ref={passwordRef} placeholder='Password - 6 characters minimum' required></input>
                    <input type='password-confirm' ref={passConfirmRef} placeholder='Confirm password' required></input>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
            <div className='under-card'>
                Already have an account? Login
            </div>
        </div>
    )
}
