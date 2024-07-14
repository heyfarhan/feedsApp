import { useState } from "react"
import { useSignup } from "../hooks/useSignup"


const Signup = () => {



    const { signup, error, isLoading } = useSignup()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [isAdmin, setIsAdmin] = useState('false')

    const handleClick = async (e) => {

        e.preventDefault()

        await signup(username, password, email, phone, isAdmin)


        setUsername('');
        setPassword('');
        setEmail('');
        setPhone('');
        setIsAdmin('false');

    }


    return (

        <div className="border-black border-2 h-full w-full p-12 flex justify-center items-center flex-col gap-10">
            <span className="font-medium text-3xl">Sign Up</span>
            <form onSubmit={handleClick} className="flex flex-col gap-4">

                <label className="">Username :</label>
                <input className="border-black border p-2" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label className="">Password :</label>
                <input className="border-black border p-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <label className="">Email :</label>
                <input className="border-black border p-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label className="">Phone No. :</label>
                <input className="border-black border p-2" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />

                <label className="">Role :</label>

                <select
                    id="role-select"
                    value={isAdmin}
                    onChange={(e) => setIsAdmin(e.target.value)}
                    className="border-black border p-2"
                >
                    <option className="" value="false">User</option>
                    <option value="true">Admin</option>
                </select>

                <button className="bg-green-800 w-1/2 m-auto p-2 text-white font-medium mt-4" onClick={handleClick}>Sign Up</button>

            </form>
        </div >
    )
}
export default Signup