import React from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";

import Divider from '../../atoms/Divider';

import {
  Container,
  Header,
  Title,
  Content,
  PreviewList,
  Media,
  Description,
  DescriptionHeader,
  ButtonDetails,
  DescriptionText,
  DescriptionPrice,
  DescriptionConsultant,
  Footer,
  Approved,
  NotApproved,
} from "./styles";

export default function Card({onOpenModal}) {
  return (
    <>
      <Container>
        <Header>
          <Title>
            <HiOutlineInformationCircle size="22" />
            <h3>Barulho do Capô</h3>
          </Title>
          <small>Válido até 05/06/2021</small>
        </Header>

        <Content>
          <PreviewList>
            <li>
              <img
                src="https://images.unsplash.com/photo-1600377232142-164c095e686e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80"
                alt="#"
              />
            </li>
            <li>
              <img
                src="https://images.unsplash.com/photo-1600377232142-164c095e686e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80"
                alt="#"
              />
            </li>
            <li>
              <img
                src="https://images.unsplash.com/photo-1600377232142-164c095e686e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80"
                alt="#"
              />
            </li>
            <li>
              <img
                src="https://images.unsplash.com/photo-1600377232142-164c095e686e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80"
                alt="#"
              />
            </li>
            <li>
              <img
                src="https://images.unsplash.com/photo-1600377232142-164c095e686e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80"
                alt="#"
              />
            </li>
            <li>
              <img
                src="https://images.unsplash.com/photo-1600377232142-164c095e686e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80"
                alt="#"
              />
            </li>
          </PreviewList>

          <Media>
            <img
              src="https://images.unsplash.com/photo-1618157119145-9614c0930f98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              alt="#"
            />
          </Media>

          <Description>
            <DescriptionHeader>
              <h4>Descrição</h4>

              <ButtonDetails type="button" onClick={onOpenModal}>
                <p>Detalhes</p>
                <FiExternalLink size="16" />
              </ButtonDetails>
            </DescriptionHeader>

            <Divider />

            <DescriptionText>
              <p>
                Identificado trinca na lista do capô, sendo necessário realizar
                a troca.
              </p>
            </DescriptionText>

            <Divider />

            <DescriptionPrice>
              <strong>Valor</strong>
              <span>R$ 599,90</span>
            </DescriptionPrice>

            <Divider />

            <DescriptionConsultant>
              <strong>Observação Consultor</strong>
              <span>3x</span>
            </DescriptionConsultant>
          </Description>
        </Content>
      </Container>
      <Footer>
        <Approved>
          <input type="radio" id="aprovado" value="Aprovado" name="approved" />
          <label htmlFor="aprovado">Aprovado</label>
        </Approved>
        <NotApproved>
          <input
            type="radio"
            id="nao-aprovado"
            value="NãoAprovado"
            name="approved"
          />
          <label htmlFor="nao-aprovado">Não aprovado</label>
        </NotApproved>
      </Footer>
    </>
  );
}
