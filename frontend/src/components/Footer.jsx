import styled from "styled-components";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <StyledFooter>
        <StyledFooterText>Copyright 2020 Argent Bank</StyledFooterText>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;
  background-color: #fff;
  margin-top: auto;
`;
const StyledFooterText = styled.p`
    font-size: 16px;
`;