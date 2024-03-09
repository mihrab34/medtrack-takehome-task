import React from 'react'
import Card from 'react-bootstrap/Card';
import '../styles/patientinformation.css';

const PatientInformation = () => {
    return (
        <div>
            <div>Patient Information</div>
            <div>
                <div>
                    <p>Henry Cooper</p>
                    <p>
                        GH 877 964 2877</p>
                </div>
                <div className='d-flex'>
                    <p>Dr Adam Newman</p>
                    <p>Physician</p>
                </div>
                <div></div>
                <Card style={{ width: '15rem' }}>
                    <Card.Body>
                        <Card.Title>Diagnosis</Card.Title>
                        <Card.Text>
                            Urticaria Due To Cold And<br /> Heat
                            <div className='d-flex'>
                                <p>ICD</p>
                                <p>U202</p>
                            </div>
                        </Card.Text>
                        <Card.Text>
                            Cold Injury Syndrome
                            <div className='d-flex'>
                                <p>ICD</p>
                                <p>L502</p>
                            </div>
                        </Card.Text>
                        <Card.Text>
                            Chronic pain due to trauma
                            <div className='d-flex'>
                                <p>ICD</p>
                                <p>G8921</p>
                            </div>
                        </Card.Text>
                        <div>
                        TODAY • 2:15 PM
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }}>
                    <Card.Body>
                        <Card.Title>Physician Treatment Plan</Card.Title>
                        <Card.Text>
                            No data recorded fort this encounter
                        </Card.Text>
                        
                        <div>
                        2ND JAN 2024 • 2:15 PM
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }}>
                    <Card.Body>
                        <Card.Title>Diagnostics</Card.Title>
                        <Card.Text>
                        <p>FBC</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Pi</p>
                        <p>BPL</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }}>
                    <Card.Body>
                        <Card.Title>Notes</Card.Title>
                        <Card.Text>
                        Define empty state status and needed action if required
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }}>
                    <Card.Body>
                        <Card.Title>Notes</Card.Title>
                        <Card.Text>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Card.Text>
                        
                        <div>
                        2ND JAN 2024 • 1:30 PM
                        </div>
                    </Card.Body>
                </Card>

            </div>
        </div>
    )
}

export default PatientInformation