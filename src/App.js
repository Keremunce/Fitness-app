import Calendar from './components/calendar.jsx';
import ProgramCard from './components/programcard.jsx';
import workoutData from './data/workouts.json';
import React, { useContext, useEffect, useRef } from 'react';
import { GlobalContext } from './context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faGear, faUser, faPlayCircle, faHome, faChartLine } from '@fortawesome/free-solid-svg-icons'

function App() {
  const { today, workouts, setWorkouts, selectedItem, setSelectedItem } = useContext(GlobalContext);
  const appRef = useRef(null);
  const tabbarContainerRef = useRef(null);
  
  useEffect(() => {
    const app = appRef.current;
    const tabbarContainer = tabbarContainerRef.current;
    if(app && tabbarContainer){
      const tabbarCoords = tabbarContainer.getBoundingClientRect();
      app.style.paddingBottom = `${tabbarCoords.height}px`;

      const tabbarItems = tabbarContainerRef.current.querySelectorAll('.tabbar-item');
      tabbarItems.forEach(item => {
        if(item.classList.contains('active')){
          const divider = document.querySelector('#divider');
          const coords = item.getBoundingClientRect();
          const correctedTop = coords.top - tabbarCoords.top;
          const correctedLeft = coords.left - tabbarCoords.left;

          divider.style.setProperty('--divider-width', `${coords.width}px`);
          divider.style.setProperty('--divider-height', `${coords.height}px`);
          divider.style.setProperty('--divider-left', `${correctedLeft}px`);
          divider.style.setProperty('--divider-top', `${correctedTop}px`);
      
          // divider'in css'ini yerlestirmek 
        }
      });
    } 
  },[]);
  
  
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
  });

  const todaysWorkout = workouts.find((workout) => workout.day === today.toLocaleString('en-US', { weekday: 'long' }).toLowerCase())

  return (
    <div ref={appRef} className="App">
      <main className="screen grid gap-5 relative">
        <div className='flex items-center gap-4'>
          <div className='rounded-full bg-gray-300 py-3 px-4'>
            <FontAwesomeIcon className='text-2xl text-gray-600' icon={faUser}></FontAwesomeIcon>
          </div>
          <div>
            <p className='text-sm text-gray-600'>Welcome</p>
            <h3 className='text-lg font-semibold'>[Kerem Unce]</h3>
          </div>
          <div className='ml-auto'>
            <FontAwesomeIcon className='text-2xl' icon={faGear}></FontAwesomeIcon>
          </div>
        </div>

        <Calendar></Calendar>

        <div className="grid gap-3">
          <p className='font-bold tracking-widest'>TODAY'S WORKOUT</p>
          <div className="programCard-container">
            <div className="programCard">
              <div className="muscleParts-container">
                <div className='muscleParts'>
                  <img src={process.env.PUBLIC_URL + '/images/muscle-parts.svg'} alt="muscleparts" />
                </div>
                <div className='calories'>
                  <p>1.359</p>
                  <p>Calories</p>
                </div>
              </div>{/* muscleParts */}
              <div className="workoutInfo">
                <div className='workoutInfo-element'>
                  <div className='color bg-green-500'></div>
                  <div className='textContent'>
                    <p>Barbell Bench Press</p>
                    <p>Chest, triceps</p>
                  </div>
                  <div className="repSet">
                    <p>12 <span>x4</span></p>
                  </div>
                </div>
                <div className='workoutInfo-element'>
                  <div className='color bg-rose-500'></div>
                  <div className='textContent'>
                    <p>Barbell Bench Press</p>
                    <p>Chest, triceps</p>
                  </div>
                  <div className="repSet">
                    <p>12 <span>x4</span></p>
                  </div>
                </div>
                <div className='workoutInfo-element'>
                  <div className='color bg-sky-500'></div>
                  <div className='textContent'>
                    <p>Barbell Bench Press</p>
                    <p>Chest, triceps</p>
                  </div>
                  <div className="repSet">
                    <p>12 <span>x4</span></p>
                  </div>
                </div>
              </div> {/* WorkoutInfo */}
            </div>
            <button className='startWorkoutBtn'>
              <FontAwesomeIcon className='text-right mr-2' icon={faPlayCircle}></FontAwesomeIcon>
              Start Workout 
              </button>
          </div>
          {todaysWorkout ? (
            <ProgramCard workout={todaysWorkout}></ProgramCard>
          ) : (
            <p>Bugun icin bir program bulunamadi.</p>
          )}
        </div> {/* TODAYS WORKOUT */}

        <div className="grid gap-3">
          <p className='font-bold tracking-widest'>OTHER PROGRAMS</p>
          <div className="otherProgramsContainer">
            <div className="slider">
              <div className="createNewProgram">
                <FontAwesomeIcon icon={faPlus} />
                <p>Create New</p>
              </div>
              <div className="card">
                <div className='content'>
                  <p>Chest & Triceps Day</p>
                  <p>60min</p>
                </div>
                <div className='image-container'>
                  <img src={process.env.PUBLIC_URL + '/images/triceps.jpg'} alt="triceps" />
                  <img src={process.env.PUBLIC_URL + '/images/benchpress.jpg'} alt="benchpress" />
                </div>
              </div>
              <div className="card">
                <div className='content'>
                  <p>Chest & Triceps Day</p>
                  <p>60min</p>
                </div>
                <div className='image-container'>
                  <img src={process.env.PUBLIC_URL + '/images/triceps.jpg'} alt="triceps" />
                  <img src={process.env.PUBLIC_URL + '/images/benchpress.jpg'} alt="benchpress" />
                </div>
              </div>
              {/* {
                workouts.map((workout, index) => (
                  <ProgramCard workout={workout} key={index}></ProgramCard>
                ))
              } */}
            </div>
          </div>
        </div> {/* OTHER WORKOUTS */}

        <div ref={tabbarContainerRef} className="tabbar-container">
            <div id="divider"></div>
            <div aria-label='home' className={`tabbar-item active ${selectedItem === 'home' ? 'active' : ''}`} onClick={(e) => {handleTabbar(e)}}>
              <button  href="#"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></button>
            </div>
            <div aria-label='chart' className={`tabbar-item ${selectedItem === 'chart' ? 'active' : ''}`}  onClick={(e) => {handleTabbar(e)}}>
              <button href="#"><FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon></button>
            </div>
            <div aria-label='user' className={`tabbar-item ${selectedItem === 'user' ? 'active' : ''}`}  onClick={(e) => {handleTabbar(e)}}>
              <button href="#"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></button>
            </div>
        </div>

      </main>
    </div>
  );
}

export default App;
