import React, { useState } from 'react';
import {message, Button } from 'antd';
import { SwapOutlined, PlusOutlined } from '@ant-design/icons';
import './sidebar.css';

const success = () => {
    message.success({
      content: 'Created a New Channel!',
      //className: 'custom-class',
      style: {
        marginTop: '20vh',
      },
    });
}

function Channels(){

    return(
        <div  className='sidercomponents'>
            <SwapOutlined className='channels' />
            <span className='channels'><b>CHANNELS (2)</b></span>
            {/* <Button className='addchannelbutton' onClick={() => openNotificationWithIcon('success')}><PlusOutlined className='addchannels' /></Button> */}
           <PlusOutlined className='addchannels' onClick={success} />
            
            <div className='channel'># JavaScript</div>
            <div className='channel'># React</div>
        </div>
    )
}



export default Channels