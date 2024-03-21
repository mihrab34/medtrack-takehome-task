import React from 'react';

const DiagnosisItem = ({ title, icd, icdNum }) => {
    return (
        <div className="sidebar-diagnosis-item">
                <div className="sidebar-diagnosis-h1">{title}</div>
                <div className="sidebar-icd-block">
                  <div className="diagnosis-icd">{icd}</div>
                  <div className="sidebar-icd-number">{icdNum}</div>
                </div>
              </div>
    );
};

export default DiagnosisItem;

