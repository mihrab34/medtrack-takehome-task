import React from 'react';
import '../../styles/main.css';
import CarePlanList from './CarePlanList';

const CarePlan = ({handleButtonClick}) => {
  return (
    <div className="content-column sidebar">
      <div className="container sidebar">
        <div className="title-bar sidebar review">
          <div className="title-bar-block review-detials">
            <div className="title-bar-block review-bar">
              <div data-w-id="4415eedb-f0b9-bb57-e355-13ea7e9cdd36" className="navbar-menu-button"><img src="images/menu-03.svg" loading="lazy" alt="" className="navbar-menu-icon" /></div>
              <a href="in-patients.html" className="nav-icon back w-inline-block"></a>
              <div className="title-grid-block">
                <div className="nav-title-h1">Care Plan</div>
              </div>
            </div>
          </div>
          <a href="notifications.html" className="save-status w-inline-block">
            <div className="save-indicator-block"><img src="images/ic-saved.svg" loading="lazy" alt="" className="save-icon" />
              <div className="save-state"></div>
            </div>
          </a>
        </div>
        <div className="data-container careplan-canvas">
          <div className="content-container crumps w-clearfix">
            <div className="breadcrumps-wrapper">
              <a href="in-patients.html" className="breadcrumps-link-block home w-inline-block">
                <div className="nav-icon crumpls"></div>
              </a>
              <div className="breadcrumps-link-wrapper w-clearfix">
                <div className="breadcrumps-seperator">
                  <div className="breadcrumps-label">/</div>
                </div>
                <a href="encounter.html" className="breadcrumps-link-block w-inline-block">
                  <div className="breadcrumps-label">Encounter</div>
                </a>
              </div>
              <div className="breadcrumps-link-wrapper w-clearfix">
                <div className="breadcrumps-seperator">
                  <div className="breadcrumps-label">/</div>
                </div>
                <a href="care-plan.html" aria-current="page" className="breadcrumps-link-block w-inline-block w--current">
                  <div className="breadcrumps-label">Care Plan</div>
                </a>
              </div>
            </div>
          </div>
          <div className="content-container plan-review">
            <div className="careplan-wrapper ended">
              <div className="review-generated-column">
                <div className="review-time-stamp-wrapper careplan">
                  <div className="review-team-label-copy">Review generated at</div>
                  <div className="review-time-stamp">7:30 PM</div>
                </div>
                <div className="review-team-wrapper null">
                  <div className="review-team-label">Team</div>
                  <div className="review-team-block">
                    <div className="review-team-avatar"></div>
                    <div className="review-team-member">Adam Newman</div>
                    <div className="review-team-designation">MD</div>
                  </div>
                </div>
                <div className="review-team-wrapper careplan">
                  <div data-w-id="ddb00282-5378-2e14-c821-2bca81676870" className="exapnad w-clearfix">
                    <div className="diagnosis-record-label">Expand</div>
                    <div data-w-id="ddb00282-5378-2e14-c821-2bca81676873" className="nav-icon collapse"></div>
                  </div>
                </div>
              </div>
              <div className="careplan-action-column">
                <div className="w-layout-grid grid">
                  <div id="w-node-_27784302-667e-4b0c-0a3d-7cab369bafb1-9d17ef24" className="careplan-grid-block w-clearfix">
                    <div href="#" className="careplan-list">
                      <div className="careplan-avatar"></div>
                      <div className="detail-list-block careplan">
                        <div className="patient-name">Discharge Review<br/></div>
                        <div className="secondary-label">28th Jan 2023</div>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-_27784302-667e-4b0c-0a3d-7cab369bafbc-9d17ef24" className="data-time-stamp-copy">
                    <div className="data-stamp">
                      <div className="secondary-label-copy">Last updated</div>
                      <div className="review-updated ongoing w-clearfix">Ongoing</div>
                    </div>
                    <div className="data-stamp">
                      <div className="secondary-label">Updated by</div>
                      <div className="text-block w-clearfix">Sandra</div>
                    </div>
                  </div>
                  <div id="w-node-_85afbe05-42b3-7846-6bd8-f8267627a114-9d17ef24" className="expand-review">
                    <a href="/" data-w-id="fdfe12d8-0cdd-c517-62cf-523981699d03" className="button-primary title-copy w-button" onClick={handleButtonClick}>Continue</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-wrapper">
              <div className="review-row-header w-clearfix">
                <div className="review-empty-header"></div>
                <div className="review-heading-bar h-e">
                  <div className="review-team-block"><img src="images/ic-HE-Findings.svg" loading="lazy" alt="" className="review-header-icon"/>
                    <div className="review-header-label">History &amp; Exams Notes</div>
                  </div>
                </div>
                <div className="review-heading-bar mdication">
                  <div className="review-team-block"><img src="images/ic-pill_1ic-pill.png" loading="lazy" alt="" className="review-header-icon"/>
                    <div className="review-header-label">Medications</div>
                  </div>
                </div>
                <div className="review-heading-bar diagnostics">
                  <div className="review-team-block"><img src="images/ic-labs.svg" loading="lazy" alt="" className="review-header-icon"/>
                    <div className="review-header-label">Diagnostics</div>
                  </div>
                </div>
                <div className="review-heading-bar vitals">
                  <div className="review-team-block"><img src="images/ic-activity.svg" loading="lazy" alt="" className="review-header-icon" />
                    <div className="review-header-label">Vitals</div>
                  </div>
                </div>
              </div>
              <div className="review-content-block w-clearfix">
                <div className="review-time-stamp-column timeline">
                  <div className="timeline-wrapper-current"><img src="images/Timeline-Head-Current.svg" loading="lazy" alt="" className="timeline-head-current"/>
                    <div className="timeline-current"></div>
                  </div>
                  <div className="review-team-wrapper">
                    <div className="review-team-label">Team</div>
                    <div className="review-team-block">
                      <div className="review-team-avatar-2"></div>
                      <div className="review-team-member">Adam Newman</div>
                      <div className="review-team-designation">MD</div>
                    </div>
                    <div className="review-team-block">
                      <div className="review-team-avatar-2"></div>
                      <div className="review-team-member">Sandra Riley</div>
                    </div>
                  </div>
                </div>
                <div className="review-column">
                  <div className="review-scroll-track">
                    <div className="review-examination-title-bar notes w-clearfix">
                      <div className="he-notes-indicator examination-notes"></div>
                      <div className="review-hisory-bar-label">Examination Notes</div>
                    </div>
                    <p>odq - fever, chills , headache, anorexia, cola collated urine has resolved.<br/>He has no dysuria, frequency of micturation.<br /><br />Examination <br />He is not pale , anicteric , hydration is satisfactory<br />chest - clinically clear<br />Abd -soft , flat<br /><br />imp - clinically stable<br />plan<br />1. discharge home <br />2. Tab Arthemeter Lumifantrin 80/480mg bd for 3 days<br />3. tab Paracetamol 1g 6 hrly<br />3. tab Zincovit 1tb daily for 14 daysPC - no necomplaints</p>
                    <div className="review-examination-title-bar diagnosis w-clearfix">
                      <div className="he-notes-indicator diagnosis"></div>
                      <div className="review-hisory-bar-label">Diagnosis</div>
                    </div>
                    <div className="review-diagnosis-item">
                      <div className="review-diagnosis-h1-label">Cold Injury Syndrome</div>
                      <div className="diagnosis-icd-block">
                        <div className="diagnosis-icd">ICD</div>
                        <div className="diagnosis-icd-number">L502</div>
                      </div>
                    </div>
                    <div className="review-diagnosis-item">
                      <div className="review-diagnosis-h1-label">Urticaria Due To Cold And Heat</div>
                      <div className="diagnosis-icd-block">
                        <div className="diagnosis-icd">ICD</div>
                        <div className="diagnosis-icd-number">U202</div>
                      </div>
                    </div>
                    <div className="review-examination-title-bar treatment-plan w-clearfix">
                      <div className="he-notes-indicator treatment-plan"></div>
                      <div className="review-hisory-bar-label">Physician Treatment Plan</div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                  </div>
                  <div className="overflow-overlay">
                    <div className="review-action-bar">
                      <div className="action-label">Expand summary</div>
                      <a href="#" data-w-id="23fea9ed-ea11-d540-e0f2-07e15806d54f" className="button-primary action w-button">Expand</a>
                    </div>
                  </div>
                </div>
                <div className="review-column">
                  <div className="review-scroll-track">
                    <div className="review-medication-wrapper">
                      <div className="review-medication-label">Tab. Arthemeter Lumifantrin </div>
                      <div className="review-dosage-info w-clearfix">
                        <div className="review-medication-dosage dosage">80/480 mg</div>
                        <div className="review-medication-dosage route">Oral</div>
                        <div className="review-medication-dosage freq">BID</div>
                        <div className="review-medication-dosage duration">3 of 7 days</div>
                      </div>
                    </div>
                    <div className="review-medication-wrapper">
                      <div className="review-medication-label">Tab. Arthemeter Lumifantrin </div>
                      <div className="review-dosage-info w-clearfix">
                        <div className="review-medication-dosage dosage">80/480 mg</div>
                        <div className="review-medication-dosage route">Oral</div>
                        <div className="review-medication-dosage freq">BID</div>
                        <div className="review-medication-dosage duration">3 of 7 days</div>
                      </div>
                    </div>
                    <div className="review-medication-wrapper">
                      <div className="review-medication-label">Tab. Arthemeter Lumifantrin </div>
                      <div className="review-dosage-info w-clearfix">
                        <div className="review-medication-dosage dosage">80/480 mg</div>
                        <div className="review-medication-dosage route">Oral</div>
                        <div className="review-medication-dosage freq">BID</div>
                        <div className="review-medication-dosage duration">3 of 7 days</div>
                      </div>
                    </div>
                    <div className="review-medication-wrapper">
                      <div className="review-medication-label">Tab. Arthemeter Lumifantrin </div>
                      <div className="review-dosage-info w-clearfix">
                        <div className="review-medication-dosage dosage">80/480 mg</div>
                        <div className="review-medication-dosage route">Oral</div>
                        <div className="review-medication-dosage freq">BID</div>
                        <div className="review-medication-dosage duration">3 of 7 days</div>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-overlay">
                    <div className="review-action-bar">
                      <div className="action-label">View details</div>
                      <a href="#" data-w-id="23fea9ed-ea11-d540-e0f2-07e15806d587" className="button-primary action w-button">View</a>
                    </div>
                  </div>
                </div>
                <div className="review-column">
                  <div className="review-scroll-track w-clearfix">
                    <div className="reviews-dia-pill">
                      <div className="diagnostic-label-2">FBC</div>
                    </div>
                    <div className="reviews-dia-pill">
                      <div className="diagnostic-label-2">Lorem ipsum</div>
                    </div>
                    <div className="reviews-dia-pill">
                      <div className="diagnostic-label-2">Lorem Pl</div>
                    </div>
                    <div className="reviews-dia-pill">
                      <div className="diagnostic-label-2">BPL</div>
                    </div>
                  </div>
                  <div className="overflow-overlay">
                    <div className="review-action-bar">
                      <div className="action-label">View reports</div>
                      <a href="#" data-w-id="23fea9ed-ea11-d540-e0f2-07e15806d59b" className="button-primary action w-button">Open</a>
                    </div>
                  </div>
                </div>
                <div className="review-column">
                  <div className="review-scroll-track">
                    <div className="review-vital-stamp">Current</div>
                    <div className="review-vital-wrapper w-clearfix">
                      <div className="review-vital-unit w-clearfix">
                        <div className="review-field-label-2">FBS</div>
                        <div className="review-vital-block-2">
                          <div className="unit-unit-label-recorded">32</div>
                          <div className="unit-unit-label-2 unit-records">°C</div>
                        </div>
                      </div>
                      <div className="review-vital-unit w-clearfix">
                        <div className="review-field-label-2">FBS</div>
                        <div className="review-vital-block-2">
                          <div className="unit-unit-label-recorded">98</div>
                          <div className="unit-unit-label-2 unit-records">BPM</div>
                        </div>
                      </div>
                      <div className="review-vital-unit">
                        <div className="review-field-label-2">Blood Pressure</div>
                        <div className="review-vital-multi-block w-clearfix">
                          <div className="review-vital-block-2 multi-left">
                            <div className="unit-unit-label-recorded">120</div>
                            <div className="unit-unit-label-2 unit-records">Sys</div>
                          </div>
                          <div className="review-vital-block-2 multi-right">
                            <div className="unit-unit-label-recorded">90</div>
                            <div className="unit-unit-label-2 unit-records">Dia</div>
                          </div>
                        </div>
                      </div>
                      <div className="review-vital-unit w-clearfix">
                        <div className="review-field-label-2">Weight</div>
                        <div className="review-vital-block-2">
                          <div className="unit-unit-label-recorded">72</div>
                          <div className="unit-unit-label-2 unit-records">Kg</div>
                        </div>
                      </div>
                      <div className="review-vital-unit w-clearfix">
                        <div className="review-field-label-2">Sp02</div>
                        <div className="review-vital-block-2">
                          <div className="unit-unit-label-recorded">98</div>
                          <div className="unit-unit-label-2 unit-records">%</div>
                        </div>
                      </div>
                      <div className="review-vital-unit w-clearfix">
                        <div className="review-field-label-2">Height</div>
                        <div className="review-vital-block-2">
                          <div className="unit-unit-label-recorded">170</div>
                          <div className="unit-unit-label-2 unit-records">cm</div>
                        </div>
                      </div>
                      <div className="review-vital-unit">
                        <div className="review-field-label-2">FBS</div>
                        <div className="review-vital-block-2">
                          <div className="unit-unit-label-recorded">5.5</div>
                          <div className="unit-unit-label-2 unit-records">mmol/L</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-overlay">
                    <div className="review-action-bar">
                      <div className="action-label">4 more records</div>
                      <a href="#" data-w-id="23fea9ed-ea11-d540-e0f2-07e15806d5e4" className="button-primary action w-button">View all</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CarePlanList />
          <CarePlanList />
          <CarePlanList />
          <CarePlanList />
          <div className="content-container-track null">
            <div className="content-container">
              <div className="title-block w-clearfix">
                <div className="heading-title">Create care plan</div>
              </div>
              <div className="unit-wrapper">
                <div className="empty-state">
                  <div className="empty-state-label-h2">Start a new care plan for this patient</div>
                </div>
              </div>
            </div>
            <div className="button-container">
              <a href="#" data-w-id="8fd91d74-e073-d1aa-fdcb-cc0ded25c6eb" className="button-primary confirm w-button">Create care plan</a>
              <a href="in-patients.html" className="button-secondary decline w-button">Cancel</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarePlan