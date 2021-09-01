import styled from "styled-components";
import breakpoints from "../../../utils/breackpoints";

export const Container = styled.div`
  margin: 3rem 0 0 0;
  padding: 1.5rem;
  background-color: #fff;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  small {
    color: #6d6d6d;
  }
`;

export const Title = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  h3 {
    margin-left: 0.4rem;
  }
`;

export const Content = styled.div`
  margin-top: 1.5rem;
  display: flex;
  height: 20rem;

  ${breakpoints("flex-direction", "", [
    {
      768: "column",
    },
  ])}

  ${breakpoints("align-items", "", [
    {
      768: "center",
    },
  ])}

  ${breakpoints("height", "%", [
    {
      768: 100,
    },
  ])}
`;

export const PreviewList = styled.div`
  width: 8.5rem;
  overflow-y: scroll;
  list-style: none;
  display: flex;
  flex-direction: column;

  ${breakpoints("flex-direction", "", [
    {
      768: "row",
    },
  ])}

  ${breakpoints("width", "%", [
    {
      768: 100,
    },
  ])}

  ${breakpoints("overflow-y", "", [
    {
      768: "hidden",
    },
  ])}

  ::-webkit-scrollbar {
    height: 4px;
    width: 4px;
    background-color: #d2d2d2;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.primary};
  }

  img {
    width: 8rem;
    height: 5rem;
    object-fit: cover;
    border: 2px solid #d2d2d2;
    background-color: #d2d2d2;
  }
`;

export const Media = styled.div`
  margin-left: 1.5rem;

  img {
    width: 25rem;
    height: 100%;
    object-fit: cover;
    border: 2px solid #d2d2d2;
    background-color: #d2d2d2;
  }

  ${breakpoints("margin", "rem", [
    {
      768: 2,
    },
  ])}

  ${breakpoints("height", "rem", [
    {
      768: 20,
    },
  ])}
`;

export const Description = styled.div`
  flex: 1;
  margin-left: 1.5rem;
  display: flex;
  flex-direction: column;

  ${breakpoints("margin-left", "px", [
    {
      768: 0,
    },
  ])}

${breakpoints("width", "%", [
    {
      768: 100,
    },
  ])}
`;

export const DescriptionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    text-transform: uppercase;
  }
`;

export const ButtonDetails = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.primary};

  p {
    margin-right: 0.5rem;
    font-weight: 500;
  }
`;

export const DescriptionText = styled.div`
  flex: 1;

  p {
    color: #6d6d6d;
  }
`;

export const DescriptionPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  span {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const DescriptionConsultant = styled.div`
  span {
    margin-top: 0.5rem;
    width: 100%;
    background-color: #eeee;
    display: inline-block;
    padding: 0.5rem 1rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.primary};
  padding: 1rem 0;
  color: #fff;

  input {
    margin-right: 0.5rem;
  }

  label {
    text-transform: uppercase;
  }
`;

export const Approved = styled.div`
  margin-right: 2.75rem;
`;

export const NotApproved = styled.div``;
