import React, { useContext } from 'react';

import {
  Container,
  TitleNewCard,
  TitleStage,
  Checkbox,
  SubTitleStage,
  Stage2Container,
  ButtonStage2,
  CheckboxTitle,
  ContainerCheckbox,
  TextArea,
} from './style';

import { ContextCard } from '../../index';

const Stage1 = () => {
  const {
    stage2,
    handleClickNewStage,
    newTextArea,
    handleTextAreaClick,
    optionsCultura,
  } = useContext(ContextCard);

  return (
    <Container>
      <TitleNewCard>Procurando Novos Desafios</TitleNewCard>
      <TitleStage>Etapa 1:</TitleStage>
      <SubTitleStage>Cultura:</SubTitleStage>
      <ContainerCheckbox>
        <Checkbox id={optionsCultura.milho} type="checkbox"></Checkbox>
        <CheckboxTitle>Milho</CheckboxTitle>
        <Checkbox id={optionsCultura.soja} type="checkbox"></Checkbox>
        <CheckboxTitle>Soja</CheckboxTitle>
        <Checkbox id={optionsCultura.cafe} type="checkbox"></Checkbox>
        <CheckboxTitle>Café</CheckboxTitle>
        <Checkbox id={optionsCultura.florestal} type="checkbox"></Checkbox>
        <CheckboxTitle>Florestal</CheckboxTitle>
        <Checkbox id={optionsCultura.citrus} type="checkbox"></Checkbox>
        <CheckboxTitle>Citrus</CheckboxTitle>
        <Checkbox
          id={optionsCultura.pecuariaDeCorte}
          type="checkbox"
        ></Checkbox>
        <CheckboxTitle>Pecuária de corte</CheckboxTitle>
      </ContainerCheckbox>
      <ContainerCheckbox style={{ top: 25, position: 'relative' }}>
        <Checkbox
          id={optionsCultura.pecuariaDeLeite}
          type="checkbox"
        ></Checkbox>
        <CheckboxTitle>Pecuária de leite</CheckboxTitle>
        <Checkbox
          id={optionsCultura.outrasProteínas}
          type="checkbox"
        ></Checkbox>
        <CheckboxTitle>Outras proteínas</CheckboxTitle>
        <Checkbox
          id={optionsCultura.outrasCulturas}
          onClick={handleTextAreaClick}
          type="checkbox"
        ></Checkbox>
        <CheckboxTitle>Outras culturas</CheckboxTitle>
        <Checkbox
          id={optionsCultura.outrosSegmentos}
          type="checkbox"
        ></Checkbox>
        <CheckboxTitle>Outros segmentos</CheckboxTitle>
      </ContainerCheckbox>
      {newTextArea && (
        <TextArea
          placeholder="digite aqui"
          name=""
          id=""
          cols="20"
          rows="5"
        ></TextArea>
      )}
      <ButtonStage2 onClick={handleClickNewStage}>Próximos passos</ButtonStage2>
      {stage2 && <Stage2Container></Stage2Container>}
    </Container>
  );
};

export default Stage1;
