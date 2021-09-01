import React from 'react';

import brasil from '../../../assets/brasil-flag.svg';

import { Container, Header, Content } from './styles';

function Placa() {
  return (
    <Container>
      <Header>
        <p>Brasil</p>
        <img src={brasil} alt="#" />
      </Header>
      <Content>
        <small>BR</small>
        <p>BWZ-4509</p>
      </Content>
    </Container>
  );
}

export default Placa;