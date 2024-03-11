import React from 'react'
import '../../styles/careplanlist.css';
import ReviewTeam from './ReviewTeam';
import CarePlanAction from './CarePlanAction';

const CarePlanList = () => {
  return (
    <div className='content-container plan-review'>
      <div className='careplan-wrapper ended d-flex'>
        <div className='review-generated-column'>
          <div className='review-time-stamp-wrapper careplan'>
            <p className='review-team-label-copy'>Review generated at</p>
            <p class="review-time-stamp">7:30 PM</p>
          </div>
          <div class="review-team-wrapper careplan">
                 <ReviewTeam /> 
          </div>
        </div>
        <div className='careplan-action-column'>
          <CarePlanAction />
        </div>
      </div>
    </div>
  )
}

export default CarePlanList;