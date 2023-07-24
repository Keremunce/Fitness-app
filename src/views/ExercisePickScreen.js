import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faCirclePlus, faSearch } from '@fortawesome/free-solid-svg-icons';
export default function ExercisePickScreen() {
    const { workoutSearchInputRef, setSelectedExercise, setSearchTerm, exerciseData, searchTerm, navigate } = useContext(GlobalContext);
    
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredExerciseData = exerciseData.filter((exercise) =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <>
            <div className="showExercisePickScreenContainer">
                <div className="header">
                    <button onClick={() => navigate(-1)} className='mr-auto closeBtn'>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                    </button>
                    <div className='mr-auto title'>
                        <h1 className='font-bold tracking-widest'>Exercises</h1>
                    </div>
                </div>
                <div className="exercisepickSearchContainer">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    <input ref={workoutSearchInputRef} onChange={handleSearch} type="text" className='searchInput' placeholder='Search Exercises...' />
                </div>
                <div className="muscleCategoriesContainer">
                    <div className="category">Chest</div>
                    <div className="category">Back</div>
                    <div className="category">Shoulder</div>
                </div>
                <ul className="workoutsListContainer">
                    {filteredExerciseData.map((exercise, index) => (
                        <li onClick={() => { setSelectedExercise(exercise); }} className="workoutListElement kerem" id={index} key={index}>
                            <div className='imageContainer'>
                                <img loading='lazy' src={exercise.gifUrl} alt="" />
                            </div>
                            <div className="textContent">
                                <p>{exercise.name}</p>
                                <p>{exercise.target}</p>
                            </div>
                            <div className='circlePlusContainer'>
                                <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}