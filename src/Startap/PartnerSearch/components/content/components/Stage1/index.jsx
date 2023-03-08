import React, { useContext } from 'react';

import {
  Container,
  TitleStage,
  Checkbox,
  SubTitleStage,
  Stage2Container,
  ButtonStage2,
  CheckboxTitle,
  ContainerCheckbox,
} from './style';

import { ContextCard } from '../../index';

const Stage1 = () => {
  const { stage2, handleClickNewStage } = useContext(ContextCard);

  return (
    <Container>
      <TitleStage>Etapa 1:</TitleStage>
      <SubTitleStage>Cultura:</SubTitleStage>
      <ContainerCheckbox>
        <Checkbox type="checkbox"></Checkbox>
        <CheckboxTitle>Milho</CheckboxTitle>
        <Checkbox type="checkbox"></Checkbox>
        <CheckboxTitle>Soja</CheckboxTitle>
        <Checkbox type="checkbox"></Checkbox>
        <CheckboxTitle>Café</CheckboxTitle>
        <Checkbox type="checkbox"></Checkbox>
        <CheckboxTitle>Florestal</CheckboxTitle>
        <Checkbox type="checkbox"></Checkbox>
        <CheckboxTitle>Citrus</CheckboxTitle>
        <Checkbox type="checkbox"></Checkbox>
        <CheckboxTitle>Pecuária de corte</CheckboxTitle>
      </ContainerCheckbox>
      <ContainerCheckbox style={{ top: 25, position: 'relative' }}>
        <Checkbox type="checkbox"></Checkbox>
        <CheckboxTitle>Pecuária de leite</CheckboxTitle>
        <Checkbox type="checkbox"></Checkbox>
        <CheckboxTitle>Outras proteínas</CheckboxTitle>
        <Checkbox type="checkbox"></Checkbox>
        <CheckboxTitle>Outras culturas</CheckboxTitle>
        <Checkbox type="checkbox"></Checkbox>
        <CheckboxTitle>Outros segmentos</CheckboxTitle>
      </ContainerCheckbox>
      <ButtonStage2 onClick={handleClickNewStage}>Próximos passos</ButtonStage2>
      {stage2 && <Stage2Container></Stage2Container>}
    </Container>
  );
};

export default Stage1;
