import React from 'react';
import { StarFilled } from '@ant-design/icons';
import'./sidebar.css';


function Starred(){

    return(
        <div  className='sidercomponents'>
            <StarFilled className="starredTitle" />
            <span className="starredTitle"><b>STARRED (1)</b></span>
            <div className="starredTitle">
                # JavaScript
            </div>
        </div>
    )

}

export default Starred