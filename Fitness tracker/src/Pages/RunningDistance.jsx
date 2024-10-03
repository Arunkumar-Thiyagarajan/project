import React, { useState } from 'react';

const RunningDistanceTracker = () => {
  // State for target distance and daily run log
  const [targetDistance, setTargetDistance] = useState('');
  const [dailyRunLog, setDailyRunLog] = useState([]);
  const [runDistance, setRunDistance] = useState('');
  const [runDuration, setRunDuration] = useState('');
  const [runNotes, setRunNotes] = useState('');

  // Handle input changes
  const handleTargetDistanceChange = (e) => {
    setTargetDistance(e.target.value);
  };

  const handleRunDistanceChange = (e) => {
    setRunDistance(e.target.value);
  };

  const handleRunDurationChange = (e) => {
    setRunDuration(e.target.value);
  };

  const handleRunNotesChange = (e) => {
    setRunNotes(e.target.value);
  };

  // Handle form submission for setting the target distance
  const handleTargetSubmit = (e) => {
    e.preventDefault();
    if (targetDistance) {
      alert(`Running Goal Set: ${targetDistance} miles`);
      setTargetDistance('');
    }
  };

  // Handle form submission for logging a run
  const handleRunSubmit = (e) => {
    e.preventDefault();
    if (runDistance && runDuration) {
      const newRun = {
        distance: parseFloat(runDistance),
        duration: runDuration,
        notes: runNotes,
      };
      setDailyRunLog([...dailyRunLog, newRun]);
      setRunDistance('');
      setRunDuration('');
      setRunNotes('');
    }
  };

  // Calculate total distance run
  const totalDistanceRun = dailyRunLog.reduce((total, run) => total + run.distance, 0);
  const remainingDistance = targetDistance - totalDistanceRun;

  return (
    <div className="running-distance-tracker">
      <h2>Running Distance Tracker</h2>
      
      {/* Set Target Distance Form */}
      <form onSubmit={handleTargetSubmit}>
        <div>
          <label>Target Distance (miles):</label>
          <input
            type="number"
            value={targetDistance}
            onChange={handleTargetDistanceChange}
            required
            placeholder="e.g., 50"
          />
        </div>
        <button type="submit">Set Running Goal</button>
      </form>

      {/* Log Daily Run Form */}
      <h3>Log Your Daily Run</h3>
      <form onSubmit={handleRunSubmit}>
        <div>
          <label>Run Distance (miles):</label>
          <input
            type="number"
            value={runDistance}
            onChange={handleRunDistanceChange}
            required
            placeholder="e.g., 5"
          />
        </div>

        <div>
          <label>Run Duration (minutes):</label>
          <input
            type="number"
            value={runDuration}
            onChange={handleRunDurationChange}
            required
            placeholder="e.g., 30"
          />
        </div>

        <div>
          <label>Notes:</label>
          <textarea
            value={runNotes}
            onChange={handleRunNotesChange}
            placeholder="e.g., Felt great today!"
          />
        </div>

        <button type="submit">Log Run</button>
      </form>

      {/* Progress Display */}
      <h3>Progress</h3>
      <p>Total Distance Run: {totalDistanceRun} miles</p>
      <p>Remaining Distance to Goal: {remainingDistance > 0 ? remainingDistance : 0} miles</p>

      {/* Display Daily Run Log */}
      <h3>Daily Run Log</h3>
      <ul>
        {dailyRunLog.map((run, index) => (
          <li key={index}>
            {`Run ${index + 1}: ${run.distance} miles in ${run.duration} minutes. Notes: ${run.notes}`}
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
            <SecTitle>RunningDistance</SecTitle>
            {loading ? (
              <CircularProgress />
            ) : (
              <CardWrapper>
                {todaysRunningDistance.map((RunningDistance) => (
                  <RunningDistanceCard RunningDistance={RunningDistance} />
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

export default RunningDistanceTracker;
