import { useState } from "react"

export function BlogCard() {
    const [date, setDate] = useState(new Date());
    const [content, setContent] = useState('This is my first good project');

    return (
        <div className = 'pt-2'>
            <div className = 'flex justify-center'>
                <div className = 'w-1/3 border-b'>
                    <div className = 'flex'>
                        <div className = 'pt-2'>
                            <div className = 'flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full text-sm'>AJ</div>
                        </div>
                        <div className = 'p-2 font-thin'>Ameer Jafar .</div>
                        <div className = 'pt-3 font-thin text-sm'>{date.toLocaleDateString()}</div>
                    </div>
                    <div>
                        <div className = 'font-bold'>This is my first blog</div>
                    </div>
                    <div>
                        <div>{content.slice(0, 100) + '...'}</div>
                    </div>
                </div>
            </div>
            <div className = 'flex justify-center'>
                <div className = 'w-1/3 border-b'>
                    <div className = 'flex'>
                        <div className = 'pt-2'>
                            <div className = 'flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full text-sm'>AJ</div>
                        </div>
                        <div className = 'p-2 font-thin'>Ameer Jafar .</div>
                        <div className = 'pt-3 font-thin text-sm'>{date.toLocaleDateString()}</div>
                    </div>
                    <div>
                        <div className = 'font-bold'>This is my first blog</div>
                    </div>
                    <div>
                        <div>{content.slice(0, 100) + '...'}</div>
                    </div>
                </div>
            </div>
            <div className = 'flex justify-center'>
                <div className = 'w-1/3 border-b'>
                    <div className = 'flex'>
                        <div className = 'pt-2'>
                            <div className = 'flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full text-sm'>AJ</div>
                        </div>
                        <div className = 'p-2 font-thin'>Ameer Jafar .</div>
                        <div className = 'pt-3 font-thin text-sm'>{date.toLocaleDateString()}</div>
                    </div>
                    <div>
                        <div className = 'font-bold'>This is my first blog</div>
                    </div>
                    <div>
                        <div>{content.slice(0, 100) + '...'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}