import React, { useState } from "react";

import { Container, Content } from "./styles";

import AppBar from "../../molecules/AppBar";
import Header from "../../molecules/Header";
import Card from "../../molecules/Card";
import Button from "../../atoms/Button";
import NewModal from '../../molecules/NewModal';

export default function HomePage() {
  const [modal, setModal] = useState(false);

  function handleOpenModal() {
    setModal(true);
  }

  function handleCloseModal() {
    setModal(false);
  }

  return (
    <Container>
      <AppBar />

      <Content>
        <Header />
        <Card onOpenModal={handleOpenModal}/>
        <Button />
      </Content>

      <NewModal isOpen={modal} onRequestClose={handleCloseModal} />
      
    </Container>
  );
}
