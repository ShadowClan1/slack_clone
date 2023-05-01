import React from 'react'

const Message = ({data}) => {
    console.log(data)
  return (
    <div className='flex flex-col px-5 py-3'>
        <h1 className='text-bold text-purple-900 font-bold text-lg'>{data.from.name}</h1>
        <div>
        {data.messageText}

        </div>
        <p className='text-xs text-slate-400'> {new Date(parseInt(data.time)).toString()} </p>
        </div>
  )
}

export default Message