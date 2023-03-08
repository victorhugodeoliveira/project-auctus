import React, { createContext, useState } from 'react';
import { Container, ContainerBox, Title, ContainerNewCard } from './style';
import PropTypes from 'prop-types';

import BasicCard from './components/card';

export const ContextCard = createContext();

const Content = () => {
  const infoCard = {
    title: 'Procurando um novo desafio?',
    content: 'Ou ideias desafiadoras para solucionar?',
    contentTime: 'Não perca tempo!',
    contentD: 'Encontre um novo agora',
  };

  const [showCard, setShowCard] = useState(true);

  const handleCardClose = () => {
    setShowCard(false);
  };

  const [newCard, setNewCard] = useState(false);

  const handleClickNewCard = () => {
    setNewCard(true);
  };

  const [stage2, setStage2] = useState(false);

  const handleClickNewStage = () => {
    setStage2(true);
  };

  return (
    <ContextCard.Provider
      value={{
        infoCard,
        handleClickNewCard,
        newCard,
        stage2,
        handleClickNewStage,
      }}
    >
      <Container>
        <Title>OLÁ, SEJA BEM VINDO!</Title>
        <ContainerBox>
          {showCard && <BasicCard onClose={handleCardClose}></BasicCard>}
        </ContainerBox>
      </Container>
    </ContextCard.Provider>
  );
};

export default Content;
