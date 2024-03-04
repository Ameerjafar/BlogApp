import { useState } from "react"

export function Signup() {
    const [count, setCount] = useState(0);
    return (
        <div className = 'h-screen flex items-center justify-center text-color bg-gray-400'>
            <div className = 'bg-white hover:bg-gray-100 rounded-lg p-4'>
                <div className = 'flex justify-center'>
                    <h1 className = 'font-bold'>SIGN UP</h1>
                </div>
                <h2>Enter your information to create account</h2>
                <h3 className = 'font-bold py-2'>First Name</h3>
                <input type = 'text' className = 'w-full border-2 rounded-lg' placeholder="Enter your first name"></input>
                <h3 className = 'font-bold py-2'>Last Name</h3>
                <input type = 'text' className = 'w-full border-2 rounded-lg' placeholder="Enter your last name"></input>
                <h3 className = 'font-bold py-2'>Email</h3>
                <input type = 'text' className = 'w-full border-2 rounded-lg' placeholder="Enter your email"></input>
                <h3 className = 'font-bold py-2'>Password</h3>
                <input type = 'password' className = 'w-full border-2 rounded-lg' placeholder="Enter your password"></input>
                <div className = 'p-3 flex justify-center'><button className = 'text-white bg-black rounded-lg w-20 text-center'>submit</button></div>
            </div>
        </div>
    )
}