import React from 'react'
import { useSelector } from 'react-redux'
import FooterBox from './FooterBox'
import Messages from './Messages'

const ChatScreen = () => {

const lastChat = useSelector(state=>state.chatScreen.single)
console.log(lastChat)

const messages =useSelector(state=>state.messages.array)


  return (
    <div className='flex flex-col relative'>
<div className='name outline outline-1 outline-slate-200`'>{lastChat.name}</div>

<Messages  messages={messages}/>

<FooterBox/>
    </div>
  )
}

export default ChatScreen