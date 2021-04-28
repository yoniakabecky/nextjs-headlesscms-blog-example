import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { INews } from "../type/news";

interface Props {
  post: INews;
}

export default function TopNews({ post }: Props): ReactElement {
  return (
    <Link href={`/contentful/${post.slug}`}>
      <Root>
        <Img src={post.mainMedia?.url} alt="" />

        <Text>
          <Title>{post.title}</Title>

          <Published>{post.sys.publishedAt.split("T")[0]}</Published>

          <Description>
            {documentToReactComponents(post.body.json as any)}
          </Description>

          <MoreButton>more...</MoreButton>
        </Text>
      </Root>
    </Link>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto 5rem;
  cursor: pointer;

  @media (min-width: 500px) {
    flex-direction: row;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  min-height: 10rem;
  object-fit: fill;

  @media (min-width: 500px) {
    width: 18rem;
  }
`;

const Text = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    margin-left: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 1.75rem;
`;

const Published = styled.p`
  margin: 0.5rem 0;
  color: ${(props) => props.theme.text};
  font-size: 0.75rem;
`;

const Description = styled.div`
  margin-top: 1rem;
  overflow: hidden;
  padding-right: 1rem;
  height: 2.5rem;
  color: #333;
  font-size: 0.875rem;

  & * {
    display: contents;
  }
`;

const MoreButton = styled.span`
  padding-right: 1rem;
  color: #333;
  font-size: 0.875rem;
  text-align: right;
`;
