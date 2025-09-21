import styled from "styled-components";



function Hero() {
        return (
            <HeroWrapper>
                <Content>
                    <div>
                        <TitleHidden>Promoted Content</TitleHidden>
                        <Subtitle>No fees.</Subtitle>
                        <Subtitle>No minimum deposit.</Subtitle>
                        <Subtitle>High interest rates.</Subtitle>
                    </div>
                    <Text>Open a savings account with Argent Bank today!</Text>
                </Content>
            </HeroWrapper>
        )
      }
      
export default Hero;

// Styled components
const HeroWrapper = styled.div`
  background-image: url(src/assets/img/bank-tree.jpeg);
  background-position: 0% 33%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
  position: relative;

  @media (max-width: 920px) {
    height: 300px;
    background-position: 0 -50px;
  }
`;

const Content = styled.section`
  position: absolute;
  top: 2rem;
  width: 265px;
  right: 50%;
  transform: translateX(50%);
  margin: 0 auto;  
  background: white;
  padding: 2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 920px) {
    top: 50px;
    right: 50px;
    width: 365px;
    margin: 2rem;
    transform: translateX(0%);
  }
`;

const TitleHidden = styled.h2 `
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
`

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 1rem;

    @media (min-width: 920px) {
      font-size: 1.5rem;
    }
`;
const Text = styled.p`
  font-size: 0.9rem;

    @media (min-width: 920px) {
      font-size: 1.2rem;
    }
`;