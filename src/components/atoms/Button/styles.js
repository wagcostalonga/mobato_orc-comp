import styled from "styled-components";

export const Container = styled.button`
  margin: 2rem auto;
  padding: 0 2.75rem;
  height: 2.75rem;
  border: none;
  background-color: ${(props) => props.theme.primary};
  color: #fff;
  font-weight: 500;
  transition: filter .2s;

  &:hover {
    filter: brightness(0.9);
  }
`;