import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useUserContext } from "../hooks/useUserContext"

const Navbar = () => {

    const { logout } = useLogout()
    const { state } = useUserContext()

    return (
        <div className="bg-yellow-400 flex items-center justify-between px-4">
            <span>Feeds</span>
            {
                (state.token) ? (


                    <div>
                        <span>{state?.user?.username || false}</span>
                        <button onClick={() => logout()} className="bg-white p-2">Logout</button>
                    </div>
                ) : (

                    <div>
                        <Link to='/login'>
                            <button className="bg-white p-2 m-2">Login</button>
                        </Link>
                        <Link to='/signup'>
                            <button className="bg-white p-2 m-2">Signup</button>
                        </Link>
                    </div>
                )
            }
        </div>
    )

}
export default Navbar