import React, { useContext } from 'react';

import {
  Container,
  TitleStage,
  Checkbox,
  SubTitleStage,
  Stage2Container,
  ButtonStage2,
  CheckboxTitle,
} from './style';

import { ContextCard } from '../../index';

const Stage1 = () => {
  const { stage2, handleClickNewStage } = useContext(ContextCard);

  return (
    <Container>
      <TitleStage>Etapa 1:</TitleStage>
      <SubTitleStage>Cultura:</SubTitleStage>
      <Checkbox type="checkbox"></Checkbox> <CheckboxTitle>Milho</CheckboxTitle>
      <Checkbox type="checkbox"></Checkbox> <CheckboxTitle>Soja</CheckboxTitle>
      <Checkbox type="checkbox"></Checkbox> <CheckboxTitle>Café</CheckboxTitle>
      <Checkbox type="checkbox"></Checkbox> <CheckboxTitle>Cana</CheckboxTitle>
      <ButtonStage2 onClick={handleClickNewStage}>Próximos passos</ButtonStage2>
      {stage2 && <Stage2Container></Stage2Container>}
    </Container>
  );
};

export default Stage1;
