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
            <div>
                <div>This is my content</div>
            </div>
        </div>
    </div>
}