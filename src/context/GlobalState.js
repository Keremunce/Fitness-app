import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {

    const [workouts, setWorkouts] = useState([]);
    const [date, setDate] = useState([]);
    const [today, setToday] = useState(new Date());


    useEffect(() => {
        const timer = setInterval(() => {
            setToday(new Date());
        }, 1000 * 60 * 60 * 24);
        return () => clearInterval(timer);
    }, []);


    const allData = {
        workouts, setWorkouts, date, setDate, today
    };

    return (
        <GlobalContext.Provider value={allData}>
            {props.children}
        </GlobalContext.Provider>
    );
};
