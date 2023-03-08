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

import { ContainerCard } from '../card/styles';

const ButtonCard = () => {
  const { handleClickNewCard, newCard } = useContext(ContextCard);

  return (
    <Container>
      <ButtonNewCard onClick={handleClickNewCard}>Comece aqui</ButtonNewCard>
      {newCard && (
        <ContainerCard style={{ height: 450 }}>
          <TitleNewCard>Procurando Novos Desafios</TitleNewCard>
          <Stage1></Stage1>
        </ContainerCard>
      )}
    </Container>
  );
};

export default ButtonCard;
