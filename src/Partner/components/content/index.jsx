import React, { useEffect, useState } from 'react';
import { Container, ContainerBox, BoxContent, Title } from './style';
import { useReducer } from 'react';

import BasicCard from '../content/components/card';

const Content = () => {
  const [showCard, setShowCard] = useState(true);

  const handleCardClose = () => {
    setShowCard(false);
  };

  return (
    <Container>
      <Title>OLÁ, SEJA BEM VINDO! partner</Title>
      <ContainerBox>
        {showCard && (
          <BasicCard
            title="Procurando novos desafios?"
            content="Encontre novos desafios agora!"
            contentTime="Dos mais simples aos mais
            complexos"
            contentD="Acha que dá conta?"
            onClose={handleCardClose}
          ></BasicCard>
        )}
      </ContainerBox>
    </Container>
  );
};

export default Content;
