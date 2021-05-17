import React from 'react';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './chatArea.css';


function ChatArea(){


    return(
        <div className='chatArea'>
            <div className='individualMessage'>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className='chatAvatar' />
            <div>
                <span className='chatName'>thomas</span>
                <span className='chatTime'>5 mins ago </span><br /><span className='chatMessage'>Hi there!</span>          
            </div>
            </div>
            <div className='individualMessage'>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className='chatAvatar' />
            <div>
                <span className='chatName'>thomas</span>
                <span className='chatTime'>5 mins ago </span><br /><span className='chatMessage'>Please check this Image</span><br />
                <Image.PreviewGroup>
                    <Image
                        width={200}
                        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                    />
                </Image.PreviewGroup>        
            </div>
            </div>
            <div className='individualMessage'>
            <Avatar icon={<UserOutlined />} className='chatAvatar' />
            <div>
                <span className='chatName'>benthony</span>
                <span className='chatTime'>4 mins ago </span><br /> <span className='chatMessage'>Nice!</span>         
            </div>
            </div>
            <div className='individualMessage'>
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} className='chatAvatar' />
            <div>
                <span className='chatName'>douglous</span>
                <span className='chatTime'>4 mins ago </span><br /> <span className='chatMessage'>Is it a png file?</span>         
            </div>
            </div>
            <div className='individualMessage'>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className='chatAvatar' />
            <div>
                <span className='chatName'>thomas</span>
                <span className='chatTime'>4 mins ago </span><br /><span className='chatMessage'>Yes</span>          
            </div>
            </div>
            <div className='individualMessage'>
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} className='chatAvatar' />
            <div>
                <span className='chatName'>douglous</span>
                <span className='chatTime'>3 mins ago </span><br /> <span className='chatMessage'>Great. I designed this for a profile</span><br /> 
                <Image.PreviewGroup>
                    <Image
                        width={200}
                        src="https://robohash.org/1?set=set3"
                    />
                </Image.PreviewGroup>         
            </div>
            </div>

            <div className='individualMessage'>
            <Avatar icon={<UserOutlined />} className='chatAvatar' />
            <div>
                <span className='chatName'>benthony</span>
                <span className='chatTime'>3 mins ago </span><br /> <span className='chatMessage'>It looks so cool!</span>         
            </div>
            </div>
            <div className='individualMessage'>
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} className='chatAvatar'/>
            <div>
                <span className='chatName'>douglous</span>
                <span className='chatTime'>2 mins ago </span><br /> <span className='chatMessage'>Please add this description to the image.<br />"React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."</span>         
            </div>
            </div>
            <div className='individualMessage'>
            <Avatar icon={<UserOutlined />} className='chatAvatar' />
            <div>
                <span className='chatName'>benthony</span>
                <span className='chatTime'>few seconds ago </span><br /> <span className='chatMessage'>Sure will do!</span>         
            </div>
            </div>
        </div>
    )
}

export default ChatArea