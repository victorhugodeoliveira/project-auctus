import * as React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonContent, TitleHead, TitleContent } from './styles';

import { MdDelete } from 'react-icons/md';

import Button from '@mui/material/Button';

const BasicCard2 = ({
  title2,
  content2,
  contentTime2,
  contentD2,
  onClose2,
}) => {
  return (
    <Container>
      <TitleHead>{title2}</TitleHead>
      <ButtonContent onClick={onClose2}>
        <MdDelete />
      </ButtonContent>
      <TitleContent>{content2}</TitleContent>
      <TitleContent>{contentTime2}</TitleContent>
      <TitleContent>{contentD2}</TitleContent>
      <Button
        style={{ position: 'absolute', left: 150, bottom: 30 }}
        variant="contained"
      >
        Encontre agora
      </Button>
    </Container>
  );
};

BasicCard2.propTypes = {
  title2: PropTypes.string,
  content2: PropTypes.string,
  contentTime2: PropTypes.string,
  contentD2: PropTypes.string,
  onClose2: PropTypes.func,
};

export default BasicCard2;
