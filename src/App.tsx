import { SignupPage } from './pages/SignupPage';
import { Routes, Route, Navigate } from 'react-router-dom';

import './styles.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} />
      <Route path="/register" element={<SignupPage />} />
    </Routes>
  );
};

export { App };
