import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "./features/auth/authSlice";
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import User from './pages/User';
import EditUser from "./pages/EditUser";

import './App.css';

function App() {
  const dispatch = useDispatch();
  const { token, user, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token && !user && !loading) {
      dispatch(fetchUserProfile());
    }
  }, [token, user, loading, dispatch]);

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
