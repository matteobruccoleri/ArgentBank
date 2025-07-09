import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export default function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, user, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      dispatch(fetchUserProfile(token));
    }
  }, [token, dispatch, navigate]);

  if (loading) return <p>Chargement du profil...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <h2>Bonjour, {user?.firstName} {user?.lastName}</h2>
      <p>Voici vos comptes bancaires :</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
          Compte courant - ****1234 - 2 000,00 €
        </li>
        <li style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
          Compte épargne - ****5678 - 5 000,00 €
        </li>
        <li style={{ border: '1px solid #ccc', padding: '1rem' }}>
          Livret A - ****9999 - 1 200,00 €
        </li>
      </ul>
    </div>
  );
}