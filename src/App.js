import Calendar from './components/calendar.jsx';
import ProgramCard from './components/programcard.jsx';
import { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';
function App() {
  const {workouts, setWorkouts} = useContext(GlobalContext)

  return (
    <div className="App h-screen p-4">
      <div className="screen grid gap-5 relative">
        <div>
          <h1 className="text-2xl font-bold text-slate-700">Welcome! 💪🏼 </h1>
        </div>

        <Calendar></Calendar>

        <div className="grid gap-3">
          <h2>Bugünki Program</h2>
          <ProgramCard></ProgramCard>
        </div>

      </div>
    </div>
  );
}

export default App;
