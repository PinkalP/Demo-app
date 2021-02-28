import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #424651;
  height: 4rem;
  padding: 0px 20px;
`;

const NavbarItem = styled.a`
  font-size: 1.5rem;
  margin-right: 1rem;
  color: white;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <NavbarItem>Demo Application</NavbarItem>
    </Wrapper>
  );
};

export default Navbar;
