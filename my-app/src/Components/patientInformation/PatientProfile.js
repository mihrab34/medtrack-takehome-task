import React from 'react'

const PatientProfile = ({ name, id, avatarSrc }) => {
    return (
        <div className='patient-side-profile w-100 flex-column align-items-center justify-content-start'>
            <img
                src={avatarSrc}
                alt='user avatar'
                className='patient-avatar'
            />
            <p className='patient-name'>{name}</p>
            <p className='patient-id'>{id}</p>
        </div>
    );
};

export default PatientProfile