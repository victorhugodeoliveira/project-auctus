import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonContent, TitleHead, TitleContent } from './styles';

import { MdDelete } from 'react-icons/md';

import { ContextCard } from '../../index';
import ButtonCard from '../ButtonCard';

const BasicCard = ({ onClose, onOpen }) => {
  const { infoCard, handleCardClose, handleClickNewCard } =
    useContext(ContextCard);

  return (
    <Container>
      <TitleHead>{infoCard.title}</TitleHead>
      <ButtonContent onClick={onClose}>
        <MdDelete />
      </ButtonContent>
      <TitleContent>{infoCard.content}</TitleContent>
      <TitleContent>{infoCard.contentTime}</TitleContent>
      <TitleContent>{infoCard.contentD}</TitleContent>

      <ButtonCard onClick={handleClickNewCard}></ButtonCard>
    </Container>
  );
};

BasicCard.propTypes = {
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
};

export default BasicCard;
