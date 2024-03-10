import React from 'react'

const DiagnosisItem = ({ title, icd }) => {
    return (
        <div className='sidebar-diagnosis-item'>
            <p className='diagnosis-title'>{title}</p>
            <div className='d-flex align-items-center sidebar-icd-block'>
                <p className='diagnosis-icd'>ICD</p>
                <p className='diagnosis-num'>{icd}</p>
            </div>
        </div>
    );
};

export default DiagnosisItem;

