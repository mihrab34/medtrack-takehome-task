import React from 'react';
import Card from 'react-bootstrap/Card';
import '../../styles/patientinformation.css'
import DiagnosisItem from './DiagnosisItem';
import ReportAttachment from './ReportAttachment';
import PatientProfile from './PatientProfile';
import PhysicianBlock from './PhysicianBlock';
import DiagnosticsCard from './DiagnosticsCard';
import Timestamp from './Timestamp';
import TreatmentPlan from './TreatmentPlan';
import Notes from './Notes';

const diagnostics = ['FBC', 'Lorem Ipsum', 'Lorem Pi', 'BPL']



// Main PatientInformation component
const PatientInformation = () => {
    return (
        <div className='sidebar'>
            <div className='side-title d-flex justify-content-center align-items-center'>
                <p className='side-label'>Patient Information</p>
            </div>
            <div className='w-100'>
                <div className='patient-side-profile w-100 flex-column align-items-center justify-content-start'>
                    {/* Patient profile details */}
                    <PatientProfile
                    name='Henry Cooper'
                    id='GH 877 964 2877'
                    avatarSrc='images/MedTrack_User_Male_03.jpeg'
                />
                </div>
                <div className='side-visit-record'>
                    {/* Physician block */}
                    <PhysicianBlock name='Dr Adam Newman' label='Physician' />
                </div>

                <div className='sidebar-scroll-track'>
                    {/* Diagnosis card */}
                    <Card className='w-100'>
                        <Card.Body>
                            <Card.Title>Diagnosis</Card.Title>
                            <Card.Text>
                                {/* Diagnosis items */}
                                <DiagnosisItem title='Urticaria Due To Cold And Heat' icd='U202' />
                                <DiagnosisItem title='Cold Injury Syndrome' icd='L502' />
                                <DiagnosisItem title='Chronic pain due to trauma' icd='G8921' />
                                {/* Time stamp */}
                                <Timestamp timestamp='TODAY • 2:15 PM' />
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='w-100'>
                        <Card.Body>
                            <Card.Title>Physician Treatment Plan</Card.Title>
                            <Card.Text>
                                {/* Physician Treatment Plan card */}
                                <TreatmentPlan content='No data recorded for this encounter' />
                                
                                {/* Time stamp */}
                                <Timestamp timestamp='2ND JAN 2024 • 2:15 PM' />
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='w-100'>
                        <Card.Body>
                        <Card.Title>Diagnostics</Card.Title>
                            
                            <Card.Text>
                                {/* Diagnostics card */}
                                <DiagnosticsCard diagnostics={diagnostics} />
                            </Card.Text>

                            <Card.Title>Report</Card.Title>
                            <Card.Text>
                                {/* Reports card */}
                                <ReportAttachment label='Full_checkup_report...' size='237.32 kb' />
                                <ReportAttachment label='Full_checkup_report...' size='237.32 kb' />
                                {/* Time stamp */}
                                <Timestamp timestamp='2ND JAN 2024 • 2:15 PM' />
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    
                    <Card className='w-100'>
                        <Card.Body>
                            <Card.Title>Notes</Card.Title>
                            <Card.Text>
                                
                                
                                {/* Time stamp */}
                                <Timestamp timestamp='2ND JAN 2024 • 1:30 PM' />
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='w-100'>
                        <Card.Body>
                            <Card.Title>Notes</Card.Title>
                            <Card.Text>
                                {/* Notes card */}
                                <Notes content='Define empty state status and needed action if required' />
                                <Notes content='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'/>
                                {/* Time stamp */}
                                <Timestamp timestamp='2ND JAN 2024 • 1:30 PM' />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                    
                    
                    
                </div>
            </div>
        </div>
    );
};

export default PatientInformation;
