import styled from 'styled-components';

export const Container = styled.div`
  width: 160px;
  height: 58px;
  font-family: "Roboto", sans-serif;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  padding: 4px 0;
  background-color: #1660a0;
  border-top: 2px solid #333;
  border-left: 2px solid #333;
  border-right: 2px solid #333;
  border-radius: 4px 4px 0 0;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  p{
    color: #ffffff;
    font-size: 8px;
    text-transform: uppercase;
  }

  img{
    height: 10px;
    position: absolute;
    right: 0;
    margin-right: 4px;
  }
`;

export const Content = styled.div`
  height: 100%;
  background-color: #ffffff;
  border-bottom: 2px solid #333333;
  border-left: 2px solid #333333;
  border-right: 2px solid #333333;
  border-radius: 0 0 4px 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  small{
    font-size: 8px;
    font-weight: 500;

    position: absolute;
    left: 4px;
    bottom: 4px;
  }

  p{
    font-size: 24px;
    font-weight: 500;
  }
`;