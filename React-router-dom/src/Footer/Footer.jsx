import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-slate-200 border-slate-400'>
      <div className='mx-auto w-full p-4'>
        <Link to = "/" className='flex items-center'>
          <img src = "https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?t=st=1726298136~exp=1726298736~hmac=43d4a3ca865719725a56d989ea0b147dfa1c7c71df310e62c558d0f09749d140" 
          alt = "logo"
          className='mr-3 h-12' />
          </Link>
          <div className="grid text-right">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                  <ul className="text-gray-500 font-medium">
                      <li className="mb-4">
                          <Link to="/" className="hover:underline">
                            Home
                          </Link>
                      </li>
                      <li>
                          <Link to="/about" className="hover:underline">
                               About
                          </Link>
                      </li>
                  </ul>
              </div>
            </div>
      </div>
    </footer>
  )
}

export default Footer