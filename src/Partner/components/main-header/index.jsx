import React, { useState } from 'react';
import {
  Container,
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
