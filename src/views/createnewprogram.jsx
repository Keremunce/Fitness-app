import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Set from '../components/set'
function NewProgramScreen() {

    const { workoutDuration, setWorkoutDuration, workoutDays, setWorkoutDays, workoutDaysPH, setWorkoutDaysPH
        ,setSelectedDayIndex,setSets, navigate } = useContext(GlobalContext);

    const addSet = () => {
        setSets((prevSets) => [...prevSets, {}]);
    };

    // Kullanıcının günü seçtiğinde çağrılan fonksiyon
    const handleDaySelection = (index) => {
        setSelectedDayIndex(index + 1);
        navigate('/ShowProgramScreen');
    };

    return (
        <div className='NewProgramScreen'>
            <div>
                <div className="header">
                    <button onClick={() => navigate(-1)} className='mr-auto closeBtn'>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                    </button>
                    <div className='mr-auto title'>
                        <h1 className='font-bold tracking-widest'>CREATE NEW PROGRAM</h1>
                    </div>
                </div>
                <div className="body">
                    <form action="">
                        {/* Image Pick / Kapak Gorseli */}
                        <div className="imagePicker">
                            <h5 className='font-bold tracking-widest title'>THUMBNAIL</h5>
                            <div className='slider'>
                                <div className="item">
                                    <img src={`https://source.unsplash.com/random?collections=10126680&orientation=landscape&width=300&height=150&t=${Math.random()}`} alt="" />
                                </div>
                                <div className="item">
                                    <img src={`https://source.unsplash.com/random?collections=10126680&orientation=landscape&width=300&height=150&t=${Math.random()}`} alt="" />
                                </div>
                                <div className="item">
                                    <img src={`https://source.unsplash.com/random?collections=10126680&orientation=landscape&width=300&height=150&t=${Math.random()}`} alt="" />
                                </div>
                                <div className="item">
                                    <img src={`https://source.unsplash.com/random?collections=10126680&orientation=landscape&width=300&height=150&t=${Math.random()}`} alt="" />
                                </div>
                                <div className="item">
                                    <img src={`https://source.unsplash.com/random?collections=10126680&orientation=landscape&width=300&height=150&t=${Math.random()}`} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* Program Ismi */}
                        <div className="input-group">
                            <input type="text" placeholder='Program Name' name="programName" id="programName" required />
                        </div>
                        {/* Antreman Suresi / 1hafta, 2hafta, 3hafta */}
                        <div className="input-group select workoutDuration">
                            {workoutDuration && (
                                <label htmlFor="workoutDuration">Workout Duration</label>
                            )}
                            <select onChange={() => setWorkoutDuration(false)} name="workoutDuration" id="workoutDuration">
                                <option value="oneweek">1 Week</option>
                                <option value="twoweek">2 Week</option>
                                <option value="threeweek">3 Week</option>
                                <option value="fourweek">4 Week</option>
                                <option value="fiveweek">5 Week</option>
                                <option value="sixweek">6 Week</option>
                                <option value="sevenweek">7 Week</option>
                                <option value="eightweek">8 Week</option>
                            </select>
                        </div>
                        {/* Antreman Kac Gun Haftada / 1gun 2gun 3gun 4gun  */}
                        <div className="input-group select workoutDaysSelect">
                            {workoutDaysPH && (
                                <label htmlFor="workoutDays">Workout Days</label>
                            )}
                            <select onChange={(e) => { setWorkoutDays(e.target.value); setWorkoutDaysPH(false) }} name="workoutDays" id="workoutDays">
                                <option value="1">1 Day</option>
                                <option value="2">2 Day</option>
                                <option value="3">3 Day</option>
                                <option value="4">4 Day</option>
                                <option value="5">5 Day</option>
                                <option value="6">6 Day</option>
                                <option value="7">7 Day</option>
                            </select>
                        </div>
                        {/* Antreman Gunleri 1.gun egzersizleri, 2.gun egzersizleri  */}
                        {workoutDays && (
                            <div className="workoutDaysSection">
                                <div>
                                    <h5 className='font-bold tracking-widest title'>Workout Days</h5>
                                    <div>
                                        {Array.from({ length: workoutDays }, (_, index) => (
                                            <button onClick={() => handleDaySelection(index)} key={index} className='workoutDayElement'>
                                                <p>{index + 1}. Gün</p>
                                                <FontAwesomeIcon className='ml-auto text-gray-400' icon={faAngleRight}></FontAwesomeIcon>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Planlama Butonu  */}
                        <button className='planBtn' type='submit'>Plan</button>
                    </form>
                </div > {/* BODY */}
            </div> {/* Create New Program Screen MAIN */}
            <div className='selectedExerciseScreen'>
                <div className="header">
                    <button className='mr-auto closeBtn'>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                    </button>
                    <div className='mr-auto title'>
                        <h1 className='font-bold tracking-widest'>Bench Press</h1>
                        <p className='subtext muscle-target'>Chest</p>
                    </div>
                </div>
                <div className="body">
                    <div className='exerciseImgContainer'>
                        <img src={`https://source.unsplash.com/random?collections=10126680&orientation=landscape&width=700&height=200&t=${Math.random()}`} alt="" />
                    </div>
                    <div className="setsContainer">
                        <Set></Set>
                        <div className='createNewSetsBtn'>
                            <button onClick={addSet}>Yeni SET</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NewProgramScreen;
