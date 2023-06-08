import Calendar from './components/calendar.jsx';
import ProgramCard from './components/programcard.jsx';
import workoutData from './data/workouts.json';
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from './context/GlobalState';

function App() {
  const { today, workouts, setWorkouts } = useContext(GlobalContext);

  useEffect(() => {
    setWorkouts(workoutData);
  }, []);

  const todaysWorkout = workouts.find((workout) => workout.day === today.toLocaleString('en-US', { weekday: 'long' }).toLowerCase())

  return (
    <div className="App h-screen p-4">
      <div className="screen grid gap-5 relative">
        <div>
          <h1 className="text-2xl font-bold text-slate-700">Welcome! 💪🏼 </h1>
        </div>

        <Calendar></Calendar>

        <div className="grid gap-3">
          <h2>Bugünki Program</h2>
          {todaysWorkout ? (
            <ProgramCard workout={todaysWorkout}></ProgramCard>
          ) : (
            <p>Bugun icin bir program bulunamadi.</p>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
