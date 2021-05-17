import React from 'react'
import { MailFilled } from '@ant-design/icons';

function DirectMessage(){
    return(
        <div  className='sidercomponents'>
            <MailFilled className='directmessage' />
            <span className='directmessage'><b>DIRECT MESSAGES (2)</b></span>  
            <div className='individualchat'>    
             <span className='chatName'>@ douglas</span>
             <span className='circlegreen'></span>  
            </div>
            <div className='individualchat'>   
             <span className='chatName'>@ bethany</span>
             <span className='circlered'></span>
            </div>
        </div>
    )
}

export default DirectMessage