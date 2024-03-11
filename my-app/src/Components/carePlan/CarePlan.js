import React from 'react'
import CarePlanList from './CarePlanList'
import Container from 'react-bootstrap/Container';
import '../../styles/careplan.css';
import '../../styles/patientinformation.css'

const CarePlan = () => {
  return (
    <div className='content-column'>
      <Container>
        <div className='title-bar'>
          <div className='title-bar-block'>
            <a href='#patient' className='nav-icon back'>
            </a>
            <div className='title-grid-block'>
              <h1>Care Plan</h1>
            </div>
          </div>
        </div>
      <CarePlanList/>
      </Container>
      </div>
  )
}

export default CarePlan