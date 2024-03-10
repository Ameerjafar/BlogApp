
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';
export function AppBar({ userId }) {
    const navigate = useNavigate();
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
        const fetchuserInformation = async () => {
            const response = await axios.post('http://localhost:3000/users/user', {
                userId
            })
            console.log(response);
        fetchuserInformation();
    }}, [])
    return <div className = 'bg-white'>
        <div className = 'flex p-5 pl-10 border-b gap-7'>
                <div className = 'w-4/5'>
                    <button onClick = {mediumHandler} className="rounded-full w-34 font-bold pl-2">medium</button>
                </div>
                <button onClick = {writeHandler} className="fa fa-pencil text-green-400" aria-hidden="true"></button>
                <button className="fa fa-bell" aria-hidden="true"></button>
                <button onClick = {profileHandler} className = 'w-6 h-6 rounded-full bg-gray-300 text-gray-600'>AJ</button>
        </div>
    </div>
}