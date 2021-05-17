import React from 'react';
import { Input, Space } from 'antd';
import { StarFilled } from '@ant-design/icons';
import './header.css';
import ChatArea from '../chatArea/chatArea';

const { Search } = Input;
const onSearch = value => console.log(value);

function JavaScriptHeader(){

    return(
        <div className='headercomponent'>
            <div className='titlecomponent'>
               <span className='title'>#JavaScript<StarFilled className='starfilled'/></span>
               <span>
               <Space direction="vertical">
                    <Search  className="search" placeholder="Search Messages" onSearch={onSearch} style={{ width: 300 }} />
                </Space>
               </span>
            </div>
            <div className='NoOfUsers'>
                3 Users
            </div>
        </div>
    )


}

export default JavaScriptHeader