import React from 'react';
import {
  Container,
  NewCardContainer,
  ButtonNewCard,
  TitleNewCard,
} from './style';

import { ContextCard } from '../../index';

import { useContext } from 'react';
import Stage1 from '../Stage1';

const ButtonCard = () => {
  const { handleClickNewCard, newCard } = useContext(ContextCard);

  return (
    <Container>
      <ButtonNewCard onClick={handleClickNewCard}>Comece aqui</ButtonNewCard>
      {newCard && (
        <NewCardContainer>
          <TitleNewCard>Procurando soluções</TitleNewCard>
          <Stage1></Stage1>
        </NewCardContainer>
      )}
    </Container>
  );
};

export default ButtonCard;
