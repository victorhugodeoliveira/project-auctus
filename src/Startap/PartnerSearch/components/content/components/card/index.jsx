import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import {
  ContainerCard,
  ButtonContent,
  TitleHead,
  TitleContent,
} from './styles';

import { MdDelete } from 'react-icons/md';

import { ContextCard } from '../../index';
import ButtonCard from '../ButtonCard';

const BasicCard = ({ onClose, onOpen }) => {
  const { infoCard, handleCardClose, handleClickNewCard } =
    useContext(ContextCard);

  return (
    <ContainerCard className="containerCard">
      <TitleHead>{infoCard.title}</TitleHead>
      <ButtonContent onClick={onClose}>
        <MdDelete />
      </ButtonContent>
      <TitleContent>{infoCard.content}</TitleContent>
      <TitleContent>{infoCard.contentTime}</TitleContent>
      <TitleContent>{infoCard.contentD}</TitleContent>
      {infoCard && <ButtonCard onClick={handleClickNewCard}></ButtonCard>}
    </ContainerCard>
  );
};

BasicCard.propTypes = {
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
};

export default BasicCard;
