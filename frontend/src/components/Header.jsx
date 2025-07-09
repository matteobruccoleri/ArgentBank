import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import styled from "styled-components";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <StyledHeader>
      <Link to="/">
        <img
          src="src/assets/img/argentBankLogo.png"
          alt="Argent Bank Logo"
          width="200px"
        />
      </Link>

      <StyledHeaderNav>
        {token && user ? (
          <>
            <StyledLink to="/profile">
              <span role="img" aria-label="user">👤</span>
              {user.firstName}
            </StyledLink>
            <StyledLink onClick={handleLogout}>
              Sign out
            </StyledLink>
          </>
        ) : (
          <StyledLink to="/login">Sign in</StyledLink>
        )}
      </StyledHeaderNav>
    </StyledHeader>
  );
}

export default Header;

// Styled components
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  background-color: #fff;
`;

const StyledHeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;

  &:hover {
    text-decoration: underline;
  }
`;
/*
const StyledLogoutButton = styled.button`
  background: none;
  border: none;
  color: #e74c3c;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
*/
