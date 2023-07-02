import Calendar from './components/calendar.jsx';
import ProgramCard from './components/programcard.jsx';
import workoutData from './data/workouts.json';
import React, { useContext, useEffect, useRef } from 'react';
import { GlobalContext } from './context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faPlayCircle, faHome, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as MusclePartsSvg } from './muscleparts.svg';
import { ReactComponent as LegPartsSvg } from './legpartssvg.svg';
import { ReactComponent as RestSvg } from './rest.svg';
import NewProgramScreen from './components/createnewprogram.jsx';

function App() {
  const { today, workouts, setWorkouts, selectedItem, setSelectedItem, showNewProgramScreen, setshowNewProgramScreen } = useContext(GlobalContext);
  const appRef = useRef(null);
  const tabbarContainerRef = useRef(null);
  const todaysWorkout = workouts.find((workout) => workout.day === today.toLocaleString('en-US', { weekday: 'long' }).toLowerCase())

  useEffect(() => {
    const app = appRef.current;
    const tabbarContainer = tabbarContainerRef.current;
    if (app && tabbarContainer) {
      const tabbarCoords = tabbarContainer.getBoundingClientRect();
      app.style.paddingBottom = `${tabbarCoords.height}px`;

      const tabbarItems = tabbarContainerRef.current.querySelectorAll('.tabbar-item');
      tabbarItems.forEach(item => {
        if (item.classList.contains('active')) {
          const divider = document.querySelector('#divider');
          const coords = item.getBoundingClientRect();
          const correctedTop = coords.top - tabbarCoords.top;
          const correctedLeft = coords.left - tabbarCoords.left;

          divider.style.setProperty('--divider-width', `${coords.width}px`);
          divider.style.setProperty('--divider-height', `${coords.height}px`);
          divider.style.setProperty('--divider-left', `${correctedLeft}px`);
          divider.style.setProperty('--divider-top', `${correctedTop}px`);
        }
      });
    }
  }, []); /* Page loaded Divider active */


  const handleTabbar = (event) => {
    const selectedLink = event.currentTarget;
    const tabbarCoords = tabbarContainerRef.current.getBoundingClientRect();
    const linkAreaLabel = selectedLink.getAttribute('aria-label');
    const divider = document.querySelector('#divider');
    const coords = selectedLink.getBoundingClientRect();
    const correctedTop = coords.top - tabbarCoords.top;
    const correctedLeft = coords.left - tabbarCoords.left;

    divider.style.setProperty('--divider-width', `${coords.width}px`);
    divider.style.setProperty('--divider-height', `${coords.height}px`);
    divider.style.setProperty('--divider-left', `${correctedLeft}px`);
    divider.style.setProperty('--divider-top', `${correctedTop}px`);

    selectedLink.classList.add('active');

    setSelectedItem(linkAreaLabel);
  };

  useEffect(() => {
    setWorkouts(workoutData);
  }); /* setWorkouts */


  useEffect(() => {
    if (todaysWorkout) {
      const musclepartsSvg = document.querySelector('svg');
      const paths = musclepartsSvg.querySelectorAll('path');

      if (todaysWorkout) {
        todaysWorkout.muscleparts.forEach((part, index) => {
          paths.forEach((path, index) => {
            if (part === path.classList[0]) {
              path.setAttribute('fill', '#F97316');
              path.setAttribute('stroke', '#fb923c');
              if (part === 'nipples') {
                path.setAttribute('fill', '#fff');
              }
            }
          })
        });
      }

    }
  }, [todaysWorkout]);

  const handleCreateNewProgram = () => {
    setshowNewProgramScreen(true);
  };

  return (
    <div ref={appRef} className="App">
      <main className="screen">
        <div className="mainScreen-container">
          {/* <div className="bg-red-500 bg-yellow-500 bg-amber-500 bg-rose-500 bg-orange-500 bg-lime-500 bg-green-500 bg-emerald-500 bg-teal-500 bg-sky-500 bg-blue-500 bg-cyan-500 bg-indigo-500 bg-violet-500 bg-purple-500 bg-fuchsia-500 bg-pink-500 hidden"></div> */}
          <div className='header'>
            <div className='rounded-full w-16'>
              <img className='w-full rounded-full' src="https://i.pravatar.cc/150" alt="" />
            </div>
            <div>
              <p className='text-sm text-gray-600'>Welcome</p>
              <h3 className='text-lg font-semibold'>[Kerem Unce]</h3>
            </div>
            <button onClick={handleCreateNewProgram} className='createNewBtn ml-auto headerCreateProgram'>
              <FontAwesomeIcon className='text-2xl' icon={faPlus}></FontAwesomeIcon>
            </button>
          </div> {/* HEADER */}

          <Calendar></Calendar>

          <div className="grid gap-3">
            <p className='font-bold tracking-widest'>TODAY'S WORKOUT</p>
            <div className="programCard-container">
              <div className="programCard">
                <div className="muscleParts-container">
                  <div className="muscleParts">
                    {todaysWorkout ? (
                      todaysWorkout.type === 'upper' ? (
                        <MusclePartsSvg></MusclePartsSvg>
                      ) : (
                        <LegPartsSvg></LegPartsSvg>
                      )
                    ) : (
                      <RestSvg></RestSvg>
                    )}
                  </div>
                  {todaysWorkout ? (
                    <div className='calories'>
                      {todaysWorkout && (
                        <p>{todaysWorkout.calories}</p>
                      )}
                      <p>Calories</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>{/* muscleParts */}
                <div className="workoutInfo">
                  {todaysWorkout ? (
                    todaysWorkout && todaysWorkout.exercies.map((element, index) => (
                      <div className="workoutInfo-element" key={index}>
                        <div className={`color ${element.color}`}></div>
                        <div className='textContent'>
                          <p>{element.name}</p>
                          <p>{element.target}</p>
                        </div>
                        <div className="repSet">
                          <p>{element.rep} <span>x{element.set}</span></p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className='grid place-items-center '>
                      <h5 className='font-semibold'>Dinlenme Gunu</h5>
                    </div>
                  )
                  }
                </div> {/* WorkoutInfo */}
              </div>
              <button className={`startWorkoutBtn ${todaysWorkout ? 'bg-orange-500' : 'bg-orange-300'}`}  >
                <FontAwesomeIcon className='text-right mr-2' icon={faPlayCircle}></FontAwesomeIcon>
                Start Workout
              </button>
            </div>
          </div> {/* TODAYS WORKOUT */}

          <div className="grid gap-3">
            <p className='font-bold tracking-widest'>OTHER PROGRAMS</p>
            <div className="otherProgramsContainer">
              <div className="slider">
                <button onClick={handleCreateNewProgram} className="createNewBtn createNewProgram">
                  <FontAwesomeIcon icon={faPlus} />
                  <p>Create New</p>
                </button>
                {
                  workouts.map((workout, index) => (
                    <ProgramCard workout={workout} key={index}></ProgramCard>
                  ))
                }
              </div>
            </div>
          </div> {/* OTHER WORKOUTS */}

          <div ref={tabbarContainerRef} className="tabbar-container">
            <div id="divider"></div>
            <div aria-label='home' className={`tabbar-item active ${selectedItem === 'home' ? 'active' : ''}`} onClick={(e) => { handleTabbar(e) }}>
              <button href="#"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></button>
            </div>
            <div aria-label='chart' className={`tabbar-item ${selectedItem === 'chart' ? 'active' : ''}`} onClick={(e) => { handleTabbar(e) }}>
              <button href="#"><FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon></button>
            </div>
            <div aria-label='user' className={`tabbar-item ${selectedItem === 'user' ? 'active' : ''}`} onClick={(e) => { handleTabbar(e) }}>
              <button href="#"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></button>
            </div>
          </div> {/* TABBAR */}
        </div>
        {showNewProgramScreen &&
          <div className="NewProgramScreen-container">
            <NewProgramScreen></NewProgramScreen>
          </div>
        }

      </main>
    </div>
  );
}

export default App;
