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
      dispatch(fetchUserProfile(token));
    }
  }, [token, dispatch, navigate]);

  if (loading) return <p>Chargement du profil...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <main class="main bg-dark">
      <div class="username_wrapper">
        <h2>Welcome back
          <span>{user?.firstName} {user?.lastName}!</span>
        </h2>
      <EditButton>Edit Name</EditButton>
      </div>
      <Account>
        <AccountContent>
          <AccountTitle>Argent Bank Checking (x8349)</AccountTitle>
          <Amount>$2,082.79</Amount>
          <AmountDescription>Available Balance</AmountDescription>
        </AccountContent>
        <div class="account-content-wrapper cta">
          <TransactionButton>View transactions</TransactionButton>
        </div>
      </Account>
      <Account>
        <AccountContent>
          <AccountTitle>Argent Bank Savings (x6712)</AccountTitle>
          <Amount>$10,928.42</Amount>
          <AmountDescription>Available Balance</AmountDescription>
        </AccountContent>
        <div class="account-content-wrapper cta">
          <TransactionButton>View transactions</TransactionButton>
        </div>
      </Account>
      <Account>
        <AccountContent>
          <AccountTitle>Argent Bank Credit Card (x8349)</AccountTitle>
          <Amount>$184.30</Amount>
          <AmountDescription>Current Balance</AmountDescription>
        </AccountContent>
        <div class="account-content-wrapper cta">
          <TransactionButton>View transactions</TransactionButton>
        </div>
      </Account>
    </main>
  );
}

export default User;


const EditButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;


const Account = styled.section` 
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
`;

const Amount = styled.p` {
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

const AmountDescription = styled.p` {
  margin: 0;
`;


const AccountContent = styled.div` {
  width: 100%;
  flex: 1;
`;

const AccountTitle = styled.h3` {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

const TransactionButton = styled.button` {
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
`;

/*

@media (min-width: 720px) {
  .account {
    flex-direction: row;
  }

  .account-content-wrapper.cta {
    flex: 0;
  }

  .transaction-button {
    width: 200px;
  }
}
  */