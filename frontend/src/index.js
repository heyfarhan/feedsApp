import React from 'react'
import ReactDom from 'react-dom/client'
import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Navbar from './Components/Navbar'

import { UserContextProvider } from './Context/UserContext'
import { useUserContext } from './hooks/useUserContext'

const root = ReactDom.createRoot(document.getElementById('root'))

const App = () => {

    return (
        <div className='bg-green-300 h-[100vh] flex justify-center items-center'>
            <div className="bg-yellow-100 w-[98vw] md:w-[80vw] lg:w-[60vw] xl:w-[25vw] h-[90vh] px-8 pt-5 flex flex-col justify-center">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

const Routes = () => {
    const { state } = useUserContext()

    const routes = createBrowserRouter([
        {
            element: <App />,
            path: "/",
            children: [
                {
                    element: (state.token) ? < Home /> : <Navigate to='/login' />,
                    path: '/',
                },
                {
                    element: (!state.token) ? < Signup /> : <Navigate to='/' />,
                    path: '/signup',
                },
                {
                    element: (!state.token) ? < Login /> : <Navigate to='/' />,
                    path: '/login',
                },
            ]
        },

    ])
    return <RouterProvider router={routes} />

}

root.render(
    <UserContextProvider>
        <Routes />
    </UserContextProvider>
)