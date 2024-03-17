import { link } from 'fs';
import React from 'react'

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
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage