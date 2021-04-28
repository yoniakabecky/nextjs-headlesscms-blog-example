import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { INews } from "../type/news";

interface Props {
  post: INews;
}

export default function NewsCard({ post }: Props): ReactElement {
  return (
    <Link href={`/contentful/${post.slug}`}>
      <Root>
        {post.mainMedia ? <Img src={post.mainMedia.url} alt="" /> : <NoImage />}

        <Text>
          <Title>{post.title}</Title>

          <Published>{post.sys.publishedAt.split("T")[0]}</Published>
        </Text>
      </Root>
    </Link>
  );
}

const Root = styled.div`
  display: flex;
  margin: 2rem auto;
  cursor: pointer;
`;

const Img = styled.img`
  width: 8rem;
  height: auto;
  min-height: 5rem;
  object-fit: fill;
`;

const NoImage = styled.div`
  width: 8rem;
  height: 5rem;
  background-color: ${(props) => props.theme.text};
`;

const Text = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const Title = styled.h2`
  font-size: 1.75rem;
`;

const Published = styled.p`
  margin: 0.5rem 0;
  color: ${(props) => props.theme.text};
  font-size: 0.75rem;
`;
