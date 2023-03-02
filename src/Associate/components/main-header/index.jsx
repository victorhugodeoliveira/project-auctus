import React, { useState } from 'react';
import {
  Container,
  MyChallengesContainer,
  MyChallengesTitle,
  Profile,
  Welcome,
  UserName,
  IconComents,
  IconNot,
} from './style';

export const MainHeader = () => {
  const [user, setUser] = useState('Victor');

  return (
    <Container>
      <MyChallengesContainer>
        <MyChallengesTitle>DESAFIOS LANÇADOS</MyChallengesTitle>
      </MyChallengesContainer>
      <Profile>
        <IconComents />
        <IconNot />
        <Welcome>
          Olá, <UserName>{user}</UserName>
        </Welcome>
      </Profile>
    </Container>
  );
};

export default MainHeader;
