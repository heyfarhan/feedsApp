import { useContext } from "react"
import { UserContext } from "../Context/UserContext"

export const useUserContext = () => {

    const context = useContext(UserContext)

    if (!context) {
        throw Error('useUserContext must be used in UserContextProvider')
    }

    return context

}