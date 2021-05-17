import React from 'react'
import { Layout,Avatar, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './sidebar.css'
import Starred from './starred';
import Channels from './channels';
import DirectMessage from './directMessage';

const { Sider} = Layout;

const menu = (
    <Menu>
      <Menu.Item>
          Profile
      </Menu.Item>
      <Menu.Item>
          Saved Items
      </Menu.Item>
      <Menu.Item disabled>
          Advanced Settings
      </Menu.Item>
      <Menu.Item danger>Log Out</Menu.Item>
    </Menu>
);

function SideBar(){

    return(
        <div className="sider">
                    <h1 className="maintitle"> &#60;/&#62; DevChat </h1>
                    <div  className='sidercomponents'>
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        <Dropdown overlay={menu}>
                            <b><a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Thomas <DownOutlined />
                            </a></b>
                        </Dropdown>
                    </div>
                    <Starred />
                    <Channels />
                    <DirectMessage />
        </div>
    )

}

export default SideBar