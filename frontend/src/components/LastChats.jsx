import React from 'react'
import { useSelector } from 'react-redux'

const LastChats = () => {
    const lastChats = useSelector(state=>state.chatScreen.array)
  return (
    <>
    <div className='flex flex-col'>

{lastChats.map((e)=>{
    return <div key={e.id}>e</div>
})}


    </div>
    
    
    </>
  )
}

export default LastChats