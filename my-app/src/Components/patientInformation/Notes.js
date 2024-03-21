import React from 'react';

const Notes = ({ content }) => {
    return (
        <div className="sidebar-wrapper padding">
        <div className="empty-state">
          <div className="empty-state-label-h2">{content}</div>
        </div>
      </div>
    );
};

export default Notes