import { createContext, useReducer, useState } from "react";

export const UserContext = createContext()

export const userReducer = (state, action) => {

    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload.user, token: action.payload.token }
        case 'LOGOUT':
            return { user: null, token: null }
        default:
            return state
    }
}

export const UserContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(userReducer, {
        user: localStorage.getItem('user') || null,
        token: localStorage.getItem('token') || null
    })

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )

}