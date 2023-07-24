import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
// import axios from 'axios';

function ShowProgramScreen() {
    const { selectedDayIndex, navigate } = useContext(GlobalContext);

    // const fetchExerciseData = async () => {
    //     try {                        // Önbellekte veri yok, API'den veriyi çek
    //         const response = await axios.get('https://exercisedb.p.rapidapi.com/exercises', {
    //             headers: {
    //                 'X-RapidAPI-Key': '722895e6a7mshdd582378ce49955p1cb2c6jsnd8470e7d5adb',
    //                 'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    //             }
    //         });

    //         // Veriyi önbelleğe kaydet
    //         setExerciseData(response.data);
    //     }
    //     catch (error) {
    //         console.error('Veri çekme hatası:', error);
    //     }
    // };

    return (
        <>
            <div className="showProgramScreenContainer">
                <div className="header">
                    <button onClick={() => navigate(-1)} className='mr-auto closeBtn'>
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
                        <NavLink to='/ExercisePickScreen' className='addExercise' id='addExercise'>Add Exercise</NavLink>
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
        </>
    )
}

export default ShowProgramScreen;
