import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: rgb(34 211 238);
    --primary-background: rgb(6 182 212);
    --secondary-color: rgb(239 68 68);
    --secondary-background: rgb(220 38 38);
    --primary-success-color: rgb(34 197 94);
    --primary-success-background: rgb(22 163 74);
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
