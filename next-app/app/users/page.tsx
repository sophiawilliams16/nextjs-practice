import { link } from 'fs';
import React from 'react'
import NavBar from '../components/NavBar';

// define object data 
interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    // refresh cache and get data from backend every 10 seconds
    // { next: { revalidate: 10 } }

    // auto refresh 
    { cache: 'no-store' }
  );
  const users: User[] = await res.json();

  return (
    <>
      <NavBar />
      <br />
      <div className='grid grid-cols-2'>
        <div className='ml-5'>
          <h1 className='text-2xl'>Users</h1>
          <p className='text-xs'>Last Updated: {new Date().toLocaleTimeString()}</p>
        </div>
        <div className='place-self-end'>
         <button className="btn btn-sm ls:btn-md max-w-xs mr-10">Add New User</button>
        </div>
      </div>
      <br />
      <ul>
        {users.map(user =>
        <li key={user.id} className="collapse bg-base-200 m-1">
          <input type="checkbox" /> 
          <div className="collapse-title font-medium">
              {user.name}
          </div>
          <div className="collapse-content text-sm"> 
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
          </div>
        </li>)}
      </ul>
    </>
  )
}

export default UsersPage