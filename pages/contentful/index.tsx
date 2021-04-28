import { GetStaticProps } from "next";
import React, { ReactElement } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import NewsCard from "../../components/NewsCard";
import TopNews from "../../components/TopNews";
import { getFirstTenNews } from "../../lib/contentful";
import { INews } from "../../type/news";

interface Props {
  posts: INews[];
}

export default function Contentful({ posts }: Props): ReactElement {
  if (!posts) return <p>loading...</p>;

  return (
    <Layout>
      <div>
        <Heading>News</Heading>

        {posts.map((post, i) => {
          return i === 0 ? (
            <TopNews post={post} />
          ) : (
            <NewsCard key={`news-${i}`} post={post} />
          );
        })}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getFirstTenNews();

  return {
    props: { posts },
  };
};

const Heading = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
`;
