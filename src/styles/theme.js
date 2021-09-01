const TemaDefault = (revenda) => {
  let colors = {};
  switch (revenda) {
    case "NISSAN":
      colors = {
        primary: "#C3002F",
        white: "#FFFFFF",
        whiteLight: "#f5f5f5",
        dark: "#333333",
        blackLight: "#23231f",
      };
      break;
    case "TOYOTA":
      colors = {
        primary: "#f4181b",
        primaryLight: "#d00004",
        secundary: "#ff4063",
        secundaryLight: "#e96769",
        white: "#FFFFFF",
        whiteLight: "#f5f5f5",
        dark: "#333333",
        blackLight: "#23231f",
      };
      break;
    case "FIAT":
      colors = {
        primary: "#A70230",
        primaryLight: "#f47d83",
        primaryDark: "#860127",
        secundary: "#e80242",
        secundaryLight: "#ef0546",
        white: "#FFFFFF",
        whiteLight: "#f5f5f5",
        dark: "#333333",
        blackLight: "#23231f",
      };
      break;
    case "KIA":
      colors = {
        primary: "#c41230",
        primaryLight: "#d13852",
        primaryDark: "#96011a",
        secundary: "#ce2441",
        secundaryLight: "#ff254a",
        white: "#FFFFFF",
        whiteLight: "#f5f5f5",
        dark: "#333333",
        blackLight: "#23231f",
      };
      break;
    case "RENAULT":
      colors = {
        primary: "#fcb415",
        primaryLight: "#f2e655",
        primaryDark: "#d09718",
        secundary: "#f4b62d",
        secundaryLight: "#f9ab01",
        white: "#FFFFFF",
        whiteLight: "#f5f5f5",
        dark: "#333333",
        blackLight: "#23231f",
      };
      break;
    case "JEEP":
      colors = {
        primary: "#3f5d21",
        primaryLight: "#698e43",
        primaryDark: "#365419",
        secundary: "#547236",
        secundaryLight: "#719f43",
        white: "#FFFFFF",
        whiteLight: "#f5f5f5",
        dark: "#333333",
        blackLight: "#23231f",
      };
      break;
    case "HYUNDAI":
      colors = {
        primary: "#00427C",
        secondary: "#CCD8E3",
        white: "#FFFFFF",
        whiteLight: "#f5f5f5",
        dark: "#333333",
        blackLight: "#23231f",
      };
      break;
    default:
      colors = {
        primary: "#333",
        primaryLight: "#333",
        secundary: "#444444",
        secundaryLight: "#44444455",
      };
      break;
  }

  return colors;
};

export default TemaDefault;
