import React from 'react'
import EncounterBlock from './EncounterBlock';

const PhysicianBlock = ({ name, label }) => {
    return (
        <div className='side-visit-record'>
            <div className='side-physician-block'>
                <p className='side-physician'>{name}</p>
                <p className='side-physician-label'>{label}</p>
            </div>

            {/* Link to encounter */}
            <EncounterBlock
                href='#'
                iconSrc='images/file-05.svg'
                name='Encounter At D.L Hospital'
                date='28th Jan 2023'
            />
        </div>
    );
};

export default PhysicianBlock