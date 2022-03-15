import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyles";
import registerServiceWorker from "../public/service-worker-register";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root"),
);

registerServiceWorker();
