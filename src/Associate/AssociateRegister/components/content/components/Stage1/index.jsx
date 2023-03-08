import React, { useContext } from 'react';

import {
  Container,
  TitleStage,
  Select,
  SubTitleStage,
  Stage2Container,
  ButtonStage2,
} from './style';

import { ContextCard } from '../../index';

const Stage1 = () => {
  const { stage2, handleClickNewStage } = useContext(ContextCard);

  return (
    <Container>
      <TitleStage>Etapa 1:</TitleStage>
      <SubTitleStage>Cultura:</SubTitleStage>
      <Select name="cultura" placeholder="Cultura">
        <option value="pecuária">Pecuária</option>
        <option value="2">2</option>
      </Select>
      <ButtonStage2 onClick={handleClickNewStage}>Próximos passos</ButtonStage2>
      {stage2 && <Stage2Container></Stage2Container>}
    </Container>
  );
};

export default Stage1;
