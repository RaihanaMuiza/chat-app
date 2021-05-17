import React from 'react';
import { Input, Space } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import './header.css';

const { Search } = Input;
const onSearch = value => console.log(value);

function ReactHeader(){

    return(
        <div className='headercomponent'>
            <div className='titlecomponent'>
               <span className='title'>#React<StarOutlined /></span>
               <span>
               <Space direction="vertical">
                    <Search  className="search" placeholder="Search Messages" onSearch={onSearch} style={{ width: 300 }} />
                </Space>
               </span>
            </div>
            <div className='NoOfUsers'>
                1 User
            </div>
        </div>
    )


}

export default ReactHeader