import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';

import { Container, ButtonContent, TitleHead, TitleContent } from './styles';

import { MdDelete } from 'react-icons/md';

const BasicCard = ({ title, content, contentTime, contentD, onClose }) => {
  return (
    <Container>
      <TitleHead>{title}</TitleHead>
      <ButtonContent onClick={onClose}>
        <MdDelete />
      </ButtonContent>
      <TitleContent>{content}</TitleContent>
      <TitleContent>{contentTime}</TitleContent>
      <TitleContent>{contentD}</TitleContent>
    </Container>
  );
};

BasicCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  contentTime: PropTypes.string,
  contentD: PropTypes.string,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  teste: PropTypes.any,
};

export default BasicCard;
