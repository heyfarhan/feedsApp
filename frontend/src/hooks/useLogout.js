import { useUserContext } from "./useUserContext"

export const useLogout = () => {

    const { state, dispatch } = useUserContext()

    const logout = () => {

        localStorage.removeItem('user')
        localStorage.removeItem('token')

        dispatch({ type: 'LOGOUT' })

    }

    return { logout }
}