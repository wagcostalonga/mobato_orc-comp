import React from 'react';
import { HiUser } from 'react-icons/hi'

import Placa from '../../atoms/Placa'

import { Container, User, Car } from './styles';

export default function Header() {
  return (
    <Container>
      <User>
        <HiUser />
          <p>José Maria Trindade</p>
          <span>CPF/CNPJ: 317800947-07</span>
      </User>
      <Car>
        <h1>HB20X Vision 1.6</h1>
        <Placa />
      </Car>
    </Container>
  );
}