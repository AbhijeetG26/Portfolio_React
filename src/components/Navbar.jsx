import React from 'react';
import styled from 'styled-components';

// Styled components for the Navbar
const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavbarBrand>Portfolio</NavbarBrand>
        <NavbarLinks>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavbarLinks>
      </NavbarContainer>
    </Nav>
  );
};

// Styled components definitions
const Nav = styled.nav`
  background-color: #2c3e50; /* Dark background color */
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavbarBrand = styled.div`
  color: #ecf0f1; /* Light text color */
  font-size: 1.5em;
  font-weight: bold;
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: #ecf0f1; /* Light text color */
  text-decoration: none;
  font-size: 1em;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #3498db; /* Change color on hover */
    transform: scale(1.1); /* Slightly increase size on hover */
  }

  &.active {
    border-bottom: 2px solid #3498db; /* Add an underline for active link */
  }
`;

// Exporting the Navbar component
export default Navbar;
