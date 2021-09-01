import styled from "styled-components";

export const Container = styled.div`
  h3 {
    text-align: center;
  }

  table {
    margin: 2rem auto;
    width: 100%;
  }

  th {
    text-align: left;
    background-color: ${(props) => props.theme.primary};
    color: #fff;
    padding: 1rem 1rem;
  }

  td{
    padding: 1rem 1rem;
    background-color: #eee;
  }
`;

export const Values = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
`;
