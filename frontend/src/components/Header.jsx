import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import styled from "styled-components";

import argentBankLogo from '../assets/img/argentBankLogo.png';
import iconUser from '../assets/icons/icon-user.svg';
import iconLogout from '../assets/icons/icon-logout.svg';

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
        <Logo src={argentBankLogo} alt="Argent Bank Logo"/>
      </Link>

      <StyledHeaderNav>
        {token && user ? (
          <>
            <StyledLink to="/profile">
              <IconUser src={iconUser} alt="icon user"/>
              {user.firstName}
            </StyledLink>
            <StyledLink onClick={handleLogout}>
              <IconLogout src={iconLogout} alt="icon logout"/>
              Sign out
            </StyledLink>
          </>
        ) : (
          <StyledLink to="/login">
            <IconUser src={iconUser} alt="icon user"/>
            Sign in       
          </StyledLink>
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
  gap: 6px;
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;

  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  width : 150px;
  @media (min-width: 920px) {
    width: 200px;
  }
`;

const IconUser = styled.img`
    height: 25px;
    background-color: #12002b;
    border-radius: 50%;
    padding: 5px;
`;

const IconLogout = styled.img`
    height: 25px;
`;
