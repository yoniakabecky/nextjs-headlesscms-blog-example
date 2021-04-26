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
  padding: 4rem 0;
  height: 100%;

  @media (min-width: 769px) {
    display: flex;
    flex: 1 0 auto;
  }
`;

const Main = styled.main`
  display: flex;
  min-height: 100%;

  @media (min-width: 769px) {
    flex: 1 0 auto;
    padding: 0 2rem;
    width: 70%;
  }
`;
