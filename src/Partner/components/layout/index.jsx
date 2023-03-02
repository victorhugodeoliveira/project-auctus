import React from 'react';
import { Grid } from './style';

import MainHeader from '../main-header';
import Aside from '../aside';
import Content from '../content';

const Layout = () => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content />
    </Grid>
  );
};

export default Layout;
