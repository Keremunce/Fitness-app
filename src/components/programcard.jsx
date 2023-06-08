import React from 'react';

const ProgramCard = ({ workout }) => {

    console.log(workout.image);
    return (
        <div className="programCard">
            <div className="imgDiv">
                <img src={process.env.PUBLIC_URL + workout.image} alt={workout.name} />
            </div>
            <h3>{workout.name}</h3>
            <p>{workout.duration}</p>
        </div>
    );
};

export default ProgramCard;
