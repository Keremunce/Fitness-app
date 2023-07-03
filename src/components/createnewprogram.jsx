import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCirclePlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import Set from './set'
import axios from 'axios';
function NewProgramScreen() {
    const { showNewProgramScreen, setshowNewProgramScreen, workoutDuration, setWorkoutDuration, workoutDays, setWorkoutDays, workoutDaysPH, setWorkoutDaysPH
        , selectedDayIndex, setSelectedDayIndex, showProgramScreen, setShowProgramScreen, showExercisePickScreen, setshowExercisePickScreen,
        workoutSearchInputRef, exerciseData, setExerciseData, searchTerm, setSearchTerm, selectedExercise, setSelectedExercise,
     setSets} = useContext(GlobalContext);
     const addSet = () => {
        setSets((prevSets) => [...prevSets, {}]);
    };

    // Kullanıcının günü seçtiğinde çağrılan fonksiyon
    const handleDaySelection = (index) => {
        setSelectedDayIndex(index + 1);
        setShowProgramScreen(true);
    };
    // // Kullanıcının programı hazırladıktan sonra çağrılan fonksiyon
    // const handleProgramSave = () => {
    //     // Programı kaydet ve işlemleri gerçekleştir
    //     // ...

    //     // İlk sayfaya geri dön
    //     setSelectedDayIndex(0);
    //     setShowProgramScreen(false);
    // };\

    const fetchExerciseData = async () => {
        try {                        // Önbellekte veri yok, API'den veriyi çek
            const response = await axios.get('https://exercisedb.p.rapidapi.com/exercises', {
                headers: {
                    'X-RapidAPI-Key': '722895e6a7mshdd582378ce49955p1cb2c6jsnd8470e7d5adb',
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                }
            });

            // Veriyi önbelleğe kaydet
            setExerciseData(response.data);
        }
        catch (error) {
            console.error('Veri çekme hatası:', error);
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredExerciseData = exerciseData.filter((exercise) =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='NewProgramScreen'>
            <div>
                <div className="header">
                    <button onClick={() => setshowNewProgramScreen(!showNewProgramScreen)} className='mr-auto closeBtn'>
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
            {showProgramScreen && (
                <div className="showProgramScreenContainer">
                    <div className="header">
                        <button onClick={() => setShowProgramScreen(true)} className='mr-auto closeBtn'>
                            <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                        </button>
                        <div className='mr-auto title'>
                            <h1 className='font-bold tracking-widest'>{selectedDayIndex}. Gun</h1>
                        </div>
                    </div>
                    {/* Add exercies */}
                    <div className='textContentContainer'>
                        <div className='textContent'>
                            <p>Add Exercise</p>
                            <p>Add exercises today's program</p>
                        </div>
                        <div>
                            <button onClick={() => setshowExercisePickScreen(true)} className='addExercise' id='addExercise'>Add Exercise</button>
                        </div>
                    </div>
                    {/* Egzersiz Ekle Butonu */}
                    {/* Program Exercies List */}
                    {/* <ul className='programExerciesList'>
                                        <li className='element'>
                                            <div className='elementImage'>
                                                <img src="" alt="" />
                                            </div>
                                            <div className="elementContent">
                                                <p className="title">Barbell Bench Press</p>
                                            </div>
                                        </li>
                                    </ul> */}
                    {/* Planlama Butonu  */}
                </div>
            )} {/* showProgramScreenContainer */}
            {showExercisePickScreen && (
                <div className="showExercisePickScreenContainer">
                    <div className="header">
                        <button onClick={() => setshowExercisePickScreen(true)} className='mr-auto closeBtn'>
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
                            <li onClick={() => { setSelectedExercise(exercise); console.log(1) }} className="workoutListElement kerem" id={index} key={index}>
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
            )} {/* showExercisePickScreen */}
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
                        <div>
                            <button onClick={addSet} className='createNewSetsBtn'>Yeni SET</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NewProgramScreen;
