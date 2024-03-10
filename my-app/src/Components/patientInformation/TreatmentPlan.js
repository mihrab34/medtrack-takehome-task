import React from 'react'

const TreatmentPlan = ({ content }) => {
    return (
        <div className='sidebar-diagnosis-item padding'>
                    <div className='empty-state'>{content}</div>
        </div>
    );
};

export default TreatmentPlan