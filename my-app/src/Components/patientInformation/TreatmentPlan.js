import React from 'react';

const TreatmentPlan = ({ content }) => {
    return (
        <div className="sidebar-wrapper padding">
            <div className="null">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <div className="empty-state">
                <div className="empty-state-label-h2">{content}</div>
            </div>
        </div>
    );
};

export default TreatmentPlan