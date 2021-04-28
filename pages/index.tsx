import React from "react";
import styled from "styled-components";
import GitHub from "../components/GitHub";
import Layout from "../components/Layout";

const MicroCMS = (
  <a href="https://microcms.io/" target="_blank">
    MicroCMS
  </a>
);

const Contentful = (
  <a href="https://www.contentful.com/" target="_blank">
    Contentful
  </a>
);

export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <Heading>Hello!</Heading>
        <p>
          This is a demo site for headless CMS. <br />
          The main purpose is to show people how headless CMS works and/or how
          to use them.
        </p>
        <br />

        <p>
          <b>Blogs</b> page uses {MicroCMS}. A content management system by a
          Japanese company.
          <br />
          <b>News</b> pages use {Contentful} (with GraphQL).
        </p>

        <br />
        <p>
          <b>Blogs</b> ページは {MicroCMS}{" "}
          を使っています。日本語で管理画面が提供されているので運用しやすいと思います。
          <br />
          <b>News</b>ページは {Contentful}{" "}
          を使っています。機能的にはこちらの方ができることが多いと思います。（管理画面は全て英語です）
        </p>
        <br />

        <a
          href="https://github.com/yoniakabecky/nextjs-headlesscms-blog-example"
          target="_blank"
        >
          <GitHubIcon />
        </a>

        <FootNote>
          Check my code on GitHub.
          <br />
          Build with{" "}
          <a href="https://nextjs.org/" target="_blank">
            Next.js
          </a>
          {" & "}
          <a href="https://vercel.com/" target="_blank">
            Vercel
          </a>
        </FootNote>
      </Wrapper>
    </Layout>
  );
}

const Heading = styled.h1`
  margin-bottom: 2rem;
  font-size: 3rem;
  text-transform: uppercase;
`;

const Wrapper = styled.div`
  p {
    margin: 0.5rem 0;
  }
  a {
    color: ${(props) => props.theme.main};
  }
`;

const GitHubIcon = styled(GitHub)`
  margin: 3rem 0 0.5rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

const FootNote = styled.small`
  display: block;
`;
