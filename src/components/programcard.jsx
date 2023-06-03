import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
function ProgramCard() {
    const { workouts, setWorkouts } = useContext(GlobalContext)

    return (
        <div>
            {workouts.map((workout, index) => (
                <div key={index}>
                    <h2>{workout.name}</h2>
                    <p>{workout.duration}</p>
                    <img src={workout.image} alt={workout.name} />
                    <p>#####################</p>
                </div>
            ))}
            <button onClick={() => setWorkouts([...workouts, { name: 'kerem', duration: '45 min', image: 'legday.png' }])} className='border px-3 py-2 rounded bg-orange-500 text-white'>
                Add Workout
            </button>


            <p>Leg Day - 45min</p>
        </div>
    )
}

export default ProgramCard;