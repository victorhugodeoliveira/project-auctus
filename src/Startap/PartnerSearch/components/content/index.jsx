import React, { createContext, useState } from 'react';
import { Container, ContainerBox, Title, ContainerNewCard } from './style';
import PropTypes from 'prop-types';

import BasicCard from './components/card';

export const ContextCard = createContext();

const Content = () => {
  const optionsCultura = {
    soja: 'soja',
    milho: 'milho',
    cana: 'cana',
    cafe: 'cafe',
    florestal: 'florestal',
    citrus: 'citrus',
    pecuariaDeCorte: 'pecuaria de corte',
    pecuariaDeLeite: 'pecuaria de leite',
    outrasProteínas: 'outras proteínas',
    outrasCulturas: 'outras culturas',
    outrosSegmentos: 'outros segmentos',
  };

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

  const [newTextArea, setNewTextArea] = useState(false);

  const handleTextAreaClick = () => {
    setNewTextArea(true);
  };

  return (
    <ContextCard.Provider
      value={{
        infoCard,
        handleClickNewCard,
        newCard,
        stage2,
        handleClickNewStage,
        newTextArea,
        handleTextAreaClick,
        optionsCultura,
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
