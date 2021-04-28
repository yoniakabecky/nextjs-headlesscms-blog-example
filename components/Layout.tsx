import Head from "next/head";
import React, { ReactElement } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <Root>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation />

      <Main>{children}</Main>
    </Root>
  );
}

const Root = styled.div`
  padding: 2rem;
  height: 100%;
  overflow: scroll;

  @media (min-width: 769px) {
    display: flex;
    flex: 1 0 auto;
    padding: unset;
  }

  @media (min-width: 1441px) {
    margin: 0 auto;
    max-width: 1440px;
  }
`;

const Main = styled.main`
  position: relative;
  overflow: auto;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    padding: 4rem 1rem 2rem 0;
    width: 70%;
  }
`;
