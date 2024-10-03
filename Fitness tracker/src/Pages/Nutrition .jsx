import React, { useState } from 'react';

const NutritionTracker = () => {
  // State to manage snack entries and total calories
  const [foodItem, setFoodItem] = useState('');
  const [calories, setCalories] = useState('');
  const [snackLog, setSnackLog] = useState([]);

  // Handle input changes
  const handleFoodItemChange = (e) => {
    setFoodItem(e.target.value);
  };

  const handleCaloriesChange = (e) => {
    setCalories(e.target.value);
  };

  // Handle form submission for logging snacks
  const handleSnackSubmit = (e) => {
    e.preventDefault();
    if (foodItem && calories) {
      const newSnackEntry = {
        item: foodItem,
        calories: parseFloat(calories),
      };
      setSnackLog([...snackLog, newSnackEntry]);
      setFoodItem('');
      setCalories('');
    }
  };

  // Calculate total calories consumed from snacks
  const totalCalories = snackLog.reduce((total, entry) => total + entry.calories, 0);

  return (
    <div className="nutrition-tracker">
      <h2>Snack Tracker</h2>

      {/* Log Snack Form */}
      <form onSubmit={handleSnackSubmit}>
        <div>
          <label>Snack Item:</label>
          <input
            type="text"
            value={foodItem}
            onChange={handleFoodItemChange}
            required
            placeholder="e.g., Chips"
          />
        </div>

        <div>
          <label>Calories:</label>
          <input
            type="number"
            value={calories}
            onChange={handleCaloriesChange}
            required
            placeholder="e.g., 200"
          />
        </div>

        <button type="submit">Log Snack</button>
      </form>

      {/* Display Total Calories and Snack Log */}
      <h3>Total Calories from Snacks: {totalCalories} kcal</h3>

      <h3>Snack Log</h3>
      <ul>
        {snackLog.map((entry, index) => (
          <li key={index}>
            {`${entry.item} - ${entry.calories} kcal`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NutritionTracker;
