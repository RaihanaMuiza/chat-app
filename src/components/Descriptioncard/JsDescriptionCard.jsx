import React from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import { DownOutlined, UserOutlined, HighlightOutlined  } from '@ant-design/icons';
import './DescriptionCard.css';

const menu = (
    <Menu>
      <Menu.Item>
         About Java Script
      </Menu.Item>
    </Menu>
  );


function JsDescriptionCard(){

    return(
        <div className='descriptionCard'>
            <div className='descriptionTable'>
            <div className='details'>About #JavaScript</div>
            <hr />
            <div className='details'>
            <Dropdown className='details' overlay={menu}>
            <a  onClick={e => e.preventDefault()}>
            <b> i </b><DownOutlined />
            </a>
            </Dropdown>
            Channel Details
            </div>
            <hr />
            <div className='details'>
            <Dropdown className='details' overlay={menu} disabled>
            <a  onClick={e => e.preventDefault()}>
            <Avatar icon={<UserOutlined />} />
            <b> Top Posters </b><DownOutlined />
            </a>
            </Dropdown>
            </div>
            <hr />
            <div className='details'>
            <Dropdown className='details' overlay={menu} disabled>
            <a  onClick={e => e.preventDefault()}>
            <Avatar icon={<HighlightOutlined />} />
            <b> Created By </b><DownOutlined />
            </a>
            </Dropdown>
            </div>
            </div>
        </div>
    )
}

export default JsDescriptionCard