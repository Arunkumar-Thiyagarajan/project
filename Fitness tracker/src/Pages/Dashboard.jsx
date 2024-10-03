// Dashboard.jsx

import React from "react";
import "./Dashboard.css"; // For styling the dashboard layout

const Dashboard = ({ goalType, workouts, nutrition }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Fitness Dashboard</h1>
        <p>Track your progress and stay on top of your fitness goals</p>
      </div>

      <div className="dashboard-content">
        {/* Goal Summary Section */}
        <div className="dashboard-section">
          <GoalSummary goalType={goalType} />
        </div>

        {/* Workout Summary Section */}
        <div className="dashboard-section">
          <WorkoutSummary workouts={workouts} />
        </div>

        {/* Nutrition Summary Section */}
        <div className="dashboard-section">
          <NutritionSummary nutrition={nutrition} />
        </div>

        {/* Progress Insights Section */}
        <div className="dashboard-section">
          <ProgressInsights workouts={workouts} nutrition={nutrition} />
        </div>

        {/* Exercise & Diet Suggestions */}
        <div className="dashboard-section">
          <SuggestedPlan goal={goalType} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
