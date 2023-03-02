import React, { useEffect, useState } from 'react';
import { Container, ContainerBox, BoxContent, Title } from './style';
import BasicCard from '../content/components/card';
import BasicCard2 from './components/card2';

const Content = () => {
  const [showCard, setShowCard] = useState(true);

  const handleCardClose = () => {
    setShowCard(false);
  };

  const [showCard2, setShowCard2] = useState(true);

  const handleCardClose2 = () => {
    setShowCard2(false);
  };

  return (
    <Container>
      <Title>OLÁ, SEJA BEM VINDO!</Title>
      <ContainerBox>
        {showCard && (
          <BasicCard
            title="Querendo lançar novos desafios?"
            content="Tem uma nova ideia em mente?"
            contentTime="Não perca tempo"
            contentD="lance um novo desafio agora!"
            onClose={handleCardClose}
          ></BasicCard>
        )}
      </ContainerBox>
      <ContainerBox>
        {showCard2 && (
          <BasicCard2
            title2="Procurando soluções?"
            content2="Procura uma solução para o seu desafio?"
            contentTime2="Não perca tempo!"
            contentD2="Encontre uma agora"
            onClose2={handleCardClose2}
          ></BasicCard2>
        )}
      </ContainerBox>
    </Container>
  );
};

export default Content;
