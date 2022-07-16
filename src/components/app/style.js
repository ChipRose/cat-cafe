import { createGlobalStyle } from 'styled-components';
// @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Inter";
    src:
      url("${process.env.PUBLIC_URL}/fonts/Inter-Regular.woff2") format("woff2"),
      url("${process.env.PUBLIC_URL}/fonts/Inter-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Inter";
    src:
      url("${process.env.PUBLIC_URL}/fonts/Inter-SemiBold.woff2") format("woff2"),
      url("${process.env.PUBLIC_URL}/fonts/Inter-SemiBold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  html {
    width: 100%;
    height: 100%;
    margin: 0 0 0 calc(100vw-100%);
  }

  body {
    margin: 0;
    min-width: 1140px;
    height: 100%;
    font-family: "Inter", "Arial", sans-serif;
    font-size: ${(props) => props.theme.mainText.size};
    line-height: ${(props) => props.theme.mainText.line};
    font-weight: 400;
    color: ${(props) => props.theme.txtColor.main};
    background: ${(props) => props.theme.bgColor.main};
  }

  .app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export { GlobalStyle };