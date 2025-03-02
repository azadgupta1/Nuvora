import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background: #BFA2DB; 
  color: white;
  text-align: center;
  padding: 15px;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2025 LearnMate. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
