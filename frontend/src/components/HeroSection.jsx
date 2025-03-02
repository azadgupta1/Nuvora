import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  text-align: center;
  padding: 50px;
  background: #f4f4f4;
`;

const Tagline = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
  color: #666;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Tagline>Instant Access to Success!</Tagline>
      <Description>
        Why figure it out alone? Learn from experts in tech, finance, art, and more!
      </Description>
    </HeroContainer>
  );
};

export default HeroSection;
