import React, { useContext } from 'react';
import { GoalContext } from '../context/GoalContext'; 

const ExerciseSuggestions = () => {
  const { userGoal } = useContext(GoalContext);

  const suggestExercises = () => {
    if (userGoal.goalType === 'weight_loss') {
      return ["Cardio (Running, Cycling)", "HIIT", "Strength Training (Low weight, High reps)"];
    } else if (userGoal.goalType === 'muscle_gain') {
      return ["Weightlifting (High weight, Low reps)", "Compound Lifts (Squats, Deadlifts)", "Bodybuilding splits"];
    } else if (userGoal.goalType === 'running_distance') {
      return ["Long Distance Running", "Interval Training", "Plyometrics"];
    }
  };

  const suggestDiet = () => {
    if (userGoal.goalType === 'weight_loss') {
      return ["High Protein, Low Carb", "Vegetables and Lean Meats", "Avoid Sugary Drinks and Snacks"];
    } else if (userGoal.goalType === 'muscle_gain') {
      return ["High Protein Diet", "Carbohydrates for Energy", "Supplements (e.g., Creatine, Whey Protein)"];
    } else if (userGoal.goalType === 'running_distance') {
      return ["Balanced Diet", "Carb Loading", "Electrolytes and Hydration"];
    }
  };

  return (
    <div>
      <h2>Exercise Suggestions</h2>
      <ul>
        {suggestExercises().map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>

      <h2>Diet Suggestions</h2>
      <ul>
        {suggestDiet().map((diet, index) => (
          <li key={index}>{diet}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseSuggestions;
