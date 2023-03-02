import React from 'react';

import {
  Container,
  Header,
  Title,
  Title2,
  MenuContainer,
  MenuItemLink,
  Close,
} from './style';

import { AiFillCaretLeft } from 'react-icons/ai';

export const Aside = () => {
  return (
    <Container>
      <Header>
        <Title>AUCTUS</Title> <Title2>LAB</Title2>
        <Close>
          <AiFillCaretLeft />
        </Close>
      </Header>

      <MenuContainer>
        <MenuItemLink href="#">Novas soluções</MenuItemLink>
        <MenuItemLink href="#">Soluções em alta</MenuItemLink>
        <MenuItemLink href="#">Documentação</MenuItemLink>
        <MenuItemLink href="#">Fale conosco</MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
