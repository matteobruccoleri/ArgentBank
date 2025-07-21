import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, user, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      dispatch(fetchUserProfile());
    }
  }, [token, dispatch, navigate]);

  if (loading) return <p>Chargement du profil...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <main className="main bg-dark">
      <UsernameWrapper>
        <UserTitle>
          Welcome back
          <Username>{user?.firstName} {user?.lastName}!</Username>
        </UserTitle>
        <EditButton onClick={() => navigate('/edit-user')}>
          Edit Name
        </EditButton>
      </UsernameWrapper>

      <Account>
        <AccountContent>
          <AccountTitle>Argent Bank Checking (x8349)</AccountTitle>
          <Amount>$2,082.79</Amount>
          <AmountDescription>Available Balance</AmountDescription>
        </AccountContent>
        <TransactionButton>View transactions</TransactionButton>
      </Account>
      <Account>
        <AccountContent>
          <AccountTitle>Argent Bank Savings (x6712)</AccountTitle>
          <Amount>$10,928.42</Amount>
          <AmountDescription>Available Balance</AmountDescription>
        </AccountContent>
        <TransactionButton>View transactions</TransactionButton>
      </Account>
      <Account>
        <AccountContent>
          <AccountTitle>Argent Bank Credit Card (x8349)</AccountTitle>
          <Amount>$184.30</Amount>
          <AmountDescription>Current Balance</AmountDescription>
        </AccountContent>
        <TransactionButton>View transactions</TransactionButton>
      </Account>
    </main>
  );
}

export default User;

// Styled Component
const UsernameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const UserTitle = styled.h1`
  color: #fff;
`;

const Username = styled.span`
  display: block;
`;

const EditButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;

const Account = styled.section` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Amount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

const AmountDescription = styled.p`
  margin: 0;
`;

const AccountContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;
const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

const TransactionButton = styled.button`
  display: block;
  padding: 8px 16px;
  font-size: 1.1rem;
  font-weight: bold;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
`;

