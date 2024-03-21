import React from 'react';

const EncounterBlock = ({ name, date }) => {
    return (
        <a href="#" class="encounter-list-block sidebar w-inline-block w-clearfix">
            <div class="encounter-icon sidebar"></div>
            <div class="detail-list-block">
              <div class="encounter-name">{name}</div>
              <div class="encounter-date">{date}</div>
            </div>
          </a>
    );
};

export default EncounterBlock