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
      <button class="edit-button">Edit Name</button>
      </div>
      <Account>
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Checking (x8349)</h3>
          <AccountAmount>$2,082.79</AccountAmount>
          <p class="account-amount-description">Available Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </Account>
      <Account>
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Savings (x6712)</h3>
          <AccountAmount>$10,928.42</AccountAmount>
          <p class="account-amount-description">Available Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </Account>
      <Account>
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
          <AccountAmount>$184.30</AccountAmount>
          <p class="account-amount-description">Current Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </Account>
    </main>
  );
}

export default User();



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

const AccountAmount = styled.p` {
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

.account-amount-description {
  margin: 0;
}

.account-title {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
}

.account-content-wrapper {
  width: 100%;
  flex: 1;
}

.edit-button {
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
}

.header {
  color: #fff;
  margin-bottom: 2rem;
}

.transaction-button {
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
}

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