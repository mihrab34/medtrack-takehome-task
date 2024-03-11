import React from "react";
import { Link } from "react-router-dom";
import '../../styles/careplanlist.css';

const CarePlanAction = () => {
  return (
    <div className="row">
      <div className="col-4">
        <div href="#" className="careplan-list">
          <div className="careplan-avatar"></div>
          <div className="detail-list-block careplan">
            <div className="patient-name">
              Discharge Review
              <br />
            </div>
            <div className="secondary-label">28th Jan 2023</div>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="data-stamp d-flex">
          <div className="secondary-label">Last<br/> updated</div>
          <div className="review-updated ongoing">Ongoing</div>
        </div>
        <div className="data-stamp d-flex">
          <div className="secondary-label">Updated by</div>
          <div className="text-block">Sandra</div>
        </div>
      </div>
      <div className="col-4">
      <Link href="#" className="button-primary title-copy ">Continue</Link>
      </div>
    </div>
  );
};

export default CarePlanAction;
