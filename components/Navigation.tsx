import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {}

export default function Navigation({}: Props): ReactElement {
  return (
    <Root>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/microcms">Blogs</Link>
        </li>
        <li>
          <Link href="/">News</Link>
        </li>
      </ul>
    </Root>
  );
}

const Root = styled.nav`
  width: 100%;

  @media (min-width: 769px) {
    padding: 0 5rem;
    width: 30%;
    height: 100%;
  }
`;
