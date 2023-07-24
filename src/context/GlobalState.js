import { createContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const appRef = useRef(null);

    const navigate = useNavigate();

    const [workouts, setWorkouts] = useState([]);
    const [date, setDate] = useState([]);
    const [today, setToday] = useState(new Date());
    const [selectedItem, setSelectedItem] = useState(null);
    const [workoutDuration, setWorkoutDuration] = useState(true);
    const [workoutDays, setWorkoutDays] = useState('');
    const [workoutDaysPH, setWorkoutDaysPH] = useState(true);
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);
    const [showProgramScreen, setShowProgramScreen] = useState(false);
    const [showExercisePickScreen, setshowExercisePickScreen] = useState(false);
    const workoutSearchInputRef = useRef(null);

    // Search fonksiyonu
    const [exerciseData, setExerciseData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Exercise Info Screen
    const [selectedExercise, setSelectedExercise] = useState(null);

    // Set component
    const [repCount, setRepCount] = useState(10);
    const [restTimeCount, setRestTimeCount] = useState(30);
    const [sets, setSets] = useState([]);

    useEffect(() => {
        const timer = setInterval(() => {
            setToday(new Date());
        }, 1000 * 60 * 60 * 24);
        return () => clearInterval(timer);
    }, []);


    const allData = {
        workouts, setWorkouts, date, setDate, today, selectedItem, setSelectedItem,
        workoutDuration, setWorkoutDuration,
        workoutDays, setWorkoutDays,
        workoutDaysPH, setWorkoutDaysPH,
        selectedDayIndex, setSelectedDayIndex,
        showProgramScreen, setShowProgramScreen,
        showExercisePickScreen, setshowExercisePickScreen,
        workoutSearchInputRef,
        exerciseData, setExerciseData,
        searchTerm, setSearchTerm,
        selectedExercise, setSelectedExercise,
        repCount, setRepCount,
        restTimeCount, setRestTimeCount,
        sets, setSets,
        appRef, navigate
    };

    return (
        <GlobalContext.Provider value={allData}>
            {props.children}
        </GlobalContext.Provider>
    );
};
