import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
export function AppBar({ userId }) {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const writeHandler = () => {
        navigate('/addblog');
    }
    const mediumHandler = () => {
        navigate('/blogs');
    }
    const profileHandler = () => {
        navigate('/ownblog');
    }
    useEffect(() => {
        const fetchInformation = async () => {
            const response = await axios.post("http://localhost:3000/users/user", {
                userId: userId
            })
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
        }
        fetchInformation();
    }, [])
    const SignoutHandler = () => {
        navigate('/signin');
    }
    useEffect(() => {
        console.log(firstName);
        console.log(lastName);
        console.log(userId);
    }, [firstName, lastName, userId]);
    return <div className = 'bg-white'>
        <div className = 'flex p-5 pl-10 border-b gap-8'>
                <div className = 'w-4/5'>
                    <button onClick = {mediumHandler} className="rounded-full w-34 font-bold pl-2">medium</button>
                </div>
                <button onClick = {writeHandler} className="fa fa-pencil text-green-400" aria-hidden="true"></button>
                <button className="fa fa-bell" aria-hidden="true"></button>
                <button onClick = {profileHandler} className = 'w-6 h-6 rounded-full bg-gray-300 text-gray-600'>{(firstName && lastName) ? `${firstName[0]}${lastName[0]}`.toUpperCase() : ''}</button>
                {/* <div>
                    <button onClick = {SignoutHandler} className = 'bg-red-400 rounded-lg w-15 h-15 text-sm p-2'>signout</button>
                </div> */}
        </div>
    </div>
}