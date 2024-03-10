import React from 'react'

const Timestamp = ({ timestamp }) => {
    return (
        <div className='sidebar-time-stamp card-title'>
            {timestamp}
        </div>
    );
};

export default Timestamp