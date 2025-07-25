import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import User from './pages/User';
import EditUser from "./pages/EditUser";

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<User />} />
        <Route path="/edit-user" element={<EditUser />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
