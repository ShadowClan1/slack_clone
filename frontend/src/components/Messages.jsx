import React from 'react'
import Message from './small components/Message'

const Messages = ({messages}) => {
    console.log(messages)
  return (
    <div className='flex flex-col gap-2 mt-2'>

{messages.map((e)=>{
    return <Message data={e}/>
})}

        
    </div>
  )
}

export default Messages