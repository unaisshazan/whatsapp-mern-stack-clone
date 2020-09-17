import { Avatar } from '@material-ui/core'
import React from 'react'
import './Chat.css'
function Chat() {
    return (
        <div className='chat'>
              <div className="chat__header">
                  <Avatar/>
              </div>
              <div className="chat__headerInfo">
                  <h3>Room Name</h3>
              </div>
       
        </div>
    )
}

export default Chat
