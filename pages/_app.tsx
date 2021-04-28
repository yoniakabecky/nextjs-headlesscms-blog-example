import { AppProps } from "next/dist/next-server/lib/router/router";
import Router from "next/router";
import NProgress from "nprogress";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "nprogress/nprogress.css";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  a {
    color: #333;
  }
  #nprogress .bar {
    background: tomato;
    height: 4px;
  }
  #nprogress .peg {
    box-shadow: 0 0 10px tomato, 0 0 5px tomato; 
  }
  #nprogress .spinner {
    display: none;
  }
`;

const theme = {
  main: "tomato",
  text: "#999",
};

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    Router.events.on("routeChangeStart", () => NProgress.start());
    Router.events.on("routeChangeComplete", () => NProgress.done());
    Router.events.on("routeChangeError", () => NProgress.done());
  }, []);
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
