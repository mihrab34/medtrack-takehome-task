import React from 'react'
const DiagnosticsCard = ({ diagnostics, timestamp }) => {
    return (
        <div className='sidebar-diagnosis-item padding diagnostics'>
            {diagnostics.map((diagnosis, index) => (
                <p key={index} className='diagnostics-added'>{diagnosis}</p>
            ))}
        </div>
    );
};

export default DiagnosticsCard