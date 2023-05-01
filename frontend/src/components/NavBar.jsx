import React from 'react'
import { getUser } from '../localstorage manger/localstorage'

const NavBar = () => {
    const user = getUser()
    console.log(user)
  return (
    <div className='flex flex-row bg-purple-900 fixed top-0 w-screen items-center px-5 h-10 justify-end shadow-xl'>
<div>{user && user.name} </div>

    </div>
  )
}

export default NavBar