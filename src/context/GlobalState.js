import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {

    const [workouts, setWorkouts] = useState([]);
    const [date, setDate] = useState([]);
    const [today, setToday] = useState(new Date());
    const [selectedItem, setSelectedItem] = useState(null);


    useEffect(() => {
        const timer = setInterval(() => {
            setToday(new Date());
        }, 1000 * 60 * 60 * 24);
        return () => clearInterval(timer);
    }, []);


    const allData = {
        workouts, setWorkouts, date, setDate, today, selectedItem, setSelectedItem
    };

    return (
        <GlobalContext.Provider value={allData}>
            {props.children}
        </GlobalContext.Provider>
    );
};
