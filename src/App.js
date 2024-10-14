
import './App.css';
import Register from './screens/RegistrationScreen'; // Import your Register component (assuming it's in the 'screen' folder)
import Dashboard from './screens/DashboardScreen'; // Import your Register component (assuming it's in the 'screen' folder)
import Test from './screens/test'; // Import your Register component (assuming it's in the 'screen' folder)
import Login from './screens/LoginScreen'; // Import your Register component (assuming it's in the 'screen' folder)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"; // Assuming you place CSS in this file
import './index.css'; // Go one level up to access the global styles
import $ from "jquery"

import React, { useEffect } from 'react'; 
function App() {
  return (
    <div className="App">
        <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dash" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
