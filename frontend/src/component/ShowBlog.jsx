import { useState } from "react"
import { AppBar } from "./AppBar";

export function ShowBlog() {
    const [title, setTitle] = useState("This is my first blog");
    return <div>
        <AppBar></AppBar>
        <div className = 'pl-40 pt-16 w-41'>
            <div className = 'flex'>
                <div className = 'font-bold text-2xl w-3/5'>{title}</div>
                <div className = 'p-2'>Author</div>
            </div>
            <div className = 'flex'>
                <div className = 'font-normal w-3/5'>This is my content</div>
                <div className = 'flex items-center justify-center p-2 w-8 h-8 bg-gray-600 rounded-full'>A</div>
                <div className = 'text-sm p-2 w-20'>In this one we are going to share the author information</div>
            </div>
        </div>
    </div>
}