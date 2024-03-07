export function AppBar() {
    const writeHandler = () => {
        navigate('/addblog');
    }
    return <div>
        <div className = 'flex p-5 pl-10 border-b gap-7'>
                <div className = 'w-4/5'>
                    <div className="rounded-full w-34 font-bold pl-2">medium</div>
                </div>
                <button onClick = {writeHandler} class="fa fa-pencil" aria-hidden="true"></button>
                <button class="fa fa-bell" aria-hidden="true"></button>
                <button className = 'w-6 h-6 rounded-full bg-gray-300 text-white'>AJ</button>
        </div>
    </div>
}