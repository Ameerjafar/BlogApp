import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { AppBar } from "./AppBar";
export function BlogCard() {
    const [date, setDate] = useState(new Date());
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const writeHandler = () => {
        navigate('/addblog');
    }
    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get('http://localhost:3000/users/allblogs');
            setData(response.data.message);
        }
        fetchdata();
    }, [])
    return (
        <div className = 'pt-2'>
            <AppBar></AppBar>
            {data.map((post) => (
                <div key={post._id}>
                <div className = 'flex justify-center pl-10 pt-3'>
                    <div className = 'w-1/3 border-b'>
                        <div className = 'flex'>
                            <div className = 'pt-2'>
                                <div className = 'flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full text-sm'>AJ</div>
                            </div>
                            <div className = 'p-2 font-thin'>Ameer Jafar .</div>
                            <div className = 'pt-3 font-thin text-sm'>{date.toLocaleDateString()}</div>
                        </div>
                        <div>
                            <button className = 'font-bold'>{post.title}</button>
                        </div>
                        <div>
                            <div>{post.content.slice(0, 100) + '...'}</div>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}