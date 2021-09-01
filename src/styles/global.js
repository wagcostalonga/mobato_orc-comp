import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
    @media(max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media(max-width: 728px) {
      font-size: 87.5% // 14px;
    }
  }

body, #root{
  background: #eeee;
}

body, input, button{
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}



button{
  cursor: pointer;
}

.react-modal-overlay {
  background-color: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content {
  width: 100%;
  max-width: 576px;
  background-color: #fff;
  padding: 3rem;
  position: relative;
}

.react-modal-close--btn {
  border: 0;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background-color: transparent;
}
`;

export default GlobalStyle;