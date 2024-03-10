// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import RegistrationForm from './Login/registrationForm';
import LoginForm from './Login/loginForm';
import RoleSelector from './Role/RoleSelector';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/RoleSelector" element={<RoleSelector />} />
            </Routes>
        </Router>
    );
}

export default App;
