import React from 'react';
import CarePlanAction from './CarePlanAction';
import Review from './Review';
import ReviewTeam from './ReviewTeam';

const CarePlanList = () => {
  return (
    <div className="content-container plan-review">
      <div className="careplan-wrapper ended">
        <div className="review-generated-column">
          <div className="review-time-stamp-wrapper careplan">
            <div className="review-team-label-copy">Review generated at</div>
            <div className="review-time-stamp">5:45 PM</div>
          </div>
          <ReviewTeam />
          <div className="review-team-wrapper careplan">
            <div data-w-id="ca54b561-1edd-6346-1838-01266f0a4531" className="exapnad w-clearfix">
              <div className="diagnosis-record-label">Expand</div>
              <div className="nav-icon collapse"></div>
            </div>
          </div>
        </div>
        <CarePlanAction />
      </div>
      <Review />
    </div>
  )
}

export default CarePlanList;