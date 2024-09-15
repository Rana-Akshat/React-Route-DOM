import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
        <nav className='bg-slate-200 shadow-md border-gray-400 px-4 lg:px-6 py-3'>
            <div className='flex flex-row justify-between items-center mx-auto max-w-screen-xl'>
              <Link to = "/" className = "flex items-center">
                <img src="https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg?w=740&t=st=1726298233~exp=1726298833~hmac=a6d5fa05e8b84b43a11dd0d896fc6086c400cd6b0a4db055220df103c9112b51" 
                      alt="sample logo"
                      className='mr-3 h-12 rounded-md' />
              </Link>
              <div className="flex flex-row lg:order-2">
                <Link to = "#"
                  className='text-black hover:bg-slate-500 font-semibold rounded-lg text-nowrap px-5 py-2 mr-1'>
                  Log in
                </Link>
                <Link to = "#"
                className='text-white bg-orange-600 rounded-lg text-sm text-nowrap px-4 py-2'>
                  Get Started 
                  </Link>
              </div>
              <div className='flex flex-wrap items-center justify-between w-full lg:order-1'>
                <ul className='flex flex-row mt-4 font-medium'>
                  <li>
                    <NavLink to={"/"}
                    className={({isActive}) => 
                      `block py-2 pr-4 pl-3 
                      ${isActive ? 'text-blue-400' : 'text-gray-700' } border-gray-400
                      hover:bg-gray-300 hover:text-orange-500`}>
                        Home
                        </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/about"}
                    className={({isActive}) => 
                      `block py-2 pr-4 pl-3 
                      ${isActive ? 'text-blue-400' : 'text-gray-700' } border-gray-400
                      hover:bg-gray-300 hover:text-orange-500`}>
                        About
                        </NavLink>
                  </li>
                  <li>
                  <NavLink to = {"/users"}
                  className={({isActive}) => 
                    `block py-2 pr-4 pl-3 
                    ${isActive ? 'text-blue-400' : 'text-gray-700' } border-gray-400
                    hover:bg-gray-300 hover:text-orange-500`}>
                      Posts
                      </NavLink>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
    </header>
  ) 
}

export default Header