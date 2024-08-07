import { SignupPage } from './pages/SignupPage';
import { Routes, Route, Navigate } from 'react-router-dom';

import './styles.css';
import { SigninPage } from './pages/SignInPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/register" element={<SignupPage />} />
      <Route path="/login" element={<SigninPage />} />
    </Routes>
  );
};

export { App };
