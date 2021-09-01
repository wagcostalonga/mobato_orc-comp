import React from 'react';

import { Container, Content } from './styles';

import logo from '../../../assets/logo-hyundai.svg';

export default function AppBar() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Hyundai" />
        <h3>Hyundai Sinal teste</h3>
      </Content>
    </Container>
  );
}