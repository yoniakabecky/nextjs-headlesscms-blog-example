import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import LeftArrow from "../../components/LeftArrow";
import { getBlogPaths, getBlogData } from "../../lib/microcms";
import { IBlog } from "../../type/blog";

interface Props {
  data: IBlog;
}
export default function Blog({ data }: Props) {
  return (
    <Layout>
      <div>
        <Link href="/microcms">
          <Back>
            <div>
              <LeftArrow />
              <span>back</span>
            </div>
          </Back>
        </Link>

        <Heading>{data.title}</Heading>

        <Published>Published: {data.publishedAt.split("T")[0]}</Published>

        {data.image && <Image src={data.image.url} alt="" />}

        <Body
          dangerouslySetInnerHTML={{
            __html: `${data.body}`,
          }}
        />
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getBlogPaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.id) {
    const data: IBlog = await getBlogData(params.id as string);

    return {
      props: { data },
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
`;

const Published = styled.p`
  margin: 0.5rem auto;
  color: gray;
  font-size: 0.85rem;
`;

const Image = styled.img`
  width: 100%;
  max-height: 20rem;
  object-fit: fill;
`;
