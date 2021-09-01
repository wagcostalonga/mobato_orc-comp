import React from "react";
import Modal from "react-modal";

import closeImg from "../../../assets/close.svg";

import { Container, Values } from "./styles";

export default function NewModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close--btn"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar" />
      </button>
      
      <Container>
        <h3>Serviços e Produtos</h3>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Qtd Tempo</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Trocar Moldura Borracha</td>
              <td>1.9</td>
              <td>263,59</td>
            </tr>
            <tr>
              <td>Pastilhas de freio kit 2 pçs</td>
              <td>1</td>
              <td>254,78</td>
            </tr>
          </tbody>
        </table>

        <Values>
          <span>
            <strong>Produtos</strong>
            <p>R$ 254,78</p>
          </span>
          <span>
            <strong>Serviços</strong>
            <p>R$ 263,59</p>
          </span>
          <span>
            <strong>Total</strong>
            <p>R$ 518,37</p>
          </span>
        </Values>
      </Container>
    </Modal>
  );
}
