import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, loading, error } = useSelector((state) => state.auth);

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  // Rediriger vers /profile si le token est présent
  useEffect(() => {
    if (token) {
      navigate('/profile');
    }
  }, [token, navigate]);

  return (
    <BackgroundDark>
    <FormWrapper>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <InputWrapper style={{ marginBottom: '1rem' }}>
          <Label for="username">Username</Label>
          <Input
            type="text"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </InputWrapper>
        <InputWrapper style={{ marginBottom: '1rem' }}>
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </InputWrapper>
          <InputRemember>
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </InputRemember>
        <Submit type="submit" disabled={loading} style={{ width: '100%', padding: '0.5rem' }}>
          {loading ? 'Connexion...' : 'Sign in'}
        </Submit>
      </form>

      {/* Messages d'état */}
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>❌ {error}</p>}
    </FormWrapper>
</BackgroundDark>

  );
}
export default Login;

// Styled components
const BackgroundDark = styled.div`
  background-color: #12002b;
  padding: 50px;
`;

/*
const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;
*/
const FormWrapper = styled.div`
    box-sizing: border-box;
    background-color: white;
    width: 300px;
    margin: 0 auto;
    padding: 2rem;
`;



const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 1.2rem;
  border-radius: 4px;
  border: 1px solid rgb(118, 118, 118);
`;

const InputRemember = styled.div`
  display: flex;
  gap: 8px;
`;

const Submit = styled.button` 
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border: none;
  background-color: #00bc77;
  color: #fff;
  border-radius: 4px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    background-color:rgb(43, 195, 139);
  }
`;


