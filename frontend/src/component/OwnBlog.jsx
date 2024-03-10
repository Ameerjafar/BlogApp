import { useState, useEffect } from "react";
import axios from 'axios';
import { AppBar } from "./AppBar";
export function OwnBlog( { userId }) {
    const[data, setData] = useState([]);
    const[date, setDate] = useState(new Date());
    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.post('http://localhost:3000/users/blog', {
                userId: userId
            });
            setData(response.data.message);
            console.log(userId);
        }
        fetchdata();
    }, [])
    return (
        <div className = 'bg-gray-100'>
            <AppBar userId = { userId }></AppBar>
            <div className = 'pt-2'>
                {data.map((post) => (
                    <div key={post._id}>
                    <div className = 'flex justify-center pl-2 pt-3 bg-gray-100'>
                        <div className = 'w-1/3 border-b bg-white p-2 rounded-lg'>
                            <div className = 'flex'>
                                <div className = 'pt-2'>
                                    <div className = 'flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full text-sm'>AJ</div>
                                </div>
                                <div className = 'p-2 font-thin'>Ameer Jafar .</div>
                                <div className = 'pt-3 font-thin text-sm'>{date.toLocaleDateString()}</div>
                            </div>
                            <div>
                                <button onClick = {() => {
                                    titleHandler(post.title, post.content);
                                }} className = 'font-bold'>{post.title}</button>
                            </div>
                            <div>
                                <div onClick = {() => {
                                    contentHandler(post.title, post.content);
                                }}>{post.content.slice(0, 100) + '...'}</div>
                            </div>
                            <div className = 'text-xs font-thin p-1 pl-0'>
                                2 min read .
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}