import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
}

function Users() {

    const data = useLoaderData()
    console.log(data);
    
  return (
    <div className='text-center justify-between'>
        <h1 className='text-3xl font-serif font-bold py-3 shadow-lg bg-slate-300'>User Details...</h1>
        <ul className='text-lg '>
            {data.map((user) => 
                <li className = 'py-5 mx-auto font-semibold' key = {user.id}>{user.name}: {user.email} - {user.phone}</li>)}
        </ul>
    </div>
  )
}

export default Users