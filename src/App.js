import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import Header from './components/Header'
import Footer from './components/Footer';
import LearnPage from './pages/LearnPage';
import CreateVulnPage from './pages/CreateVulnPage';
import VulnerabilityPage from './pages/VulnerabilityPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/"                   element={<HomePage />} />
                <Route path="/learn"              element={<LearnPage />} />
                <Route path="/login"              element={<LoginPage />} />
                <Route path="/register"           element={<RegisterPage />} />
                <Route path="/createVuln"         element={<CreateVulnPage />} />
                <Route path="/learn/vulnerability/:id"  element={<VulnerabilityPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
