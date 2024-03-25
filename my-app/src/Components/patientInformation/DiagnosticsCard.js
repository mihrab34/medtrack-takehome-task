import React from 'react';
const DiagnosticsCard = ({ diagnostics }) => {
    return (
        <div className="sidebar-wrapper padding diagnostics w-clearfix">
                {diagnostics.map((diagnosis, index) => (
                    <div key={index} className=" diagnostics-added diagnostic-label">{diagnosis}</div>
                ))}
        </div>
    );
};

export default DiagnosticsCard