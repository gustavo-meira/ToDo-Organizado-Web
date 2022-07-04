import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { SignUpPage } from '../pages/SingUpPage';
import { TasksPage } from '../pages/TasksPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/sign-up" element={<SignUpPage />} />
    <Route path="/tasks" element={<TasksPage />} />
  </Routes>
);

export { AppRoutes };
