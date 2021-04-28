import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import LeftArrow from "../../components/LeftArrow";
import { getNewsPost, getSlugs } from "../../lib/contentful";
import { INews } from "../../type/news";

interface Props {
  data: INews;
}

export default function News({ data }: Props) {
  return (
    <Layout>
      <Link href="/contentful">
        <Back>
          <div>
            <LeftArrow />
            <span>back</span>
          </div>
        </Back>
      </Link>

      <Heading>{data.title}</Heading>

      <Published>Published: {data.sys.publishedAt.split("T")[0]}</Published>

      {data.mainMedia && <Image src={data.mainMedia.url} alt="" />}

      <Body>{documentToReactComponents(data.body.json as any)}</Body>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getSlugs();

  return {
    paths: paths?.map((path: any) => `/contentful/${path.slug}` ?? []),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.slug) {
    const news: INews[] = await getNewsPost(params.slug as string);

    return {
      props: { data: news[0] },
    };
  }

  return {
    props: {},
  };
};

const Back = styled.div`
  display: inline-block;
  margin-bottom: 2rem;
  cursor: pointer;
  div {
    display: flex;
    flex-direction: center;
  }
  span {
    margin-left: 0.5rem;
    padding-top: 0.1rem;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  text-transform: capitalize;
`;

const Body = styled.div`
  margin: 3rem auto;
  width: 100%;

  > p {
    margin-bottom: 0.5rem;
    min-height: 1rem;
  }

  blockquote {
    margin: 1rem 0;
    border-left: 5px solid #333;
    border-radius: 2px;
    padding: 0.5rem 0 0.5rem 2rem;
    font-style: italic;
  }
`;

const Published = styled.p`
  margin: 0.5rem 0 1rem;
  color: ${(props) => props.theme.text};
  font-size: 0.85rem;
`;

const Image = styled.img`
  width: 100%;
  max-height: 25rem;
  object-fit: fill;
`;
