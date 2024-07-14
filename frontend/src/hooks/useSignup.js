import { useState } from 'react'
import { useUserContext } from './useUserContext'

export const useSignup = () => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { state, dispatch } = useUserContext()

    const signup = async (username, password, email, phone, admin) => {

        setIsLoading(true)

        const res = await fetch('http://localhost:1234/proxy/api/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, email, phone, admin })
        })
        const json = await res.json()

        if (!res.ok) {
            setError(json.error)
            setIsLoading(false)
        }
        if (res.ok) {

            localStorage.setItem('user', { ...json.user })
            localStorage.setItem('token', json.token)



            dispatch({ type: 'LOGIN', payload: json })
            setError(null)
            setIsLoading(false)
        }



    }

    return { signup, error, isLoading }

}