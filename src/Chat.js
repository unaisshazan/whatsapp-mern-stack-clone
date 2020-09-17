import { Avatar, Icon, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import React from 'react'
import './Chat.css'
function Chat() {
    return (
        <div className='chat'>
              <div className="chat__header">
                  <Avatar/>
            
              <div className="chat__headerInfo">
                  <h3>Room Name</h3>
                  <p>LAST SEEN</p>
              </div>
              <div className="chat__headerRight">
 <IconButton>
     <SearchOutlined/>
 </IconButton>
 <IconButton>
     <AttachFile />
 </IconButton>
 <IconButton>
     <MoreVert />
 </IconButton>
              </div>
       
        </div>  </div>
    )
}

export default Chat
