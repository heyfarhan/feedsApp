import React from 'react'
import ReactDom from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'


import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import { UserContextProvider } from './Context/UserContext'

const root = ReactDom.createRoot(document.getElementById('root'))

const App = () => {

    return (
        <div className='bg-green-300 h-[100vh] flex justify-center items-center'>
            <div className="bg-yellow-100 w-[92vw] md:w-[80vw] lg:w-[60vw] xl:w-[25vw] h-[95vh] p-16">

                <Outlet />
            </div>
        </div>
    )
}

const routes = createBrowserRouter([
    {
        element: <App />,
        path: "/",
        children: [
            {
                element: <Home />,
                path: '/',
            },
            {
                element: <Signup />,
                path: '/signup',
            },
            {
                element: <Login />,
                path: '/login',
            },
        ]
    },

])



root.render(
    <UserContextProvider>
        <RouterProvider router={routes}>
            <App />
        </RouterProvider>
    </UserContextProvider>
)