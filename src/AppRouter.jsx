import React from 'react'
import { Route,Routes } from 'react-router-dom'

import Home from './app/pages/Home'
import Login from './app/pages/Login'
import Logout from './app/pages/Logout'
import Project from './app/pages/Project' 
 
const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/project/:id" element={<Project />} />
    <Route path="/login" element={<Login />} />
    <Route path="/logout" element={<Logout />} />
  </Routes>
);

export default AppRouter