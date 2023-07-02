import React from 'react';

const ProgramCard = ({ workout }) => {
    return (
        <div className="card">
            <div className='content'>
                <p>{workout.name}</p>
                <p>{workout.duration.slice(0, 6)}</p>
            </div>
            <div className='image-container'>
                <img src={process.env.PUBLIC_URL + workout.image1} alt="triceps" />
                <img src={process.env.PUBLIC_URL + workout.image2} alt="benchpress" />
            </div>
        </div>
    );
};

export default ProgramCard;
