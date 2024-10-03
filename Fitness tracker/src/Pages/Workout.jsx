import React, { useState } from 'react';

const WorkoutLogForm = () => {
  const [workout, setWorkout] = useState({
    exercise: 'Push up',
    duration: '30-60 ',
    intensity: 'squats, lunges',
    caloriesBurned: ' 7 '
({
          exercise: 'chest workout ',
          duration: '12 minutes to 30 minutes',
          intensity: ' jump rope',
          caloriesBurned: '440 calories'
      
        })

        ({
            exercise: 'squat',
            duration: '10-20 ',
            intensity: '	65 lb',
            caloriesBurned: '52.5 '
        
          })

  });

      
  
    
  
  const [workouts, setWorkouts] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkout({ ...workout, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWorkouts([...workouts, workout]);
    setWorkout({ exercise: '', duration: '', intensity: '', caloriesBurned: '' });
  };

  return (
    <div>
      <h2>Log Your Workout</h2>
      <form onSubmit={handleSubmit}>
        <input name="exercise" placeholder="Exercise" value={workout.exercise} onChange={handleInputChange} required />
        <input name="duration" placeholder="Duration (mins)" value={workout.duration} onChange={handleInputChange} required />
        <input name="intensity" placeholder="Intensity (Low/Medium/High)" value={workout.intensity} onChange={handleInputChange} required />
        <input name="caloriesBurned" placeholder="Calories Burned" value={workout.caloriesBurned} onChange={handleInputChange} required />
        <button type="submit">Add Workout</button>
      </form>

      <h3>Workouts</h3>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            {workout.exercise}, {workout.duration} mins, {workout.intensity}, {workout.caloriesBurned} kcal
          </li>
        ))}
         <Container>
      <Wrapper>
        <Left>
          <Title>Select Date</Title>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              onChange={(e) => setDate(`${e.$M + 1}/${e.$D}/${e.$y}`)}
            />
          </LocalizationProvider>
        </Left>
        <Right>
          <Section>
            <SecTitle>Todays Workout</SecTitle>
            {loading ? (
              <CircularProgress />
            ) : (
              <CardWrapper>
                {todaysWorkouts.map((workout) => (
                  <WorkoutCard workout={workout} />
                ))}
              </CardWrapper>
            )}
          </Section>
        </Right>
      </Wrapper>
    </Container>
      </ul>
    </div>
     
         
       
  );
};

export default WorkoutLogForm;
