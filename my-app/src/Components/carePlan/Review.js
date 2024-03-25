import React from 'react'

const Review = () => {
    return (
        <div style={{ display: "none", height: 0 + "px", opacity: 0 }} className="review-wrapper">
            <div className="review-row-header w-clearfix">
                <div className="review-empty-header"></div>
                <div className="review-heading-bar h-e">
                    <div className="review-team-block"><img src="images/ic-HE-Findings.svg" loading="lazy" alt="" className="review-header-icon" />
                        <div className="review-header-label">History &amp; Exams Notes</div>
                    </div>
                </div>
                <div className="review-heading-bar mdication">
                    <div className="review-team-block"><img src="images/ic-pill_1ic-pill.png" loading="lazy" alt="" className="review-header-icon" />
                        <div className="review-header-label">Medications</div>
                    </div>
                </div>
                <div className="review-heading-bar diagnostics">
                    <div className="review-team-block"><img src="images/ic-labs.svg" loading="lazy" alt="" className="review-header-icon" />
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
                    <div className="timeline-wrapper-current"><img src="images/Timeline-Head-Current.svg" loading="lazy" alt="" className="timeline-head-current" />
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
                        <p>odq - fever, chills , headache, anorexia, cola collated urine has resolved.<br />He has no dysuria, frequency of micturation.<br /><br />Examination <br />He is not pale , anicteric , hydration is satisfactory<br />chest - clinically clear<br />Abd -soft , flat<br /><br />imp - clinically stable<br />plan<br />1. discharge home <br />2. Tab Arthemeter Lumifantrin 80/480mg bd for 3 days<br />3. tab Paracetamol 1g 6 hrly<br />3. tab Zincovit 1tb daily for 14 daysPC - no necomplaints</p>
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
                            <a href="#" data-w-id="7c6ba30a-4767-816c-0f5a-6ea83e576b5d" className="button-primary action w-button">Expand</a>
                        </div>
                    </div>
                </div>
                <div className="review-column empty">
                    <div className="review-empty-label">No medications ordered</div>
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
                            <a href="#" data-w-id="7c6ba30a-4767-816c-0f5a-6ea83e576ba9" className="button-primary action w-button">Open</a>
                        </div>
                    </div>
                </div>
                <div className="review-column">
                    <div className="review-scroll-track">
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
                            <a href="#" data-w-id="7c6ba30a-4767-816c-0f5a-6ea83e576bf2" className="button-primary action w-button">View all</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review