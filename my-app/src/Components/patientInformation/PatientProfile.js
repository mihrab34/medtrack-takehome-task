import React from 'react';

const PatientProfile = ({ name, id}) => {
    return (
        <div className="patient-side-profile w-clearfix">
          <div className="patient-profile-avatar henry"></div>
          <div className="patient-info-block">
            <div className="patient-name">{name}</div>
            <div className="patient-id">{id}<a href="https://medtrack-nurse-dashboard.webflow.io/#"><br/></a>
            </div>
          </div>
        </div>
    );
};

export default PatientProfile