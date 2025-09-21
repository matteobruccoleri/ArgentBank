import Hero from '../components/Hero';

import iconMoney from '../assets/icons/icon-money.png';
import iconChat from '../assets/icons/icon-chat.png';
import iconSecurity from '../assets/icons/icon-security.png';
import styled from "styled-components";

function Home() {
  return (

    <main>
      <Hero />
      <Features>
        <TitleHidden>Features</TitleHidden>
        <Item>
          <Icon src={iconChat} alt="Chat Icon" />
          <Title>You are our #1 priority</Title>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </Item>
        <Item>
          <Icon src={iconMoney} alt="Chat Icon" />
          <Title>More savings means higher rates</Title>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </Item>
        <Item>
          <Icon src={iconSecurity} alt="Security Icon" />
          <Title>Security you can trust</Title>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </Item>
      </Features>
    </main>
  );
}
export default Home;

// Styled components
const Features = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

const TitleHidden = styled.h1`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidde !important;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1;
  padding: 2.5rem;
`;

const Title = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
`;

const Icon = styled.img`
  width: 152px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`;

