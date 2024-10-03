import React, { useState } from 'react';

const MuscleGain = () => {
  // State to manage initial and target weight
  const [initialWeight, setInitialWeight] = useState('');
  const [targetWeight, setTargetWeight] = useState('');
  
  // State to manage daily weight log
  const [dailyWeightLog, setDailyWeightLog] = useState([]);
  const [currentWeight, setCurrentWeight] = useState('');

  // Handle input changes for initial and target weight
  const handleInitialWeightChange = (e) => {
    setInitialWeight(e.target.value);
  };

  const handleTargetWeightChange = (e) => {
    setTargetWeight(e.target.value);
  };

  const handleCurrentWeightChange = (e) => {
    setCurrentWeight(e.target.value);
  };

  // Handle form submission to set weights
  const handleWeightSubmit = (e) => {
    e.preventDefault();
    if (initialWeight && targetWeight) {
      alert(`Goal Set: Initial Weight: ${initialWeight} lbs, Target Weight: ${targetWeight} lbs`);
    }
    // Reset form
    setInitialWeight('40');
    setTargetWeight('80');
  };

  // Handle daily weight log submission
  const handleDailyWeightSubmit = (e) => {
    e.preventDefault();
    if (currentWeight) {
      setDailyWeightLog([...dailyWeightLog, currentWeight]);
      setCurrentWeight('');
    }
  };

  // Calculate progress
  const currentWeightValue = dailyWeightLog[dailyWeightLog.length - 1] || initialWeight;
  const progress = currentWeightValue - initialWeight;
  const totalWeightGainGoal = targetWeight - initialWeight;

  return (
    <div className="muscle-gain-tracker">
      <h2>Muscle Gain Tracker</h2>
      
      {/* Form to set initial and target weight */}
      <form onSubmit={handleWeightSubmit}>
        <div>
          <label>Initial Weight (lbs):</label>
          <input
            type="1"
            value={initialWeight}
            onChange={handleInitialWeightChange}
            required
            placeholder="80"
          />
        </div>

        <div>
          <label>Target Weight (lbs):</label>
          <input
            type="2"
            value={targetWeight}
            onChange={handleTargetWeightChange}
            required
            placeholder="60"
          />
        </div>

        <button type="submit">Set Weight Goals</button>
      </form>

      {/* Daily weight log section */}
      <h3>Log Your Current Weight</h3>
      <form onSubmit={handleDailyWeightSubmit}>
        <div>
          <label>Current Weight (lbs):</label>
          <input
            type="number1"
            value={currentWeight}
            onChange={handleCurrentWeightChange}
            required
            placeholder="55"
          />
        </div>

        <button type="submit">Log Weight</button>
      </form>

      {/* Progress Display */}
      <h3>Progress</h3>
      <p>Current Weight: {currentWeightValue || initialWeight} lbs</p>
      <p>Weight Gained: {progress} lbs</p>
      <p>Total Weight Gain Goal: {totalWeightGainGoal} lbs</p>

      {/* Display daily weight log */}
      <h3>Daily Weight Log</h3>
      <ul>
        {dailyWeightLog.map((weight, index) => (
          <li key={index}>
            Day {index + 1}: {weight} lbs
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MuscleGain;
