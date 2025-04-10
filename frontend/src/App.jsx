import './App.css';
import './App.css';
import React from 'react';
import Users from 'pages/users/Users';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Layout from 'pages/layout/Layout';
import UserManager from 'pages/users/UserManager';
import UserDetails from 'pages/users/UserDetails';

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="users/edit/:id" element={<UserManager />} />
        <Route path="users/new" element={<UserManager />} />
        <Route path="users/:id" element={<UserDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;