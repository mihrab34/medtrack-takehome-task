import React from 'react';

const ReportAttachment = ({ label, size }) => {
    return (
        <div className="sidebar-wrapper padding attachments">
              <div className="attachment-block sidebar w-clearfix">
                <div className="attachmen-icon"></div>
                <div className="attachment-detail-block">
                  <div className="label-h1 sidebar">{label}</div>
                  <div className="label-h2 sidebar">{size}</div>
                </div>
              </div>
            </div>
    );
};

export default ReportAttachment