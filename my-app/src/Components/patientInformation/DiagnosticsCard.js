import React from 'react';
const DiagnosticsCard = ({ diagnostics }) => {
    return (
        <div className="sidebar-wrapper padding diagnostics w-clearfix">
            <div className="diagnostics-added">
                {diagnostics.map((diagnosis, index) => (
                    <div key={index} className="diagnostic-label">{diagnosis}</div>
                ))}
            </div>
        </div>
    );
};

export default DiagnosticsCard