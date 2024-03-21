import React from 'react';
import '../../styles/patientinformation.css';
import DiagnosisItem from './DiagnosisItem';
import DiagnosticsCard from './DiagnosticsCard';
import Notes from './Notes';
import PatientProfile from './PatientProfile';
import PhysicianBlock from './PhysicianBlock';
import ReportAttachment from './ReportAttachment';
import Timestamp from './Timestamp';
import TreatmentPlan from './TreatmentPlan';

const diagnostics = ['FBC', 'Lorem Ipsum', 'Lorem Pi', 'BPL']



// Main PatientInformation component
const PatientInformation = () => {
    return (
        <div className="sidebar-column">
            <div className="side-nav-title">
                <a href="#" className="nav-icon sidebar-expand w-inline-block"></a>
                <div className="sidebar-nav-label">Patient Information</div>
            </div>
            <div className="sidebar-expand-track">
                <PatientProfile
                    name='Henry Cooper'
                    id='GH 877 964 2877'
                />
                {/* Physician block */}
                <PhysicianBlock name='Dr Adam Newman' label='Physician' />

                <div className="sidebar-scroll-track">
                    <div className="sidebar-content-container">
                        <div className="title-block-secondary w-clearfix">
                            <div className="heading-title">Diagnosis</div>
                        </div>
                        <div className="sidebar-wrapper diagnosis">
                            {/* Diagnosis items */}
                            <DiagnosisItem title='Urticaria Due To Cold And Heat' icd='ICD' icdNum='U202' />
                            <DiagnosisItem title='Cold Injury Syndrome' icd='ICD' icdNum='L502' />
                            <DiagnosisItem title='Chronic pain due to trauma' icd='ICD' icdNum='G8921' />
                            {/* Time stamp */}
                            <Timestamp timestamp='TODAY • 2:15 PM' />
                        </div>
                    </div>
                    {/* Physician Treatment Plan card */}
                    <div className="sidebar-content-container">
                        <div className="title-block-secondary w-clearfix">
                            <div className="heading-title">Physician treatment plan</div>
                        </div>
                        <TreatmentPlan content='No data recorded for this encounter' />
                        {/* Time stamp */}
                        <Timestamp timestamp='2ND JAN 2024 • 2:15 PM' />
                    </div>
                    {/* Diagnostics card */}
                    <div className="sidebar-content-container">
                        <div className="title-block-secondary w-clearfix">
                            <div className="heading-title">Diagnostics</div>
                        </div>
                        <DiagnosticsCard diagnostics={diagnostics} />
                        <div className="title-block-secondary w-clearfix">
                            <div className="heading-title">Reports</div>
                        </div>
                        {/* Reports card */}
                        <ReportAttachment label='Full_checkup_report...' size='237.32 kb' />
                        <ReportAttachment label='Full_checkup_report...' size='237.32 kb' />
                        {/* Time stamp */}
                        <Timestamp timestamp='2ND JAN 2024 • 2:15 PM' />
                    </div>
                    <div className="sidebar-content-container">
                        <div className="title-block-secondary w-clearfix">
                            <div className="heading-title">Notes</div>
                        </div>
                        {/* Notes card */}
                        <Notes content='Define empty state status and needed action if required' />
                    </div>
                    <div className="sidebar-content-container">
                        <div className="title-block-secondary w-clearfix">
                            <div className="heading-title">Notes</div>
                        </div>
                        <Notes content='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' />
                        {/* Time stamp */}
                        <Timestamp timestamp='2ND JAN 2024 • 1:30 PM' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientInformation;
