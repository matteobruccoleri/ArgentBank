import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

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
          <InputWrapper>
            <Label htmlFor="email">Username</Label>
            <Input
              type="text"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>

          <Submit type="submit" disabled={loading}>
            {loading ? 'Connexion...' : 'Sign in'}
          </Submit>
        </form>

        {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      </FormWrapper>
    </BackgroundDark>
  );
}

export default Login;

// Styled Component
const BackgroundDark = styled.div`
  background-color: #12002b;
  padding: 50px;
`;

const FormWrapper = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 6px;
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
    background-color: rgb(43, 195, 139);
  }
`;