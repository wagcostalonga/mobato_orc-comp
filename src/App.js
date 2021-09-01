import React from "react";
import Modal from 'react-modal';

import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import TemaDefault from "./styles/theme";

Modal.setAppElement('#root');

export default function App() {
  return (
    <ThemeProvider theme={TemaDefault("HYUNDAI")}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}
