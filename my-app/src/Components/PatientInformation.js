import React from 'react'
import Card from 'react-bootstrap/Card';
import '../styles/patientinformation.css';
import { Link } from 'react-router-dom';

const PatientInformation = () => {
    return (
        <div className='sidebar'>
            <div className='side-title d-flex justify-content-center align-items-center'>
                <p className='side-label'>Patient Information</p>
            </div>
            <div className='w-100'>
                <div className='patient-side-profile w-100 flex-column align-items-center justify-content-start'>
                    <img
                        src='images/MedTrack_User_Male_03.jpeg'
                        alt='male user avatar'
                        className='patient-avatar' />

                    <p className='patient-name'>Henry Cooper</p>
                    <p className='patient-id'> GH 877 964 2877</p>
                </div>
                <div className='side-visit-record'>
                    <div className='side-physician-block'>
                        <p className='side-physician'>Dr Adam Newman</p>
                        <p className='side-physician-label'>Physician</p>
                    </div>
                    <Link href='#' className='d-flex justify-content-start align-items-start encounter-block side'>
                        <img src='images/file-05.svg' alt='file' className='encounter-icon' />
                        <div className='detail-block'>
                            <p className='detail-name'>Encounter At D.L Hospital</p>
                            <p className='detail-date'>28th Jan 2023</p>
                        </div>
                    </Link>
                </div>

                <div className='sidebar-scroll-track'>
                    <Card className='w-100'>
                        <Card.Body>
                            <Card.Title>Diagnosis</Card.Title>
                            <Card.Text>
                                <div className='sidebar-diagnosis-item'>
                                    <p className='diagnosis-title'>Urticaria Due To Cold And<br /> Heat</p>
                                    <div className='d-flex align-items-center sidebar-icd-block'>
                                        <p className='diagnosis-icd'>ICD</p>
                                        <p className='diagnosis-num'>U202</p>
                                    </div>
                                </div>
                                <div className='sidebar-diagnosis-item'>
                                   <p className='diagnosis-title'> Cold Injury Syndrome</p>
                                    <div className='d-flex  align-items-center sidebar-icd-block'>
                                        <p className='diagnosis-icd'>ICD</p>
                                        <p className='diagnosis-num'>L502</p>
                                    </div>
                                </div>
                                <div className='sidebar-diagnosis-item'>
                                    <p className='diagnosis-title'>Chronic pain due to trauma</p>
                                    <div className='d-flex  align-items-center sidebar-icd-block'>
                                        <p className='diagnosis-icd'>ICD</p>
                                        <p className='diagnosis-num'>G8921</p>
                                    </div>
                                </div>
                                <div className='sidebar-time-stamp card-title'>
                                    TODAY • 2:15 PM
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='w-100'>
                        <Card.Body>
                            <Card.Title>Physician Treatment Plan</Card.Title>
                            <Card.Text>
                                <div className='sidebar-diagnosis-item padding'>
                                    <div className='empty-state'>
                                    No data recorded for this encounter
                                    </div>
                                </div>
                                <div className='sidebar-time-stamp card-title'>
                                    2ND JAN 2024 • 2:15 PM
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='w-100'>
                        <Card.Body>
                            <Card.Title>Diagnostics</Card.Title>
                            <Card.Text>
                                <div className='sidebar-diagnosis-item padding diagnostics'>
                                <p className='diagnostics-added'>FBC</p>
                                <p className='diagnostics-added'>Lorem Ipsum</p>
                                <p className='diagnostics-added'>Lorem Pi</p>
                                <p className='diagnostics-added'>BPL</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Reports</Card.Title>
                            <Card.Text>
                            <div className='sidebar-diagnosis-item padding'>
                                <p>FBC</p>
                                <p>Lorem Ipsum</p>
                                <p>Lorem Pi</p>
                                <p>BPL</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='w-100'>
                        <Card.Body>
                            <Card.Title>Notes</Card.Title>
                            <Card.Text>
                                <div className='sidebar-diagnosis-item padding'>
                                    <div className='empty-state'>
                                    Define empty state status and needed action if required
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='w-100'>
                        <Card.Body>
                            <Card.Title>Notes</Card.Title>
                            <Card.Text>
                                <div className='sidebar-diagnosis-item padding'>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div className='sidebar-time-stamp card-title'>
                                    2ND JAN 2024 • 1:30 PM
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default PatientInformation