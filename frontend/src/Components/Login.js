import { useState } from "react"
const Login = () => {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = (e) => {

        e.preventDefault()

        console.log({ username, password })


        setUsername('');
        setPassword('');

    }


    return (
        <div className="border-black border-2 h-full w-full p-12 flex justify-center items-center flex-col gap-10">
            <span className="font-medium text-3xl">Sign Up</span>
            <form onSubmit={handleClick} className="flex flex-col gap-4">

                <label className="">Username :</label>
                <input className="border-black border p-2" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label className="">Password :</label>
                <input className="border-black border p-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />



                <button className="bg-green-800 w-1/2 m-auto p-2 text-white font-medium mt-4" onClick={handleClick}>Login</button>

            </form>
        </div >
    )
}
export default Login