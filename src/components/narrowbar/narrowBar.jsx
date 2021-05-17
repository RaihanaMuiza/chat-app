import React from 'react';
import { Button,Divider  } from 'antd';
import './narrowbar.css';

function NarrowBar(){


    return(
        <div className='narrowbar'>
            <Divider className='divider' />
            <Button type="primary" ><b>+</b></Button>
        </div>
    )
}

export default NarrowBar