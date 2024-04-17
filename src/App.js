import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import React, { useEffect, useState } from 'react';
import './App.css';
import LoginPage from './Pages/Login/LoginPage';  

import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { AuthProvider } from './Context/AuthContext'
import AdminDashboard from "./Pages/Admin/Dashboard/AdminDashboard";

import ListItems from "./Pages/ListItems/ListItems";
import CreateBlacklist from "./Pages/Admin/CreateBlacklist/CreateBlacklist";
import AddNewUser from "./Pages/Admin/Signup/AddNewUser";
import SignUpPage from "./Pages/Admin/Signup/SignupPage";
import BlacklistedItems from "./Pages/Admin/BlacklistedItem/BlacklistedItems";


function App() {
  const isSignUpPage = window.location.pathname === '/sign-up';
  const isLoginPage = window.location.pathname === '/';
  const headerTitle = isLoginPage || isSignUpPage ? 'Welcome to Safe Gate' : 'Welcome to Safe Gate Admin Dashboard';
  const showImage = isLoginPage || isSignUpPage;
  const footerComponent = isLoginPage ? <Footer /> : <Footer />;
  

  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <AuthProvider>
          <Header title={headerTitle} showImage={showImage} />
          <Routes>
            
            <Route path="/signup" element={<SignUpPage />} /> 
            <Route path="/" element={<LoginPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/add-new-user" element={<AddNewUser />} />
            <Route path="/items" element={<ListItems />} />
            <Route path="/create-blacklist" element={<CreateBlacklist />} />
            <Route path="/blacklisted-items" element={<BlacklistedItems />} />
          </Routes>
          {footerComponent}
          </AuthProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;