import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="cta-logo" />
          <SignUp>Get all There</SignUp>
          <Description>
            Get Premier access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and the Disney bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="cta-logo" />
        </CTA>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  text-align: center;
`;

const Content = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
  background-image: url('/images/login-background.jpg');
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  min-width: 230px;
  margin: 0 auto;
  margin-bottom: 2vw;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  background-color: #0063e5;
  color: #f3f3f3;
  padding: 16.5px 0;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 2rem;
  font-weight: bold;
  transition: all 0.3s ease;
  text-transform: uppercase;
  width: 100%;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }

  &:active {
    transform: translateY(1px);
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
  @media only screen and (max-width: 380px) {
    font-size: 1.3rem;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  line-height: 1.5;
  font-size: 1.2rem;
  margin: 0 0 24px;
  letter-spacing: 1.5px;
  margin-bottom: 2rem;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 380px) {
    font-size: 0.85rem;
  }
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  width: 100%;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
`;

export default Login;
