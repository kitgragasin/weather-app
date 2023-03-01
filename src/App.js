import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Layout from './Layout';
import './App.css';
import Weather from './pages/Weather';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="home" element={<Home />} />
          <Route path="weather" element={<Weather />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
