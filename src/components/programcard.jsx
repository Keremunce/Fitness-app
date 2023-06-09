import React from 'react';

const ProgramCard = ({ workout }) => {

    console.log(workout.image);
    return (
        <div className="programCard">
            <div className="imgDiv">
                <img src={process.env.PUBLIC_URL + workout.image} alt={workout.name} />
            </div>
            <div className='textContent'>
                <p>{workout.name}</p>
                <p>{workout.duration.slice(0, 6)}</p>
            </div>
        </div>
    );
};

export default ProgramCard;
