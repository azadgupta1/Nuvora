import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #E6D6FF; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #5A189A; 
`;

const SearchBar = styled.input`
  padding: 8px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #BFA2DB; 
  background: #F8F0FC; 
  color: #5A189A; 
  
  &::placeholder {
    color: #9D77CB; 
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #5A189A; 
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #9D77CB; 
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>LearnMate</Logo>
      <SearchBar placeholder="Search for..." />
      <NavLinks>
        <StyledLink to="/blog">Blog</StyledLink>
        <StyledLink to="/dashboard/seeker">Seeker Dashboard</StyledLink>
        <StyledLink to="/dashboard/mentor">Mentor Dashboard</StyledLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
