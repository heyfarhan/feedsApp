import { useState } from "react"
import { useUserContext } from './useUserContext'

export const useLogin = () => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useUserContext()

    const login = async (username, password) => {


        setIsLoading(true)

        const res = await fetch('http://localhost:1234/proxy/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
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

    return { login, error, isLoading }

}