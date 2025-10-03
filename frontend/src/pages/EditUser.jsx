import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile, updateUser } from "../features/auth/authSlice";
import styled from "styled-components";

function EditUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token, loading, error } = useSelector((state) => state.auth);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      dispatch(fetchUserProfile());
    }
  }, [token, dispatch, navigate]);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(updateUser({ firstName, lastName }));
    if (result.meta.requestStatus === "fulfilled") {
      navigate("/profile");
    }
  };

  return (
    <main className="main bg-dark">
      <UsernameWrapper>
        <UserTitle>Welcome Back</UserTitle>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </InputWrapper>
          <ButtonWrapper>
            <SaveButton type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </SaveButton>
            <CancelButton type="button" onClick={() => navigate("/profile")}>
              Cancel
            </CancelButton>
          </ButtonWrapper>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </Form>
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

export default EditUser;

// Styled components
const UsernameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;

  @media (min-width: 425px) {
    width: max-content;
  }
`;

const UserTitle = styled.h1`
  color: #fff;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  @media (min-width: 425px) {
    width: 80%;
    flex-direction: row;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;

  @media (min-width: 425px) {
    width: 50%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  
  @media (min-width: 425px) {
    width: max-content;
  }

`;

const SaveButton = styled.button`
  background-color: #00bc77;
  color: white;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  flex: 1 0 0;

  @media (min-width: 425px) {
    width: 100px;
  }
`;

const CancelButton = styled.button`
  background-color: #fff;
  color: #00bc77;
  border: 1px solid #00bc77;
  padding: 8px 12px;
  cursor: pointer;
  flex: 1 0 0;

  @media (min-width: 425px) {
    width: 100px;
  }
`;

const Account = styled.section` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 1px solid black;
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;

  @media (min-width: 425px) {
    width: 80%;
  }

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

