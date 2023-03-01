import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Layout from './Layout';
import './App.css';
import Weather from './pages/Weather';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import User from './pages/User';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="home" element={<ProtectedRoute>
            <Home />
          </ProtectedRoute>
          } />
          <Route path="weather" element={
            <ProtectedRoute>
            <Weather />
          </ProtectedRoute>
          } />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
