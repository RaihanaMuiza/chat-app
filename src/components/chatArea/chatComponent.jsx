import React from 'react';
import DescriptionCard from '../Descriptioncard/DescriptionCard';
import JavaScriptHeader from '../header/jsHeader';
import ReactHeader from '../header/reactHeader';
import ChatArea from './chatArea';
import './chatArea.css'
import NewMessage from './newMessage';


function ChatComponent(){
    
return(
    <div className='chatComponent'>
                <div className='subComponent'>
                        <JavaScriptHeader  />
                        <DescriptionCard />
                </div>
                <ChatArea />
                <NewMessage />
    </div>
    )

}

export default ChatComponent