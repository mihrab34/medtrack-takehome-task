import React from 'react';
import Container from 'react-bootstrap/Container';
import '../../styles/careplan.css';
import '../../styles/patientinformation.css';
import CarePlanList from './CarePlanList';

const CarePlan = () => {
  return (
    <div className='content-column'>
        <div className='title-bar'>
          <div className='title-bar-block'>
            <a href='#patient' className='nav-icon back'>
            </a>
            <div className='title-grid-block'>
              <h1>Care Plan</h1>
            </div>
          </div>
        </div>
        <Container>
      <CarePlanList/>
      </Container>
      </div>
  )
}

export default CarePlan