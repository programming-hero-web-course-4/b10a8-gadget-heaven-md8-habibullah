import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

const nav = <div className='lg:flex lg:gap-4'>
    <li className='btn'>Home</li>
    <li className='btn'>Statistics</li>
    <li className='btn'>Dashboard</li>
</div>

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
        <div className="dropdown">
        <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {nav}
        </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="flex">
        {nav}
        </ul>
    </div>
    <div className="navbar-end gap-5 lg:pr-5">
        <FiShoppingCart></FiShoppingCart>
        <FaRegHeart></FaRegHeart>
    </div>
    </div>
  )
}
