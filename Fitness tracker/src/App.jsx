import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from'./components/login';
import RegistrationForm from './components/Registration';
import Navbar from "./components/Navbar";
import Dashboard from "./Pages/Dashboard";
import  WorkoutLogForm  from "./Pages/Workout";
import Nutrition  from "./Pages/Nutrition ";


export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/Register"element={<RegistrationForm/>} />
        <Route path="/Navbar" component={Navbar} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Workouts" component={WorkoutLogForm} />
        <Route path="/Nutrition" component={Nutrition} />
      </Routes>
    </Router>
  );
}


