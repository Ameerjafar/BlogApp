
import { AppBar } from "./AppBar";

export function ShowBlog({title, content, userId}) {
    return <div>
        <AppBar userId = { userId }></AppBar>
        <div className = 'pl-20 pt-16 w-41'>
            <div className = 'flex'>
                <div className = 'font-bold text-2xl w-3/5'>{ title }</div>
                <div className = 'p-2'>Author</div>
            </div>
            <div className = 'flex'>
                <div className = 'font-normal w-3/5'>{ content }</div>
                <div className = 'flex items-center justify-center p-2 w-8 h-8 bg-gray-600 rounded-full'>A</div>
                <div className = 'text-xs p-2 w-44'>This is all about the author information</div>
            </div>
        </div>
    </div>
}