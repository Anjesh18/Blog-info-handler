import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className='flex p-6 w-full h-18 rounded-lg bg-slate-200'>
        <ul className='flex flex-row align-center justify-center space-x-11'>
            <li className='font-extrabold text-4xl font-mono'>MERN</li>
           <Link to="/create"> <li className='font-bold text-2xl font-sans'>Create Post</li></Link>
           <Link to="/all"> <li className='font-bold text-2xl font-sans'>All Posts</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
