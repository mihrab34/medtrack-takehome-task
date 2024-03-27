import React from 'react';

const CarePlanDetails = () => {
    const inlineStyle = {
        display: 'none',
        opacity: 0,
        WebkitTransform: 'translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
        MozTransform: 'translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
        msTransform: 'translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
        transform: 'translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
    };

    return (
        <>
            <div style={inlineStyle} className="modal-capture-vitals">
                <div className="modal-block medication">
                    <div className="modal-title-block w-clearfix">
                        <div className="heading-title">Patient vitals</div>
                    </div>
                    <div className="modal-item-wrapper">
                        <div className="vitals-form-container w-form">
                            <form id="wf-form-Vitals-Form-Wrapper" name="wf-form-Vitals-Form-Wrapper" data-name="Vitals-Form-Wrapper" method="get" className="set-med-form-wrapper" data-wf-page-id="63fb3a9a8bb3690a8717ef25" data-wf-element-id="1f09e78a-0f82-3a04-c222-8a6f253dfbb3">
                                <div className="instruction-block w-clearfix"><label for="email" className="unit-field-label">Temperature</label>
                                    <div className="vitals-unit w-clearfix"><input className="vital-input w-input" maxlength="256" name="Vital-Input" data-name="Vital Input" placeholder="" type="number" id="Vital-Input-3" />
                                        <div className="vital-unit">
                                            <div className="vital-unit-label">°C</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="instruction-block w-clearfix"><label for="email" className="unit-field-label">Heart Rate</label>
                                    <div className="vitals-unit w-clearfix"><input className="vital-input w-input" maxlength="256" name="Vital-Input" data-name="Vital Input" placeholder="" type="number" id="Vital-Input-3" />
                                        <div className="vital-unit">
                                            <div className="vital-unit-label">BPM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="instruction-block"><label for="email" className="unit-field-label">Blood Pressure</label>
                                    <div className="vitals-multi-wrapper w-clearfix">
                                        <div className="vitals-unit multi-left w-clearfix"><input className="vital-input _01 w-input" maxlength="256" name="Vital-Input-Multi" data-name="Vital Input Multi" placeholder="" type="number" id="Vital-Input-Multi" />
                                            <div className="vital-unit _01">
                                                <div className="vital-unit-label">Sys</div>
                                            </div>
                                        </div>
                                        <div className="vitals-unit multi-right w-clearfix"><input className="vital-input _02 w-input" maxlength="256" name="Vital-Input-Multi" data-name="Vital Input Multi" placeholder="" type="number" id="Vital-Input-Multi-2" />
                                            <div className="vital-unit">
                                                <div className="vital-unit-label">Dia</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="instruction-block w-clearfix"><label for="email" className="unit-field-label">Weight</label>
                                    <div className="vitals-unit w-clearfix"><input className="vital-input w-input" maxlength="256" name="Vital-Input" data-name="Vital Input" placeholder="" type="number" id="Vital-Input-3" />
                                        <div className="vital-unit">
                                            <div className="vital-unit-label">Kg</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="instruction-block w-clearfix"><label for="email" className="unit-field-label">SpO2</label>
                                    <div className="vitals-unit w-clearfix"><input className="vital-input w-input" maxlength="256" name="Vital-Input" data-name="Vital Input" placeholder="" type="number" id="Vital-Input-3" />
                                        <div className="vital-unit">
                                            <div className="vital-unit-label">%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="instruction-block w-clearfix"><label for="email" className="unit-field-label">Height</label>
                                    <div className="vitals-unit w-clearfix"><input className="vital-input w-input" maxlength="256" name="Vital-Input" data-name="Vital Input" placeholder="" type="number" id="Vital-Input-3" />
                                        <div className="vital-unit">
                                            <div className="vital-unit-label">cm</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="instruction-block w-clearfix"><label for="email" className="unit-field-label">FBS</label>
                                    <div className="vitals-unit w-clearfix"><input className="vital-input w-input" maxlength="256" name="Vital-Input" data-name="Vital Input" placeholder="" type="number" id="Vital-Input-3" />
                                        <div className="vital-unit">
                                            <div className="vital-unit-label">mmol/L</div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action-block">
                        <a href="#" data-w-id="ac7c201c-235e-3031-5a30-c338f9ed03d0" className="button-primary modal w-button">Done</a>
                        <a href="#" data-w-id="ac7c201c-235e-3031-5a30-c338f9ed03d2" className="button-secondary modal w-button">Cancel</a>
                    </div>
                </div>
            </div>
            <div style={inlineStyle} className="modal-vital-records">
                <div className="modal-block vitals">
                    <div className="modal-title-block w-clearfix">
                        <div className="heading-title">Vitals</div>
                    </div>
                    <div className="modal-review-data-wrapper">
                        <div className="modal-review-date">
                            <div className="review-time-stamp">14th Jul 2022</div>
                        </div>
                        <div className="modal-review-wrapper w-clearfix">
                            <div className="modal-review-time-colum vitals">
                                <div className="review-time-stamp-wrapper">
                                    <div className="review-date-stamp">7:30 PM</div>
                                </div>
                                <div className="review-team-wrapper vitals">
                                    <div className="review-team-label">Team</div>
                                    <div className="review-team-block">
                                        <div className="review-team-avatar"></div>
                                        <div className="review-team-member">Sandra Riley</div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-review-vitals-data vitals">
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Temp</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">36</div>
                                        <div className="unit-unit-label-2">°C</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Heart Rate</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">98</div>
                                        <div className="unit-unit-label-2 unit-records">BPM</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit">
                                    <div className="review-field-label">Blood Pressure</div>
                                    <div className="review-vital-multi-block w-clearfix">
                                        <div className="review-vital-block multi-left">
                                            <div className="unit-unit-label-recorded">120</div>
                                            <div className="unit-unit-label-2 unit-records">Sys</div>
                                        </div>
                                        <div className="review-vital-block multi-right">
                                            <div className="unit-unit-label-recorded">120</div>
                                            <div className="unit-unit-label-2 unit-records">Sys</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Weight</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">72</div>
                                        <div className="unit-unit-label-2 unit-records">Kg</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Sp02</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">98</div>
                                        <div className="unit-unit-label-2 unit-records">%</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Height</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">170</div>
                                        <div className="unit-unit-label-2 unit-records">cm</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">FBS</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">5.5</div>
                                        <div className="unit-unit-label-2 unit-records">mmol/L</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-review-wrapper alt w-clearfix">
                            <div className="modal-review-time-colum vitals">
                                <div className="review-time-stamp-wrapper">
                                    <div className="review-date-stamp">5:45 PM</div>
                                </div>
                                <div className="review-team-wrapper vitals">
                                    <div className="review-team-label">Team</div>
                                    <div className="review-team-block">
                                        <div className="review-team-avatar"></div>
                                        <div className="review-team-member">Sandra Riley</div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-review-vitals-data vitals">
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Temp</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">36</div>
                                        <div className="unit-unit-label-2 unit-records">°C</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Heart Rate</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">98</div>
                                        <div className="unit-unit-label-2 unit-records">BPM</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit">
                                    <div className="review-field-label">Blood Pressure</div>
                                    <div className="review-vital-multi-block w-clearfix">
                                        <div className="review-vital-block multi-left">
                                            <div className="unit-unit-label-recorded">120</div>
                                            <div className="unit-unit-label-2 unit-records">Sys</div>
                                        </div>
                                        <div className="review-vital-block multi-right">
                                            <div className="unit-unit-label-recorded">120</div>
                                            <div className="unit-unit-label-2 unit-records">Sys</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Weight</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">72</div>
                                        <div className="unit-unit-label-2 unit-records">Kg</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Sp02</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">98</div>
                                        <div className="unit-unit-label-2 unit-records">%</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Height</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">170</div>
                                        <div className="unit-unit-label-2 unit-records">cm</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">FBS</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">5.5</div>
                                        <div className="unit-unit-label-2 unit-records">mmol/L</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-review-wrapper w-clearfix">
                            <div className="modal-review-time-colum vitals">
                                <div className="review-time-stamp-wrapper">
                                    <div className="review-date-stamp">11:30 AM</div>
                                </div>
                                <div className="review-team-wrapper vitals">
                                    <div className="review-team-label">Team</div>
                                    <div className="review-team-block">
                                        <div className="review-team-avatar"></div>
                                        <div className="review-team-member">Belinda Adams</div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-review-vitals-data vitals">
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Temp</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">36</div>
                                        <div className="unit-unit-label-2 unit-records">°C</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Heart Rate</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">98</div>
                                        <div className="unit-unit-label-2 unit-records">BPM</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit">
                                    <div className="review-field-label">Blood Pressure</div>
                                    <div className="review-vital-multi-block w-clearfix">
                                        <div className="review-vital-block multi-left">
                                            <div className="unit-unit-label-recorded">120</div>
                                            <div className="unit-unit-label-2 unit-records">Sys</div>
                                        </div>
                                        <div className="review-vital-block multi-right">
                                            <div className="unit-unit-label-recorded">120</div>
                                            <div className="unit-unit-label-2 unit-records">Sys</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Weight</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">72</div>
                                        <div className="unit-unit-label-2 unit-records">Kg</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Sp02</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">98</div>
                                        <div className="unit-unit-label-2 unit-records">%</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Height</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">170</div>
                                        <div className="unit-unit-label-2 unit-records">cm</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">FBS</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">5.5</div>
                                        <div className="unit-unit-label-2 unit-records">mmol/L</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-review-data-wrapper">
                        <div className="modal-review-date">
                            <div className="review-time-stamp">14th Jul 2022</div>
                        </div>
                        <div className="modal-review-wrapper w-clearfix">
                            <div className="modal-review-time-colum vitals">
                                <div className="review-time-stamp-wrapper">
                                    <div className="review-date-stamp">7:30 PM</div>
                                </div>
                                <div className="review-team-wrapper vitals">
                                    <div className="review-team-label">Team</div>
                                    <div className="review-team-block">
                                        <div className="review-team-avatar"></div>
                                        <div className="review-team-member">Sandra Riley</div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-review-vitals-data vitals">
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Temp</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">36</div>
                                        <div className="unit-unit-label-2">°C</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Heart Rate</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">98</div>
                                        <div className="unit-unit-label-2 unit-records">BPM</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit">
                                    <div className="review-field-label">Blood Pressure</div>
                                    <div className="review-vital-multi-block w-clearfix">
                                        <div className="review-vital-block multi-left">
                                            <div className="unit-unit-label-recorded">120</div>
                                            <div className="unit-unit-label-2 unit-records">Sys</div>
                                        </div>
                                        <div className="review-vital-block multi-right">
                                            <div className="unit-unit-label-recorded">120</div>
                                            <div className="unit-unit-label-2 unit-records">Sys</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Weight</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">72</div>
                                        <div className="unit-unit-label-2 unit-records">Kg</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Sp02</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">98</div>
                                        <div className="unit-unit-label-2 unit-records">%</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Height</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">170</div>
                                        <div className="unit-unit-label-2 unit-records">cm</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">FBS</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">5.5</div>
                                        <div className="unit-unit-label-2 unit-records">mmol/L</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-review-wrapper alt w-clearfix">
                            <div className="modal-review-time-colum vitals">
                                <div className="review-time-stamp-wrapper">
                                    <div className="review-date-stamp">5:45 PM</div>
                                </div>
                                <div className="review-team-wrapper vitals">
                                    <div className="review-team-label">Team</div>
                                    <div className="review-team-block">
                                        <div className="review-team-avatar"></div>
                                        <div className="review-team-member">Sandra Riley</div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-review-vitals-data vitals">
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Temp</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">36</div>
                                        <div className="unit-unit-label-2 unit-records">°C</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Heart Rate</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">98</div>
                                        <div className="unit-unit-label-2 unit-records">BPM</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit">
                                    <div className="review-field-label">Blood Pressure</div>
                                    <div className="review-vital-multi-block w-clearfix">
                                        <div className="review-vital-block multi-left">
                                            <div className="unit-unit-label-recorded">120</div>
                                            <div className="unit-unit-label-2 unit-records">Sys</div>
                                        </div>
                                        <div className="review-vital-block multi-right">
                                            <div className="unit-unit-label-recorded">120</div>
                                            <div className="unit-unit-label-2 unit-records">Sys</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Weight</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">72</div>
                                        <div className="unit-unit-label-2 unit-records">Kg</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Sp02</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">98</div>
                                        <div className="unit-unit-label-2 unit-records">%</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Height</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">170</div>
                                        <div className="unit-unit-label-2 unit-records">cm</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">FBS</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">5.5</div>
                                        <div className="unit-unit-label-2 unit-records">mmol/L</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-review-wrapper w-clearfix">
                            <div className="modal-review-time-colum vitals">
                                <div className="review-time-stamp-wrapper">
                                    <div className="review-date-stamp">11:30 AM</div>
                                </div>
                                <div className="review-team-wrapper vitals">
                                    <div className="review-team-label">Team</div>
                                    <div className="review-team-block">
                                        <div className="review-team-avatar"></div>
                                        <div className="review-team-member">Belinda Adams</div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-review-vitals-data vitals">
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Temp</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">36</div>
                                        <div className="unit-unit-label-2 unit-records">°C</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Heart Rate</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">98</div>
                                        <div className="unit-unit-label-2 unit-records">BPM</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit">
                                    <div className="review-field-label">Blood Pressure</div>
                                    <div className="review-vital-multi-block w-clearfix">
                                        <div className="review-vital-block multi-left">
                                            <div className="unit-unit-label-recorded">120</div>
                                            <div className="unit-unit-label-2 unit-records">Sys</div>
                                        </div>
                                        <div className="review-vital-block multi-right">
                                            <div className="unit-unit-label-recorded">120</div>
                                            <div className="unit-unit-label-2 unit-records">Sys</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Weight</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">72</div>
                                        <div className="unit-unit-label-2 unit-records">Kg</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Sp02</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">98</div>
                                        <div className="unit-unit-label-2 unit-records">%</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">Height</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">170</div>
                                        <div className="unit-unit-label-2 unit-records">cm</div>
                                    </div>
                                </div>
                                <div className="review-vital-unit w-clearfix">
                                    <div className="review-field-label">FBS</div>
                                    <div className="review-vital-block">
                                        <div className="unit-unit-label-recorded">5.5</div>
                                        <div className="unit-unit-label-2 unit-records">mmol/L</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action-block">
                        <a href="#" data-w-id="cfa6f9ca-7201-509b-2334-e387982c5dc9" className="button-primary modal w-button">Done</a>
                    </div>
                </div>
            </div>
            <div style={inlineStyle} className="modal-medication-records">
                <div className="modal-block medication">
                    <div className="modal-title-block w-clearfix">
                        <div className="heading-title">Medication History</div>
                    </div>
                    <div className="review-medication-container">
                        <div className="modal-review-date">
                            <div className="review-time-stamp">13th Jul 2022</div>
                        </div>
                        <div className="modal-review-wrapper w-clearfix">
                            <div className="modal-review-time-colum">
                                <div className="review-time-stamp-wrapper">
                                    <div className="review-date-stamp">4:30 PM</div>
                                </div>
                            </div>
                            <div className="he-modal-data-medication">
                                <div className="modal-review-medication-wrapper">
                                    <div className="medical-history-block w-clearfix">
                                        <div className="modal-review-medication-label">Artemether-lumefantrine</div>
                                        <div className="review-medication-status dispensed">Dispensed</div>
                                    </div>
                                    <div className="review-dosage-info modal w-clearfix">
                                        <div className="review-medication-dosage dosage">200 mg</div>
                                        <div className="review-medication-dosage route">Oral</div>
                                        <div className="review-medication-dosage freq">TID</div>
                                        <div className="review-medication-dosage duration">4 of 4 days</div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-review-time-colum expand">
                                <div className="review-team-wrapper">
                                    <div className="review-team-label">Teams</div>
                                    <div className="review-team-block">
                                        <div className="review-team-avatar"></div>
                                        <div className="review-team-member">Adam Newman</div>
                                        <div className="review-team-designation">MD</div>
                                    </div>
                                    <div className="review-team-block">
                                        <div className="review-team-avatar"></div>
                                        <div className="review-team-member">Sandra Riley</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-review-wrapper w-clearfix">
                            <div className="modal-review-time-colum">
                                <div className="review-time-stamp-wrapper">
                                    <div className="review-date-stamp">1:15 PM</div>
                                </div>
                            </div>
                            <div className="he-modal-data-medication">
                                <div className="modal-review-medication-wrapper">
                                    <div className="medical-history-block w-clearfix">
                                        <div className="modal-review-medication-label">Acetaminophen</div>
                                        <div className="review-medication-status dispensed">Dispensed</div>
                                    </div>
                                    <div className="review-dosage-info modal w-clearfix">
                                        <div className="review-medication-dosage dosage">325 mg</div>
                                        <div className="review-medication-dosage route">Oral</div>
                                        <div className="review-medication-dosage freq">BID</div>
                                        <div className="review-medication-dosage duration">6 of 7 days</div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-review-time-colum expand">
                                <div className="review-team-wrapper">
                                    <div className="review-team-label">Teams</div>
                                    <div className="review-team-block">
                                        <div className="review-team-avatar"></div>
                                        <div className="review-team-member">Kofi Amoako</div>
                                        <div className="review-team-designation">MD</div>
                                    </div>
                                    <div className="review-team-block">
                                        <div className="review-team-avatar"></div>
                                        <div className="review-team-member">Berlinda Adams</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-review-wrapper w-clearfix">
                            <div className="modal-review-time-colum">
                                <div className="review-time-stamp-wrapper">
                                    <div className="review-date-stamp">9:45 PM</div>
                                </div>
                            </div>
                            <div className="he-modal-data-medication">
                                <div className="modal-review-medication-wrapper">
                                    <div className="medical-history-block w-clearfix">
                                        <div className="modal-review-medication-label">Ibuprofen</div>
                                        <div className="review-medication-status dispensed">Dispensed</div>
                                    </div>
                                    <div className="review-dosage-info modal w-clearfix">
                                        <div className="review-medication-dosage dosage">400 mg</div>
                                        <div className="review-medication-dosage route">Oral</div>
                                        <div className="review-medication-dosage freq">BID</div>
                                        <div className="review-medication-dosage duration">4 of 7 days</div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-review-time-colum expand">
                                <div className="review-team-wrapper">
                                    <div className="review-team-label">Teams</div>
                                    <div className="review-team-block">
                                        <div className="review-team-avatar"></div>
                                        <div className="review-team-member">Adam Newman</div>
                                        <div className="review-team-designation">MD</div>
                                    </div>
                                    <div className="review-team-block">
                                        <div className="review-team-avatar"></div>
                                        <div className="review-team-member">Sandra Riley</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-wrapper modal"><img src="images/Timeline-Head.svg" loading="lazy" alt="" className="timeline-head" />
                            <div className="timeline-previous"></div>
                        </div>
                    </div>
                    <div className="review-medication-container">
                        <div className="modal-review-date">
                            <div className="review-time-stamp">12th Jul 2022</div>
                        </div>
                        <div className="modal-review-wrapper w-clearfix">
                            <div className="modal-review-time-colum">
                                <div className="review-time-stamp-wrapper">
                                    <div className="review-date-stamp">7:30 PM</div>
                                </div>
                            </div>
                            <div className="he-modal-data-medication">
                                <div className="modal-review-medication-wrapper">
                                    <div className="medical-history-block w-clearfix">
                                        <div className="modal-review-medication-label">Furosemide</div>
                                        <div className="review-medication-status dispensed">Dispensed</div>
                                    </div>
                                    <div className="review-dosage-info modal w-clearfix">
                                        <div className="review-medication-dosage dosage">75mg/kg</div>
                                        <div className="review-medication-dosage route">Oral</div>
                                        <div className="review-medication-dosage freq">BID</div>
                                        <div className="review-medication-dosage duration">7 of 7 days</div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-review-time-colum expand">
                                <div className="review-team-wrapper">
                                    <div className="review-team-label">Teams</div>
                                    <div className="review-team-block">
                                        <div className="review-team-avatar"></div>
                                        <div className="review-team-member">Adam Newman</div>
                                        <div className="review-team-designation">MD</div>
                                    </div>
                                    <div className="review-team-block">
                                        <div className="review-team-avatar"></div>
                                        <div className="review-team-member">Sandra Riley</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-review-wrapper w-clearfix">
                            <div className="modal-review-time-colum">
                                <div className="review-time-stamp-wrapper">
                                    <div className="review-date-stamp">5:45 PM</div>
                                </div>
                            </div>
                            <div className="he-modal-data-medication">
                                <div className="modal-review-medication-wrapper">
                                    <div className="medical-history-block w-clearfix">
                                        <div className="modal-review-medication-label">Ramipril</div>
                                        <div className="review-medication-status dispensed">Dispensed</div>
                                    </div>
                                    <div className="review-dosage-info modal w-clearfix">
                                        <div className="review-medication-dosage dosage">150 mg</div>
                                        <div className="review-medication-dosage route">Oral</div>
                                        <div className="review-medication-dosage freq">BID</div>
                                        <div className="review-medication-dosage duration">5 of 7 days</div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-review-time-colum expand">
                                <div className="review-team-wrapper">
                                    <div className="review-team-label">Team</div>
                                    <div className="review-team-block">
                                        <div className="review-team-avatar"></div>
                                        <div className="review-team-member">Adam Newman</div>
                                        <div className="review-team-designation">MD</div>
                                    </div>
                                    <div className="review-team-block">
                                        <div className="review-team-avatar"></div>
                                        <div className="review-team-member">Berlinda Adams</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-review-wrapper w-clearfix">
                            <div className="modal-review-time-colum">
                                <div className="review-time-stamp-wrapper">
                                    <div className="review-date-stamp">11:30 AM</div>
                                </div>
                            </div>
                            <div className="he-modal-data-medication">
                                <div className="modal-review-medication-wrapper">
                                    <div className="medical-history-block w-clearfix">
                                        <div className="modal-review-medication-label">Nifedipine</div>
                                        <div className="review-medication-status stopped">stopped</div>
                                    </div>
                                    <div className="review-dosage-info modal w-clearfix">
                                        <div className="review-medication-dosage dosage">200 mg</div>
                                        <div className="review-medication-dosage route">Oral</div>
                                        <div className="review-medication-dosage freq">BID</div>
                                        <div className="review-medication-dosage duration">7 of 7 days</div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-review-time-colum expand">
                                <div className="review-team-wrapper">
                                    <div className="review-team-label">Teams</div>
                                    <div className="review-team-block">
                                        <div className="review-team-avatar"></div>
                                        <div className="review-team-member">Adam Newman</div>
                                        <div className="review-team-designation">MD</div>
                                    </div>
                                    <div className="review-team-block">
                                        <div className="review-team-avatar"></div>
                                        <div className="review-team-member">Sandra Riley</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-wrapper modal"><img src="images/Timeline-Head.svg" loading="lazy" alt="" className="timeline-head" />
                            <div className="timeline-previous"></div>
                        </div>
                    </div>
                    <div className="modal-action-block">
                        <a href="#" data-w-id="46fc68c2-b903-c101-c553-93b9b24b4314" className="button-primary modal w-button">Done</a>
                    </div>
                </div>
            </div>
            <div style={inlineStyle} className="modal-medication-schedule">
                <div className="modal-block medication-schedule">
                    <div className="review-modal-details schedule">
                        <div className="pill-wrapper">
                            <div className="list-label-tag review">Medication</div>
                            <div className="list-label-tag review">Chart</div>
                        </div>
                        <div className="review-title-block">
                            <div className="review-h1 schedule">Medication Schedule</div>
                        </div>
                        <div data-w-id="92055f4c-a572-7964-735d-6d9bba40da7c" className="modal-close"></div>
                    </div>
                    <div className="schedule-scroll-track">
                        <div className="order-expand-track">
                            <div href="#" className="schedule-title-bar w-clearfix">
                                <div className="schedule-title-bar-wrapper">
                                    <div className="schedule-due-date-label">Due Date</div>
                                    <div className="schedule-due-date">Mon, 21 Nov 2024</div>
                                </div>
                                <div data-w-id="d2e6ef41-e77f-4a03-6556-0f8cf97fe8ac" className="nav-icon float-expand"></div>
                            </div>
                            <div data-w-id="d2e6ef41-e77f-4a03-6556-0f8cf97fe8ad" className="schedule-expand-wrapper">
                                <div className="schedule-medication-wrapper">
                                    <div className="schedule-block overdue">
                                        <div className="schedule-medication-detail-wrapper">
                                            <div className="schedule-medication-item">
                                                <div className="order-medication">
                                                    <div className="medication-label-h1">Medication 01</div>
                                                </div>
                                                <div className="order-medication-dosage">
                                                    <div className="order-pill-badge-wrapper w-clearfix">
                                                        <div className="pill-badge-3 order admin">200 mg</div>
                                                        <div className="pill-badge-3 order route">Intravenous</div>
                                                        <div className="pill-badge-3 order freq">BID</div>
                                                        <div className="pill-badge-3 order dur">10 of 10 Days</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="schedule-chart-action-block">
                                            <div className="schedule-time-wrapper">
                                                <div className="schedule-time-label overdue">Overdue</div>
                                                <div className="schedule-time overdue">10:30 AM</div>
                                            </div>
                                            <a href="#" data-w-id="d2e6ef41-e77f-4a03-6556-0f8cf97fe8c5" className="button-primary schedule-btn w-button">Chart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="schedule-medication-wrapper">
                                    <div className="schedule-block">
                                        <div className="schedule-medication-detail-wrapper">
                                            <div className="schedule-medication-item">
                                                <div className="order-medication">
                                                    <div className="medication-label-h1">Medication 01</div>
                                                </div>
                                                <div className="order-medication-dosage">
                                                    <div className="order-pill-badge-wrapper w-clearfix">
                                                        <div className="pill-badge-3 order admin">200 mg</div>
                                                        <div className="pill-badge-3 order route">Intravenous</div>
                                                        <div className="pill-badge-3 order freq">BID</div>
                                                        <div className="pill-badge-3 order dur">10 of 10 Days</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-layout-grid schedule-medication-audit">
                                                <div className="schedule-team-block">
                                                    <div className="review-team-avatar"></div>
                                                    <div className="review-team-member">Berlinda Adams</div>
                                                </div>
                                                <div id="w-node-d2e6ef41-e77f-4a03-6556-0f8cf97fe8dd-8717ef25" className="schedule-charted">
                                                    <div className="medication-history-status-label">Charted • 10:54 AM</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="schedule-chart-action-block">
                                            <div className="schedule-time-wrapper">
                                                <div className="schedule-time-label">Due Time</div>
                                                <div className="schedule-time">8:45 AM</div>
                                            </div>
                                            <div className="status schedule">Pt Refused</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-expand-track">
                            <div href="#" data-w-id="d2e6ef41-e77f-4a03-6556-0f8cf97fe8e9" className="schedule-title-bar w-clearfix">
                                <div className="schedule-indicator"></div>
                                <div className="schedule-title-bar-wrapper">
                                    <div className="schedule-due-date-label">Due Date</div>
                                    <div className="schedule-due-date">Today, 22 Nov 2024</div>
                                </div>
                                <div className="nav-icon float-expand"></div>
                            </div>
                            <div className="schedule-expand-wrapper">
                                <div className="schedule-medication-wrapper">
                                    <div className="schedule-block">
                                        <div className="schedule-medication-detail-wrapper">
                                            <div className="schedule-medication-item">
                                                <div className="order-medication">
                                                    <div className="medication-label-h1">Medication 01</div>
                                                </div>
                                                <div className="order-medication-dosage">
                                                    <div className="order-pill-badge-wrapper w-clearfix">
                                                        <div className="pill-badge-3 order admin">200 mg</div>
                                                        <div className="pill-badge-3 order route">Intravenous</div>
                                                        <div className="pill-badge-3 order freq">BID</div>
                                                        <div className="pill-badge-3 order dur">9 of 10 Days</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-layout-grid schedule-medication-audit">
                                                <div className="schedule-team-block">
                                                    <div className="review-team-avatar"></div>
                                                    <div className="review-team-member">Linda Jackson</div>
                                                </div>
                                                <div id="w-node-d2e6ef41-e77f-4a03-6556-0f8cf97fe908-8717ef25" className="schedule-charted">
                                                    <div className="medication-history-status-label">Charted • 10:54 AM</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="schedule-chart-action-block">
                                            <div className="schedule-time-wrapper">
                                                <div className="schedule-time-label">Due Time</div>
                                                <div className="schedule-time">10:30 AM</div>
                                            </div>
                                            <div className="status schedule">Dispensed</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="schedule-medication-wrapper">
                                    <div className="schedule-block">
                                        <div className="schedule-medication-detail-wrapper">
                                            <div className="schedule-medication-item">
                                                <div className="order-medication">
                                                    <div className="medication-label-h1">Medication 01</div>
                                                </div>
                                                <div className="order-medication-dosage">
                                                    <div className="order-pill-badge-wrapper w-clearfix">
                                                        <div className="pill-badge-3 order admin">200 mg</div>
                                                        <div className="pill-badge-3 order route">Intravenous</div>
                                                        <div className="pill-badge-3 order freq">BID</div>
                                                        <div className="pill-badge-3 order dur">9 of 10 Days</div>
                                                    </div>
                                                </div>
                                                <div className="schedule-due-wrapper w-clearfix">
                                                    <div className="schedule-due-label">Due</div>
                                                    <div className="schedule-due-indicator"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="schedule-chart-action-block">
                                            <div className="schedule-time-wrapper">
                                                <div className="schedule-time-label">Due Time</div>
                                                <div className="schedule-time">8:45 PM</div>
                                            </div>
                                            <a href="#" data-w-id="35dc4658-ce13-90bd-736f-9660e6d9a617" className="button-primary schedule-btn w-button">Chart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-expand-track">
                            <div href="#" data-w-id="d2e6ef41-e77f-4a03-6556-0f8cf97fe931" className="schedule-title-bar w-clearfix">
                                <div className="schedule-title-bar-wrapper">
                                    <div className="schedule-due-date-label">Due Date</div>
                                    <div className="schedule-due-date">Wed, 23 Nov 2024</div>
                                </div>
                                <div className="nav-icon float-expand"></div>
                            </div>
                            <div className="schedule-expand-wrapper">
                                <div className="schedule-medication-wrapper">
                                    <div className="schedule-block">
                                        <div className="schedule-medication-detail-wrapper">
                                            <div className="schedule-medication-item">
                                                <div className="order-medication">
                                                    <div className="medication-label-h1">Medication 01</div>
                                                </div>
                                                <div className="order-medication-dosage">
                                                    <div className="order-pill-badge-wrapper w-clearfix">
                                                        <div className="pill-badge-3 order admin">200 mg</div>
                                                        <div className="pill-badge-3 order route">Intravenous</div>
                                                        <div className="pill-badge-3 order freq">BID</div>
                                                        <div className="pill-badge-3 order dur">8 of 10 Days</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="schedule-chart-action-block">
                                            <div className="schedule-time-wrapper">
                                                <div className="schedule-time-label">Due Time</div>
                                                <div className="schedule-time">10:30 AM</div>
                                            </div>
                                            <a href="#" data-w-id="c8c8123c-4795-97bf-b320-eefebb350e5b" className="button-primary schedule-btn w-button">Chart</a>
                                        </div>
                                    </div>
                                    <div className="schedule-block">
                                        <div className="schedule-medication-detail-wrapper">
                                            <div className="schedule-medication-item">
                                                <div className="order-medication">
                                                    <div className="medication-label-h1">Medication 01</div>
                                                </div>
                                                <div className="order-medication-dosage">
                                                    <div className="order-pill-badge-wrapper w-clearfix">
                                                        <div className="pill-badge-3 order admin">200 mg</div>
                                                        <div className="pill-badge-3 order route">Intravenous</div>
                                                        <div className="pill-badge-3 order freq">BID</div>
                                                        <div className="pill-badge-3 order dur">8 of 10 Days</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="schedule-chart-action-block">
                                            <div className="schedule-time-wrapper">
                                                <div className="schedule-time-label">Due Time</div>
                                                <div className="schedule-time">8:45 PM</div>
                                            </div>
                                            <a href="#" data-w-id="25b53bfa-54f5-8f95-488f-cbe9059a6d9d" className="button-primary schedule-btn w-button">Chart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-expand-track">
                            <div href="#" data-w-id="d2e6ef41-e77f-4a03-6556-0f8cf97fe96b" className="schedule-title-bar w-clearfix">
                                <div className="schedule-title-bar-wrapper">
                                    <div className="schedule-due-date-label">Due Date</div>
                                    <div className="schedule-due-date">Thu, 24 Nov 2024</div>
                                </div>
                                <div className="nav-icon float-expand"></div>
                            </div>
                            <div className="schedule-expand-wrapper">
                                <div className="schedule-medication-wrapper">
                                    <div className="schedule-block">
                                        <div className="schedule-medication-detail-wrapper">
                                            <div className="schedule-medication-item">
                                                <div className="order-medication">
                                                    <div className="medication-label-h1">Medication 01</div>
                                                </div>
                                                <div className="order-medication-dosage">
                                                    <div className="order-pill-badge-wrapper w-clearfix">
                                                        <div className="pill-badge-3 order admin">200 mg</div>
                                                        <div className="pill-badge-3 order route">Intravenous</div>
                                                        <div className="pill-badge-3 order freq">BID</div>
                                                        <div className="pill-badge-3 order dur">7 of 10 Days</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="schedule-chart-action-block">
                                            <div className="schedule-time-wrapper">
                                                <div className="schedule-time-label">Due Time</div>
                                                <div className="schedule-time">10:30 AM</div>
                                            </div>
                                            <a href="#" data-w-id="0fdec5ed-4fc5-a088-fa95-5d93a7094e3d" className="button-primary schedule-btn w-button">Chart</a>
                                        </div>
                                    </div>
                                    <div className="schedule-block">
                                        <div className="schedule-medication-detail-wrapper">
                                            <div className="schedule-medication-item">
                                                <div className="order-medication">
                                                    <div className="medication-label-h1">Medication 01</div>
                                                </div>
                                                <div className="order-medication-dosage">
                                                    <div className="order-pill-badge-wrapper w-clearfix">
                                                        <div className="pill-badge-3 order admin">200 mg</div>
                                                        <div className="pill-badge-3 order route">Intravenous</div>
                                                        <div className="pill-badge-3 order freq">BID</div>
                                                        <div className="pill-badge-3 order dur">7 of 10 Days</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="schedule-chart-action-block">
                                            <div className="schedule-time-wrapper">
                                                <div className="schedule-time-label">Due Time</div>
                                                <div className="schedule-time">8:45 PM</div>
                                            </div>
                                            <a href="#" data-w-id="a27eeff1-300e-5f30-b893-d2689ca81013" className="button-primary schedule-btn w-button">Chart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-expand-track">
                            <div href="#" data-w-id="d2e6ef41-e77f-4a03-6556-0f8cf97fe9a5" className="schedule-title-bar w-clearfix">
                                <div className="schedule-title-bar-wrapper">
                                    <div className="schedule-due-date-label">Due Date</div>
                                    <div className="schedule-due-date">Fri, 24 Nov 2024</div>
                                </div>
                                <div className="nav-icon float-expand"></div>
                            </div>
                            <div className="schedule-expand-wrapper">
                                <div className="schedule-medication-wrapper">
                                    <div className="schedule-block">
                                        <div className="schedule-medication-detail-wrapper">
                                            <div className="schedule-medication-item">
                                                <div className="order-medication">
                                                    <div className="medication-label-h1">Medication 01</div>
                                                </div>
                                                <div className="order-medication-dosage">
                                                    <div className="order-pill-badge-wrapper w-clearfix">
                                                        <div className="pill-badge-3 order admin">200 mg</div>
                                                        <div className="pill-badge-3 order route">Intravenous</div>
                                                        <div className="pill-badge-3 order freq">BID</div>
                                                        <div className="pill-badge-3 order dur">6 of 10 Days</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="schedule-chart-action-block">
                                            <div className="schedule-time-wrapper">
                                                <div className="schedule-time-label">Due Time</div>
                                                <div className="schedule-time">10:30 AM</div>
                                            </div>
                                            <a href="#" data-w-id="461c168f-25e7-beea-e3de-d92e0279000a" className="button-primary schedule-btn w-button">Chart</a>
                                        </div>
                                    </div>
                                    <div className="schedule-block">
                                        <div className="schedule-medication-detail-wrapper">
                                            <div className="schedule-medication-item">
                                                <div className="order-medication">
                                                    <div className="medication-label-h1">Medication 01</div>
                                                </div>
                                                <div className="order-medication-dosage">
                                                    <div className="order-pill-badge-wrapper w-clearfix">
                                                        <div className="pill-badge-3 order admin">200 mg</div>
                                                        <div className="pill-badge-3 order route">Intravenous</div>
                                                        <div className="pill-badge-3 order freq">BID</div>
                                                        <div className="pill-badge-3 order dur">6 of 10 Days</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="schedule-chart-action-block">
                                            <div className="schedule-time-wrapper">
                                                <div className="schedule-time-label">Due Time</div>
                                                <div className="schedule-time">8:45 PM</div>
                                            </div>
                                            <a href="#" data-w-id="45aceb21-7cf8-84c4-a1a5-ee2a2652226b" className="button-primary schedule-btn w-button">Chart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="end"></div>
                    </div>
                    <div className="modal-action-block">
                        <a href="#" data-w-id="9f9d12bf-396b-3966-799c-b9a3a7475585" className="button-primary modal w-button">Done</a>
                        <a href="#" data-w-id="9f9d12bf-396b-3966-799c-b9a3a7475587" className="button-secondary modal w-button">Cancel</a>
                    </div>
                </div>
            </div>
            <div style={inlineStyle} className="modal-schedule-chart-status">
                <div className="modal-block chart-options">
                    <div className="modal-title-block w-clearfix">
                        <div className="heading-title">Chart status</div>
                    </div>
                    <div className="schedule-status-wrapper">
                        <div className="form-wrapper-default w-form">
                            <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form-default" data-wf-page-id="63fb3a9a8bb3690a8717ef25" data-wf-element-id="e1d66f10-3916-c481-b850-fbbb5c64c4ef"><label className="schedule-status-radio w-clearfix w-radio">
                                <div className="w-form-formradioinput w-form-formradioinput--inputType-custom schedule-status-icon w-radio-input"></div><input id="One" type="radio" name="Patient-Status" data-name="Patient Status" style={{ opacity: 0, position: "absolute", zIndex: -1 }} value="One" /><span className="radio-label w-form-label" for="One">Dispensed</span>
                            </label><label className="schedule-status-radio w-clearfix w-radio">
                                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom schedule-status-icon w-radio-input"></div><input id="One" type="radio" name="Patient-Status" data-name="Patient Status" style={{ opacity: 0, position: "absolute", zIndex: -1 }} value="One" /><span className="radio-label w-form-label" for="One">Unavailable</span>
                                </label><label className="schedule-status-radio w-clearfix w-radio">
                                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom schedule-status-icon w-radio-input"></div><input id="One" type="radio" name="Patient-Status" data-name="Patient Status" style={{ opacity: 0, position: "absolute", zIndex: -1 }} value="One" /><span className="radio-label w-form-label" for="One">Pt Refused</span>
                                </label><label className="schedule-status-radio w-clearfix w-radio">
                                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom schedule-status-icon w-radio-input"></div><input id="One" type="radio" name="Patient-Status" data-name="Patient Status" style={{ opacity: 0, position: "absolute", zIndex: -1 }} value="One" /><span className="radio-label w-form-label" for="One">No line</span>
                                </label><label className="schedule-status-radio w-clearfix w-radio">
                                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom schedule-status-icon w-radio-input"></div><input id="One" type="radio" name="Patient-Status" data-name="Patient Status" style={{ opacity: 0, position: "absolute", zIndex: -1 }} value="One" /><span className="radio-label w-form-label" for="One">Stopped</span>
                                </label></form>
                            <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action-block schedule">
                        <a href="#" data-w-id="46d4fbfe-951f-5bb6-2cbe-8cd99268e724" className="button-primary modal w-button">Chart</a>
                        <a href="#" data-w-id="46d4fbfe-951f-5bb6-2cbe-8cd99268e726" className="button-secondary modal w-button">Close</a>
                    </div>
                </div>
            </div>
            <div className="modal-set-medication-detected">
                <div className="modal-block start-medication">
                    <div className="review-modal-details">
                        <div className="pill-wrapper">
                            <div className="list-label-tag review">Care Plan</div>
                            <div className="list-label-tag review">Medication</div>
                        </div>
                        <div className="review-title-block">
                            <div className="review-h1">New medication detected</div>
                        </div>
                        <div data-w-id="2f2bd2f1-3c78-c13a-23c8-2c90d08d88cb" className="modal-close"></div>
                    </div>
                    <div className="order-title-block secondary w-clearfix">
                        <div className="heading-title">Set start time to continue</div>
                    </div>
                    <div className="medication-detected-wrapper">
                        <div className="medication-wrapper w-clearfix">
                            <div className="medication-coumn-01 detected">
                                <div className="medication-count detected">01<br /></div>
                            </div>
                            <div className="medication-coumn-02 detected">
                                <div className="medication-block">
                                    <div className="medication-prescription set-timer">
                                        <div className="medication-label-h1">Paracetamol</div>
                                    </div>
                                    <div className="medication-dosage set-timer">
                                        <div className="w-layout-grid medication-dosage-grid">
                                            <div className="medication-label-h2">Start time not set</div>
                                            <a href="#" data-w-id="2f2bd2f1-3c78-c13a-23c8-2c90d08d88de" className="button-primary set w-button">Set time</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pill-badge-wrapper w-clearfix">
                                    <div className="pill-badge admin-mini">20 mg</div>
                                    <div className="pill-badge route-mini">Oral</div>
                                    <div className="pill-badge freq-mini">QID</div>
                                    <div className="pill-badge dur-mini">7 Days</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="medication-detected-wrapper">
                        <div className="medication-wrapper w-clearfix">
                            <div className="medication-coumn-01 detected">
                                <div className="medication-count detected">02<br /></div>
                            </div>
                            <div className="medication-coumn-02 detected">
                                <div className="medication-block">
                                    <div className="medication-prescription set-timer">
                                        <div className="medication-label-h1">Tab. Arthemeter Lumifantrin<br /></div>
                                    </div>
                                    <div className="medication-dosage set-timer">
                                        <div className="w-layout-grid medication-dosage-grid">
                                            <div className="medication-label-h2">Start time not set</div>
                                            <a href="#" data-w-id="2f2bd2f1-3c78-c13a-23c8-2c90d08d88fa" className="button-primary set w-button">Set time</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pill-badge-wrapper w-clearfix">
                                    <div className="pill-badge admin-mini">80/480 Mg</div>
                                    <div className="pill-badge route-mini">Oral</div>
                                    <div className="pill-badge freq-mini">QID</div>
                                    <div className="pill-badge dur-mini">7 Days</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action-block">
                        <a href="care-plan-action.html" aria-current="page" className="button-primary modal w-button w--current">Continue</a>
                        <a href="#" data-w-id="2f2bd2f1-3c78-c13a-23c8-2c90d08d8908" className="button-secondary modal w-button">Cancel</a>
                    </div>
                </div>
            </div>
            <div className="modal-medication-detected">
                <div className="modal-block set-medication">
                    <div className="modal-title-block w-clearfix">
                        <div className="heading-title">Set start time</div>
                    </div>
                    <div className="modal-item-wrapper set-medication">
                        <div className="set-med-container w-form">
                            <form id="wf-form-Vitals-Form-Wrapper" name="wf-form-Vitals-Form-Wrapper" data-name="Vitals-Form-Wrapper" method="get" className="set-med-form-wrapper w-clearfix" data-wf-page-id="63fb3a9a8bb3690a8717ef25" data-wf-element-id="1c982622-4090-6cb3-025f-8be5aa146e9b">
                                <div className="set-med-block w-clearfix"><input className="set-med-input hour w-input" maxlength="256" name="Set-time-2" data-name="Set Time 2" placeholder="Hour" type="number" id="Set-time-2" />
                                    <div className="timer-unit">
                                        <div className="vital-unit-label">:</div>
                                    </div><input className="set-med-input min w-input" maxlength="256" name="Set-time-2" data-name="Set Time 2" placeholder="Mins" type="number" id="Set-time-2" />
                                </div><select id="AM-PM-2" name="AM-PM-2" data-name="AM PM 2" className="selector-btn timer w-select">
                                    <option value="First">AM</option>
                                    <option value="Second">PM</option>
                                </select><select id="AM-PM-2" name="AM-PM-2" data-name="AM PM 2" className="selector-btn day w-select">
                                    <option value="1">Monday</option>
                                    <option value="2">Tuesday</option>
                                    <option value="3">Wednesday</option>
                                </select>
                            </form>
                            <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-item-wrapper instructions null">
                        <div className="set-med-container w-form">
                            <form id="wf-form-Vitals-Form-Wrapper" name="wf-form-Vitals-Form-Wrapper" data-name="Vitals-Form-Wrapper" method="get" className="set-med-form-wrapper w-clearfix" data-wf-page-id="63fb3a9a8bb3690a8717ef25" data-wf-element-id="1c982622-4090-6cb3-025f-8be5aa146eac">
                                <div className="set-med-block w-clearfix">
                                    <div className="unit-field-label">Administer</div>
                                    <div className="timer-block w-clearfix"><input className="set-med-input multi w-input" maxlength="256" name="Dosage-4" data-name="Dosage 4" placeholder="" type="number" id="Dosage-4" /><select id="Admin-2" name="Admin-2" data-name="Admin 2" className="selector-btn multi-option w-select">
                                        <option value="1">mg</option>
                                    </select></div>
                                </div>
                                <div className="set-med-block w-clearfix">
                                    <div className="unit-field-label">Administer</div>
                                    <div className="timer-block"><select id="Route-2" name="Route-2" data-name="Route 2" className="selector-btn w-select">
                                        <option value="1">Oral</option>
                                        <option value="2">Intravenous</option>
                                        <option value="3">Intramuscular</option>
                                        <option value="4">Subcutaneous</option>
                                        <option value="5">Intranasal</option>
                                        <option value="6">Intraocular</option>
                                        <option value="6">Per Rectum</option>
                                        <option value="7">Per Vaginum</option>
                                        <option value="8">Inhale</option>
                                        <option value="9">Otic</option>
                                        <option value="10">Topical</option>
                                        <option value="11">Intrathecal</option>
                                    </select></div>
                                </div>
                                <div className="set-med-block w-clearfix">
                                    <div className="unit-field-label">Administer</div>
                                    <div className="timer-block"><select id="Frequency-3" name="Frequency-3" data-name="Frequency 3" className="selector-btn w-select">
                                        <option value="1">BID</option>
                                        <option value="2">OD</option>
                                        <option value="3">BID</option>
                                        <option value="4">TID</option>
                                        <option value="5">QID</option>
                                        <option value="6">QH1</option>
                                        <option value="7">QH2</option>
                                        <option value="8">QH3</option>
                                        <option value="9">QH4</option>
                                    </select></div>
                                </div>
                                <div className="set-med-block w-clearfix">
                                    <div className="unit-field-label">Administer</div>
                                    <div className="timer-block w-clearfix">
                                        <input className="set-med-input multi w-input" maxlength="256" name="Administer-2" data-name="Administer 2" placeholder="" type="number" id="Administer-2" />
                                        <select id="Duration-3" name="Duration-3" data-name="Duration 3" className="selector-btn multi-option w-select">
                                            <option value="1">Day/s</option>
                                            <option value="2">Week/s</option>
                                            <option value="3">Month/s</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                </div>
            </div>
            <div className="modal-action-block">
                <a href="#" data-w-id="1c982622-4090-6cb3-025f-8be5aa146eca" className="button-primary modal w-button">Set Start Time</a>
                <a href="#" data-w-id="1c982622-4090-6cb3-025f-8be5aa146ecc" className="button-secondary modal w-button">Cancel</a>
            </div>
            <div style={inlineStyle} className="modal-bkg-notes">
                <div className="modal-block medication">
                    <div className="modal-title-block w-clearfix">
                        <div className="heading-title">Notes</div>
                    </div>
                    <div className="modal-item-wrapper notes-form">
                        <div id="w-node-fc919be4-b388-8101-bad3-b369b3ad5776-b3ad5776" className="modal-notes-block">
                            <div className="modal-notes-content-block">
                                <div className="modal-notes-content">Patient refused the ibuprofen for fever treatment. I recommend IV dose of 200-400mg every 4-6 hours, not to exceed 1200mg in a 24-hour period.</div>
                            </div>
                            <div className="modal-notes-info-block w-clearfix">
                                <div className="modal-notes-info-account w-clearfix">
                                    <div className="modal-notes-info-avatar sandra"></div>
                                    <div className="modal-notes-account-name">Sandra Riley</div>
                                </div>
                                <div className="modal-notes-time-stamp">24 Aug 2022 • 2:30 PM</div>
                            </div>
                        </div>
                        <div id="w-node-fc919be4-b388-8101-bad3-b369b3ad5776-b3ad5776" className="modal-notes-block">
                            <div className="modal-notes-content-block">
                                <div className="modal-notes-content">The dose of ibuprofen is based on their weight and age.</div>
                            </div>
                            <div className="modal-notes-info-block w-clearfix">
                                <div className="modal-notes-info-account w-clearfix">
                                    <div className="modal-notes-info-avatar sandra"></div>
                                    <div className="modal-notes-account-name">Sandra Riley</div>
                                </div>
                                <div className="modal-notes-time-stamp">23 Aug 2022 • 11:30 PM</div>
                            </div>
                        </div>
                        <div id="w-node-fc919be4-b388-8101-bad3-b369b3ad5776-b3ad5776" className="modal-notes-block">
                            <div className="modal-notes-content-block">
                                <div className="modal-notes-content">The recommended dose is 5-10mg/kg every 6-8 hours, not to exceed 40mg/kg in a 24-hour period.</div>
                            </div>
                            <div className="modal-notes-info-block w-clearfix">
                                <div className="modal-notes-info-account w-clearfix">
                                    <div className="modal-notes-info-avatar sandra"></div>
                                    <div className="modal-notes-account-name">Sandra Riley</div>
                                </div>
                                <div className="modal-notes-time-stamp">20 Aug 2022 • 1:50 PM</div>
                            </div>
                        </div>
                        <div id="w-node-fc919be4-b388-8101-bad3-b369b3ad5776-b3ad5776" className="modal-notes-block">
                            <div className="modal-notes-content-block">
                                <div className="modal-notes-content">The medications prevent calcium from entering the cells of the heart and blood vessels, which can help relax blood vessels and lower blood pressure. </div>
                            </div>
                            <div className="modal-notes-info-block w-clearfix">
                                <div className="modal-notes-info-account w-clearfix">
                                    <div className="modal-notes-info-avatar sandra"></div>
                                    <div className="modal-notes-account-name">Sandra Riley</div>
                                </div>
                                <div className="modal-notes-time-stamp">18 Aug 2022 • 7:30 AM</div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action-block">
                        <a href="#" data-w-id="ed97406b-ddd2-58e1-ffcc-fe5b505eacbd" className="button-primary modal w-button">Done</a>
                    </div>
                </div>
            </div>
            <div style={inlineStyle} className="modal-tasks">
                <div className="modal-block medication">
                    <div className="modal-title-block w-clearfix">
                        <div className="heading-title">Tasks History</div>
                    </div>
                    <div className="modal-item-wrapper tasks">
                        <div className="tasks-history-wrapper null">
                            <div className="report-status-pending w-clearfix">
                                <div className="report-date-label">Yesterday</div>
                            </div>
                            <div className="pill-badge-wrapper-copy w-clearfix">
                                <div className="pill-badge-block w-clearfix">
                                    <div className="pill-badge left admin">Admin</div>
                                    <div className="pill-badge right admin"></div>
                                </div>
                                <div className="pill-badge-block w-clearfix">
                                    <div className="pill-badge left route">Route</div>
                                    <div className="pill-badge right route"></div>
                                </div>
                                <div className="pill-badge-block w-clearfix">
                                    <div className="pill-badge left freq">Freq</div>
                                    <div className="pill-badge right freq"></div>
                                </div>
                                <div className="pill-badge-block w-clearfix">
                                    <div className="pill-badge left dur">Dur</div>
                                    <div className="pill-badge right dur"></div>
                                </div>
                            </div>
                            <div className="modal-task-wrapper">
                                <div className="modal-task-data">
                                    <div className="modal-tasks-checkbox"></div>
                                    <div className="modal-tasks-checkbox-label">Test Pt blood sugar at noon. Confirm below 140 mg/dL</div>
                                </div>
                                <div className="modal-task-info">
                                    <div className="modal-tasks-account-name">Created by Sandra at <span className="task-status primary-profile">1:55 PM</span></div>
                                    <div className="modal-tasks-time-stamp">Completed by Ama at <span className="task-status completed">4:32 PM</span></div>
                                </div>
                            </div>
                            <div className="modal-task-wrapper">
                                <div className="modal-task-data">
                                    <div className="modal-tasks-checkbox"></div>
                                    <div className="modal-tasks-checkbox-label">Test Pt blood sugar at noon. Confirm below 140 mg/dL. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                </div>
                                <div className="modal-task-info">
                                    <div className="modal-tasks-account-name">Created by <span className="task-status primary-profile">Sandra</span> at 1:55 PM</div>
                                    <div className="modal-tasks-time-stamp">Completed by <span className="task-status secondary-profile">Ama</span> at 4:32 PM</div>
                                </div>
                            </div>
                            <div className="modal-task-wrapper">
                                <div className="modal-task-data">
                                    <div className="modal-tasks-checkbox"></div>
                                    <div className="modal-tasks-checkbox-label">Test Pt blood sugar at noon. Confirm below 140 mg/dL</div>
                                </div>
                                <div className="modal-task-info">
                                    <div className="modal-tasks-account-name">Created by <span className="task-status primary-profile">Sandra</span> at 1:55 PM</div>
                                    <div className="modal-tasks-time-stamp">Completed by <span className="task-status secondary-profile">Ama</span> at 4:32 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="tasks-history-wrapper null">
                            <div className="report-status-pending w-clearfix">
                                <div className="report-date-label">20 Aug 2023</div>
                            </div>
                            <div className="tasks-form-block-added history w-clearfix w-form">
                                <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" className="tasks-form history" data-wf-page-id="63fb3a9a8bb3690a8717ef25" data-wf-element-id="9e72ddbd-b5f8-81ce-8b43-92c580f71b6a"><label className="w-checkbox checkbox-field modal w-clearfix">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom tasks-checkbox completed w--redirected-checked"></div><input type="checkbox" id="Checkbox-2" name="Checkbox-2" data-name="Checkbox 2" style={{ opacity: 0, position: "absolute", zIndex: -1 }} checked="" />
                                    <div className="tasks-count">01</div><span className="tasks-checkbox-label history w-form-label" for="Checkbox-2">Test Pt blood sugar at noon. Confirm below 140 mg/dL</span>
                                </label>
                                    <div className="task-modal-info w-clearfix">
                                        <div className="modal-notes-info-account">
                                            <div className="modal-tasks-account-name">Created by </div>
                                            <div className="modal-tasks-account-name">Sandra Riley</div>
                                        </div>
                                        <div className="modal-tasks-time-stamp">- 1:50 PM</div>
                                    </div>
                                    <div className="task-modal-info w-clearfix">
                                        <div className="modal-notes-info-account">
                                            <div className="modal-tasks-account-name">Completed by</div>
                                            <div className="modal-tasks-account-name">Sandra Riley</div>
                                        </div>
                                        <div className="modal-tasks-time-stamp">- 4:35 PM</div>
                                    </div>
                                </form>
                                <div className="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                            <div className="tasks-form-block-added history w-clearfix w-form">
                                <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" className="tasks-form history" data-wf-page-id="63fb3a9a8bb3690a8717ef25" data-wf-element-id="9e72ddbd-b5f8-81ce-8b43-92c580f71b88"><label className="w-checkbox checkbox-field modal w-clearfix">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom tasks-checkbox completed w--redirected-checked"></div><input type="checkbox" id="Checkbox-2" name="Checkbox-2" data-name="Checkbox 2" style={{ opacity: 0, position: "absolute", zIndex: -1 }} checked="" />
                                    <div className="tasks-count">02</div><span className="tasks-checkbox-label history w-form-label" for="Checkbox-2">Test Pt blood sugar at noon. Confirm below 140 mg/dL</span>
                                </label>
                                    <div className="task-modal-info w-clearfix">
                                        <div className="modal-notes-info-account">
                                            <div className="modal-tasks-account-name">Sandra Riley</div>
                                        </div>
                                        <div className="modal-tasks-time-stamp">1:50 PM</div>
                                    </div>
                                    <div className="task-modal-info w-clearfix">
                                        <div className="modal-notes-info-account">
                                            <div className="modal-tasks-account-name">Completed by</div>
                                            <div className="modal-tasks-account-name">Sandra Riley</div>
                                        </div>
                                        <div className="modal-tasks-time-stamp">- 4:35 PM</div>
                                    </div>
                                </form>
                                <div className="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                            <div className="tasks-form-block-added history w-clearfix w-form">
                                <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" className="tasks-form history" data-wf-page-id="63fb3a9a8bb3690a8717ef25" data-wf-element-id="9e72ddbd-b5f8-81ce-8b43-92c580f71ba4"><label className="w-checkbox checkbox-field modal w-clearfix">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom tasks-checkbox completed w--redirected-checked"></div><input type="checkbox" id="Checkbox-2" name="Checkbox-2" data-name="Checkbox 2" style={{ opacity: 0, position: "absolute", zIndex: -1 }} checked="" />
                                    <div className="tasks-count">03</div><span className="tasks-checkbox-label history w-form-label" for="Checkbox-2">Test Pt blood sugar at noon. Confirm below 140 mg/dL</span>
                                </label>
                                    <div className="task-modal-info w-clearfix">
                                        <div className="modal-notes-info-account w-clearfix">
                                            <div className="modal-tasks-info-avatar sandra"></div>
                                            <div className="modal-tasks-account-name">Sandra Riley</div>
                                        </div>
                                        <div className="modal-tasks-time-stamp">:50 PM</div>
                                    </div>
                                    <div className="task-modal-info w-clearfix">
                                        <div className="modal-notes-info-account">
                                            <div className="modal-tasks-account-name">Completed by</div>
                                            <div className="modal-tasks-account-name">Sandra Riley</div>
                                        </div>
                                        <div className="modal-tasks-time-stamp">- 4:35 PM</div>
                                    </div>
                                </form>
                                <div className="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                        </div>
                        <div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" className="diagnostics-tab w-tabs">
                            <div className="modal-tab-menu w-tab-menu">
                                <a data-w-tab="Tab 1" className="tab-link left w-inline-block w-tab-link w--current">
                                    <div>Completed</div>
                                </a>
                                <a data-w-tab="Tab 2" className="tab-link right w-inline-block w-tab-link">
                                    <div>Incomplete</div>
                                </a>
                            </div>
                            <div className="tab-wrapper w-tab-content">
                                <div data-w-tab="Tab 1" className="modal-tab-pane w-tab-pane w--tab-active">
                                    <div className="tasks-history-wrapper">
                                        <div className="task-modal-title w-clearfix">
                                            <div className="task-modal-indicator treatment-plan"></div>
                                            <div className="report-date-label">Yesterday</div>
                                        </div>
                                        <div className="tasks-form-block-added history w-clearfix w-form">
                                            <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" className="tasks-form history" data-wf-page-id="63fb3a9a8bb3690a8717ef25" data-wf-element-id="7d356321-9203-d5ca-cd26-2c6fd1176ff3"><label className="w-checkbox task-modal-checkbox">
                                                <div className="w-checkbox-input w-checkbox-input--inputType-custom tasks-checkbox completed w--redirected-checked"></div><input id="Checkbox-2" type="checkbox" name="Checkbox-2" data-name="Checkbox 2" style={{ opacity: 0, position: "absolute", zIndex: -1 }} checked="" /><span className="tasks-checkbox-label history w-form-label" for="Checkbox-2">Test Pt blood sugar at noon. Confirm below 140 mg/dL</span>
                                            </label>
                                                <div className="task-modal-info w-clearfix">
                                                    <div className="task-modal-analytics-wrapper w-clearfix">
                                                        <div className="tasks-modal-avatar sandra"></div>
                                                        <div className="task-modal-analytics-block">
                                                            <div className="modal-tasks-account-name">Created by Sandra Riley</div>
                                                            <div className="task-modal-avatar-label">1:55 PM</div>
                                                        </div>
                                                    </div>
                                                    <div className="task-modal-analytics-wrapper w-clearfix">
                                                        <div className="tasks-modal-avatar ama"></div>
                                                        <div className="task-modal-analytics-block">
                                                            <div className="modal-tasks-account-name">Completed by Ama Dadzi</div>
                                                            <div className="task-modal-avatar-label">4:32 PM</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div>
                                        <div className="tasks-form-block-added history w-clearfix w-form">
                                            <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" className="tasks-form history" data-wf-page-id="63fb3a9a8bb3690a8717ef25" data-wf-element-id="69443693-6b49-be3a-8d9d-18c05bf1888d"><label className="w-checkbox task-modal-checkbox">
                                                <div className="w-checkbox-input w-checkbox-input--inputType-custom tasks-checkbox completed w--redirected-checked"></div><input id="Checkbox-2" type="checkbox" name="Checkbox-2" data-name="Checkbox 2" style={{ opacity: 0, position: "absolute", zIndex: -1 }} checked="" /><span className="tasks-checkbox-label history w-form-label" for="Checkbox-2">Test Pt blood sugar at noon. Confirm below 140 mg/dL. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                            </label>
                                                <div className="task-modal-info w-clearfix">
                                                    <div className="task-modal-analytics-wrapper w-clearfix">
                                                        <div className="tasks-modal-avatar"></div>
                                                        <div className="task-modal-analytics-block">
                                                            <div className="modal-tasks-account-name">Created by Sandra Riley</div>
                                                            <div className="task-modal-avatar-label">1:55 PM</div>
                                                        </div>
                                                    </div>
                                                    <div className="task-modal-analytics-wrapper w-clearfix">
                                                        <div className="tasks-modal-avatar"></div>
                                                        <div className="task-modal-analytics-block">
                                                            <div className="modal-tasks-account-name">Completed by Sandra Riley</div>
                                                            <div className="task-modal-avatar-label">4:32 PM</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div>
                                        <div className="pill-badge-wrapper-copy w-clearfix">
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left admin">Admin</div>
                                                <div className="pill-badge right admin"></div>
                                            </div>
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left route">Route</div>
                                                <div className="pill-badge right route"></div>
                                            </div>
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left freq">Freq</div>
                                                <div className="pill-badge right freq"></div>
                                            </div>
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left dur">Dur</div>
                                                <div className="pill-badge right dur"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tasks-history-wrapper">
                                        <div className="task-modal-title w-clearfix">
                                            <div className="task-modal-indicator treatment-plan"></div>
                                            <div className="report-date-label">22nd March 2023</div>
                                        </div>
                                        <div className="tasks-form-block-added history w-clearfix w-form">
                                            <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" className="tasks-form history" data-wf-page-id="63fb3a9a8bb3690a8717ef25" data-wf-element-id="fcda7ae0-9037-d775-d5b8-33d90bea6b37"><label className="w-checkbox task-modal-checkbox">
                                                <div className="w-checkbox-input w-checkbox-input--inputType-custom tasks-checkbox completed w--redirected-checked"></div><input id="Checkbox-2" type="checkbox" name="Checkbox-2" data-name="Checkbox 2" style={{ opacity: 0, position: "absolute", zIndex: -1 }} checked="" /><span className="tasks-checkbox-label history w-form-label" for="Checkbox-2">Test Pt blood sugar at noon. Confirm below 140 mg/dL</span>
                                            </label>
                                                <div className="task-modal-info w-clearfix">
                                                    <div className="task-modal-analytics-wrapper w-clearfix">
                                                        <div className="task-modal-analytics-block w-clearfix"><img loading="lazy" src="images/ic-task-edit.svg" alt="" className="task-modal-icon" />
                                                            <div className="modal-tasks-point">By Sandra Riley at <span className="task-status primary-profile">1:55 PM</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="task-modal-analytics-wrapper w-clearfix">
                                                        <div className="task-modal-analytics-block w-clearfix"><img loading="lazy" src="images/ic-task-check.svg" alt="" className="task-modal-icon" />
                                                            <div className="modal-tasks-point">By Ama Dadzi at <span className="task-status completed">1:55 PM</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div>
                                        <div className="tasks-form-block-added history w-clearfix w-form">
                                            <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" className="tasks-form history" data-wf-page-id="63fb3a9a8bb3690a8717ef25" data-wf-element-id="fcda7ae0-9037-d775-d5b8-33d90bea6b4d"><label className="w-checkbox task-modal-checkbox">
                                                <div className="w-checkbox-input w-checkbox-input--inputType-custom tasks-checkbox completed w--redirected-checked"></div><input id="Checkbox-2" type="checkbox" name="Checkbox-2" data-name="Checkbox 2" style={{ opacity: 0, position: "absolute", zIndex: -1 }} checked="" /><span className="tasks-checkbox-label history w-form-label" for="Checkbox-2">Test Pt blood sugar at noon. Confirm below 140 mg/dL. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                            </label>
                                                <div className="task-modal-info w-clearfix">
                                                    <div className="task-modal-analytics-wrapper w-clearfix">
                                                        <div className="task-modal-analytics-block w-clearfix"><img loading="lazy" src="images/ic-task-edit.svg" alt="" className="task-modal-icon" />
                                                            <div className="modal-tasks-point">By Sandra Riley at <span className="task-status primary-profile">1:55 PM</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="task-modal-analytics-wrapper w-clearfix">
                                                        <div className="task-modal-analytics-block w-clearfix"><img loading="lazy" src="images/ic-task-check.svg" alt="" className="task-modal-icon" />
                                                            <div className="modal-tasks-point">By Ama Dadzi at <span className="task-status completed">1:55 PM</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div>
                                        <div className="pill-badge-wrapper-copy w-clearfix">
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left admin">Admin</div>
                                                <div className="pill-badge right admin"></div>
                                            </div>
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left route">Route</div>
                                                <div className="pill-badge right route"></div>
                                            </div>
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left freq">Freq</div>
                                                <div className="pill-badge right freq"></div>
                                            </div>
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left dur">Dur</div>
                                                <div className="pill-badge right dur"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tasks-history-wrapper">
                                        <div className="task-modal-title w-clearfix">
                                            <div className="task-modal-indicator treatment-plan"></div>
                                            <div className="report-date-label">21st March 2023</div>
                                        </div>
                                        <div className="tasks-form-block-added history w-clearfix w-form">
                                            <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" className="tasks-form history" data-wf-page-id="63fb3a9a8bb3690a8717ef25" data-wf-element-id="033f34d0-efe4-a219-21ee-ca5c03e13d22"><label className="w-checkbox task-modal-checkbox">
                                                <div className="w-checkbox-input w-checkbox-input--inputType-custom tasks-checkbox completed w--redirected-checked"></div><input id="Checkbox-2" type="checkbox" name="Checkbox-2" data-name="Checkbox 2" style={{ opacity: 0, position: "absolute", zIndex: -1 }} checked="" /><span className="tasks-checkbox-label history w-form-label" for="Checkbox-2">Test Pt blood sugar at noon. Confirm below 140 mg/dL</span>
                                            </label>
                                                <div className="task-modal-info w-clearfix">
                                                    <div className="task-modal-analytics-wrapper w-clearfix">
                                                        <div className="task-modal-analytics-block w-clearfix">
                                                            <div className="modal-tasks-point">Created by Sandra Riley at <span className="task-status primary-profile">1:55 PM</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="task-modal-analytics-wrapper w-clearfix">
                                                        <div className="task-modal-analytics-block">
                                                            <div className="modal-tasks-time-stamp">Completed by Ama Dadzi at <span className="task-status completed">4:32 PM</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div>
                                        <div className="pill-badge-wrapper-copy w-clearfix">
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left admin">Admin</div>
                                                <div className="pill-badge right admin"></div>
                                            </div>
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left route">Route</div>
                                                <div className="pill-badge right route"></div>
                                            </div>
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left freq">Freq</div>
                                                <div className="pill-badge right freq"></div>
                                            </div>
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left dur">Dur</div>
                                                <div className="pill-badge right dur"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tasks-history-wrapper">
                                        <div className="pill-badge-wrapper-copy w-clearfix">
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left admin">Admin</div>
                                                <div className="pill-badge right admin"></div>
                                            </div>
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left route">Route</div>
                                                <div className="pill-badge right route"></div>
                                            </div>
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left freq">Freq</div>
                                                <div className="pill-badge right freq"></div>
                                            </div>
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left dur">Dur</div>
                                                <div className="pill-badge right dur"></div>
                                            </div>
                                        </div>
                                        <div className="empty-state">
                                            <div className="empty-state-label-h2">No tasks recorded</div>
                                        </div>
                                    </div>
                                </div>
                                <div data-w-tab="Tab 2" className="modal-tab-pane w-tab-pane">
                                    <div className="tasks-history-wrapper">
                                        <div className="task-modal-title w-clearfix">
                                            <div className="task-modal-indicator treatment-plan"></div>
                                            <div className="report-date-label">Today</div>
                                        </div>
                                        <div className="tasks-form-block-added history w-clearfix w-form">
                                            <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" className="tasks-form history" data-wf-page-id="63fb3a9a8bb3690a8717ef25" data-wf-element-id="87f61b7c-dead-0ea3-abbd-fb58da1e1d54"><label className="w-checkbox task-modal-checkbox">
                                                <div className="w-checkbox-input w-checkbox-input--inputType-custom tasks-checkbox completed"></div><input id="Checkbox-2" type="checkbox" name="Checkbox-2" data-name="Checkbox 2" style={{ opacity: 0, position: "absolute", zIndex: -1 }} /><span className="tasks-checkbox-label history w-form-label" for="Checkbox-2" /><span>Test Pt blood sugar at noon. Confirm below 140 mg/dL</span>
                                            </label>
                                                <div className="task-modal-info w-clearfix">
                                                    <div className="task-modal-analytics-wrapper w-clearfix">
                                                        <div className="task-modal-analytics-block w-clearfix"><img loading="lazy" src="images/ic-task-edit.svg" alt="" className="task-modal-icon" />
                                                            <div className="modal-tasks-point">By Sandra Riley at <span className="task-status primary-profile">1:55 PM</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="task-modal-analytics-wrapper w-clearfix">
                                                        <div className="task-modal-analytics-block w-clearfix"><img loading="lazy" src="images/ic-task-check.svg" alt="" className="task-modal-icon" />
                                                            <div className="modal-tasks-point">Not completed <span className="task-status completed">1:55 PM</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div>
                                        <div className="tasks-form-block-added history w-clearfix w-form">
                                            <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" className="tasks-form history" data-wf-page-id="63fb3a9a8bb3690a8717ef25" data-wf-element-id="87f61b7c-dead-0ea3-abbd-fb58da1e1d6d"><label className="w-checkbox task-modal-checkbox">
                                                <div className="w-checkbox-input w-checkbox-input--inputType-custom tasks-checkbox completed"></div><input id="Checkbox-2" type="checkbox" name="Checkbox-2" data-name="Checkbox 2" style={{ opacity: 0, position: "absolute", zIndex: -1 }} /><span className="tasks-checkbox-label history w-form-label" for="Checkbox-2">Test Pt blood sugar at noon. Confirm below 140 mg/dL. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                            </label>
                                                <div className="task-modal-info w-clearfix">
                                                    <div className="task-modal-analytics-wrapper w-clearfix">
                                                        <div className="task-modal-analytics-block w-clearfix"><img loading="lazy" src="images/ic-task-edit.svg" alt="" className="task-modal-icon" />
                                                            <div className="modal-tasks-point">By Sandra Riley at <span className="task-status primary-profile">1:55 PM</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="task-modal-analytics-wrapper w-clearfix">
                                                        <div className="task-modal-analytics-block w-clearfix"><img loading="lazy" src="images/ic-task-check.svg" alt="" className="task-modal-icon" />
                                                            <div className="modal-tasks-point">Not completed <span className="task-status completed">1:55 PM</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div>
                                        <div className="pill-badge-wrapper-copy w-clearfix">
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left admin">Admin</div>
                                                <div className="pill-badge right admin"></div>
                                            </div>
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left route">Route</div>
                                                <div className="pill-badge right route"></div>
                                            </div>
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left freq">Freq</div>
                                                <div className="pill-badge right freq"></div>
                                            </div>
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left dur">Dur</div>
                                                <div className="pill-badge right dur"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tasks-history-wrapper">
                                        <div className="pill-badge-wrapper-copy w-clearfix">
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left admin">Admin</div>
                                                <div className="pill-badge right admin"></div>
                                            </div>
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left route">Route</div>
                                                <div className="pill-badge right route"></div>
                                            </div>
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left freq">Freq</div>
                                                <div className="pill-badge right freq"></div>
                                            </div>
                                            <div className="pill-badge-block w-clearfix">
                                                <div className="pill-badge left dur">Dur</div>
                                                <div className="pill-badge right dur"></div>
                                            </div>
                                        </div>
                                        <div className="empty-state">
                                            <div className="empty-state-label-h2">No tasks recorded</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action-block">
                        <a href="#" data-w-id="f78c9601-ad60-127a-6c07-ed8e087a3f59" className="button-primary modal w-button">Done</a>
                    </div>
                </div>
            </div>
            <div className="modal-sidebar"></div>
            <div className="modal-log-out">
                <div className="modal-block">
                    <div className="unit-wrapper completed">
                        <div className="modal-badge sign-out"><img src="images/log-out.svg" loading="lazy" alt="" className="modal-badge-icon" /></div>
                        <div className="modal-h1">Log Out</div>
                        <div className="modal-h2">Are you sure you want to logout of your account?</div>
                    </div>
                    <div className="modal-action-block">
                        <a href="index.html" className="button-primary sign-out w-button">Log out</a>
                        <a href="#" data-w-id="1069d1e2-3e27-54ad-81ac-4266ae91fba7" className="button-secondary modal w-button">Cancel</a>
                    </div>
                </div>
            </div>
            <div data-w-id="81e740aa-3742-97a9-4f9c-15efc35d7a1e" className="navbar-modal"></div>
        </>
    )
}

export default CarePlanDetails