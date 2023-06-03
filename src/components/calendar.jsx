import React, {useContext, useRef, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';

function createDates(start, numDays){
    const dates = [];
    let startDate = new Date(start);
    const dayofWeek = startDate.getDay();
    if(dayofWeek >= 1) {
        startDate.setDate(startDate.getDate() - (dayofWeek - 1));
    } else {
        startDate.setDate(startDate.getDate() - 6)
    }

    for (var i = 0; i < numDays; i++){
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        dates.push(date)
    }
    return dates;
}

function Calendar(){
    const { date, setDate, today } = useContext(GlobalContext);
    
    const activeDayRef = useRef(null);

    useEffect(() => {
        setDate(createDates(today, 7));
        const timer = setTimeout(() => {
            if(activeDayRef.current){
                activeDayRef.current.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [today, setDate]);
    
    return (
        <>
            <div className="flex gap-3 overflow-x-auto">
                {date.map((date, index) => {
                    return (
                        <div ref={date.getDay() === today.getDay() ? activeDayRef : null} key={index} className={`${date.getDay() === today.getDay() ? 'bg-orange-500 text-white' : 'bg-white'} flex-1 text-center py-3 px-4  grid gap-2 rounded-md`}>
                            <p>
                                {date.toLocaleString('en-US', {weekday: 'short', timeZone: 'Europe/Istanbul'})}
                            </p>
                            <p>
                                {date.toLocaleString('en-US', {day: 'numeric'})}
                            </p>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Calendar;
