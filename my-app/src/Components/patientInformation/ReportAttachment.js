import React from 'react'

const ReportAttachment = ({ label, size }) => {
    return (
        <div className='sidebar-diagnosis-item padding'>
            <div className='d-flex align-items-start attachment-block side'>
                <img
                    src='images/ic-file-attachment.svg'
                    alt='file attachment icon'
                    className='attachment-icon'
                />
                <div>
                    <p className='report-label'>{label}</p>
                    <p className='report-size'>{size}</p>
                </div>
            </div>
        </div>
    );
};

export default ReportAttachment