import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-slate-900 text-white py-2'>

            <div className='logo'>
                <span className='font-bold text-2xl mx-9'>iTask</span>
                </div>

            <ul className='flex list-none gap-20 mx-9 text-2xl '>

                <li className='cursor-pointer hover:font-bold hover:underline transition-all'>Home</li>
                <li className='cursor-pointer hover:font-bold hover:underline transition-all'>Your Tasks</li>

            </ul>

        </nav>
    )
}

export default Navbar
