import React from 'react'
import { Link } from 'react-router-dom';

const EncounterBlock = ({ href, iconSrc, name, date }) => {
    return (
        <Link to={href} className='d-flex justify-content-start align-items-start encounter-block side'>
            <img src={iconSrc} alt='file' className='encounter-icon' />
            <div className='detail-block'>
                <p className='detail-name'>{name}</p>
                <p className='detail-date'>{date}</p>
            </div>
        </Link>
    );
};

export default EncounterBlock