export function Blog() {
    return (
        <div>
            <div className="flex p-4 pt-0">
                <div className = 'w-9/12 pl-40 pt-3'>
                    Draft in ameer jafar
                </div>
                <div className = 'pr-10'>
                    <div className = 'text-center'>
                        <button className = 'text-white w-16 h-7 bg-green-400 rounded-lg text-sm'>publish</button>
                        <button className = 'p-4'>...</button>
                        <button className = "pr-3 fa fa-bell" aria-hidden="true"></button>
                        <button className = 'w-9 h-9 bg-gray-300 rounded-full text-center'>AJ</button>
                    </div>
                </div>
            </div>
            <div className = 'pl-60'>
                <div className = 'p-4 text-2xl'>
                    <input type = 'text' className = '' placeholder="Title"></input>
                </div>
                <div className = 'text-1xl'>
                    <textarea className = 'w-8/12 h-52' type = 'text' placeholder="Tell your story..."></textarea>
                </div>
            </div>
        </div>
    )
}