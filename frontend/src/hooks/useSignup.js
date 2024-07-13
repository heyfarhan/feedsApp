import { useState } from 'react'


export const useSignup = () => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const signup = async (username, password, email, phone, admin) => {

        // const res = await fetch('/')



    }

    return { error, isLoading, signup }

}