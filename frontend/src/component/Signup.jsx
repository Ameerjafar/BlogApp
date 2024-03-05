import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export function Signup() {
    const [firstName, setFirstName] = useState("");
    const [password, setPassword] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const navigate = useNavigate();
    const onClickHandler = async () => {
        const res = await axios.post('http://localhost:3000/users/signup', {
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password
        })
        navigate('/signin');
    }
    return (
        <div className = 'h-screen flex items-center justify-center text-color bg-gray-400'>
            <div className = 'bg-white hover:bg-gray-100 rounded-lg p-4'>
                <div className = 'flex justify-center'>
                    <h1 className = 'font-bold'>SIGN UP</h1>
                </div>
                <h2>Enter your information to create account</h2>
                <h3 className = 'font-bold py-2'>First Name</h3>
                <input onChange = {(event) => 
                    setFirstName(event.target.value)} type = 'text' className = 'w-full border-2 rounded-lg' placeholder="Enter your first name"></input>
                <h3 className = 'font-bold py-2'>Last Name</h3>
                <input onChange = {(event) => setLastName(event.target.value)} type = 'text' className = 'w-full border-2 rounded-lg' placeholder="Enter your last name"></input>
                <h3 className = 'font-bold py-2'>Email</h3>
                <input onChange = {(event) => setUserName(event.target.value)} type = 'text' className = 'w-full border-2 rounded-lg' placeholder="Enter your email"></input>
                <h3 className = 'font-bold py-2'>Password</h3>
                <input onChange = {(event) => setPassword(event.target.value)} type = 'password' className = 'w-full border-2 rounded-lg' placeholder="Enter your password"></input>
                <div onClick = {onClickHandler} className = 'p-3 flex justify-center'><button className = 'text-white bg-black rounded-lg w-20 text-center'>submit</button></div>
            </div>
        </div>
    )
}