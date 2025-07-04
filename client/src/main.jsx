import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RegistrationPage from './pages/registeration/RegistrationPage.jsx';
import LoginPage from './pages/login/Login.jsx';

// ✅ Define the router properly
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="register" element={<RegistrationPage />} />
      <Route path="login" element={<LoginPage />} />
    </Route>
  )
);

// ✅ Mount the app with router
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
