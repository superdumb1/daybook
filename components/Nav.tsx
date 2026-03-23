import React from 'react'

const Nav = () => {
    const buttonClass="text-2xl font-bold"
    return (
<nav className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-xl">
            <ul >
                <li className='border p-2 '><a href="/"><button className={buttonClass}>Home</button></a></li>
                <li className='border p-2'><a href="inputform"><button className={buttonClass}>New Entry</button></a></li>
                <li className='border p-2 '><a href="report"><button className={buttonClass}>report</button></a></li>
            </ul>
        </nav>
    )
}

export default Nav