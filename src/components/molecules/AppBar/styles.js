import styled  from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.primary};
`;

export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 1.5rem;
  }

  h3 {
    color: ${(props) => props.theme.white};
    font-weight: normal;
  }
`;