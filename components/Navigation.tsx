import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {}

export default function Navigation({}: Props): ReactElement {
  const { route } = useRouter();

  return (
    <Root>
      <ul>
        <NavLink isActive={route === "/"}>
          <Link href="/">Home</Link>
        </NavLink>

        <NavLink isActive={route.startsWith("/microcms")}>
          <Link href="/microcms">Blogs</Link>
        </NavLink>

        <NavLink isActive={route.startsWith("/contentful")}>
          <Link href="/contentful">News</Link>
        </NavLink>
      </ul>
    </Root>
  );
}

const Root = styled.nav`
  width: 100%;

  ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 0.75rem;
  }
  a {
    text-decoration: none;
  }

  @media (min-width: 769px) {
    display: block;
    padding: 4rem 5rem;
    width: 30%;
    height: 100%;

    ul {
      flex-direction: column;
    }
  }
`;

interface ListProps {
  readonly isActive: boolean;
}

const NavLink = styled.li<ListProps>`
  a {
    color: ${(props) => (props.isActive ? props.theme.main : props.theme.text)};
  }
`;
