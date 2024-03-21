import React from 'react';
import EncounterBlock from './EncounterBlock';

const PhysicianBlock = ({ name, label }) => {
    return (
        <div className="sidebar-visit-record">
            <div className="sidebar-physician-block w-clearfix">
                <div className="sidebar-physician-h1">{name}</div>
                <div className="pill-label">{label}</div>
            </div>
            <EncounterBlock
                name='Encounter At D.L Hospital'
                date='28th Jan 2023'
            />
        </div>
    );
};

export default PhysicianBlock