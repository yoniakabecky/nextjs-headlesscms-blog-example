import { GetStaticProps } from "next";
import React, { ReactElement } from "react";
import styled from "styled-components";
import BlogCard from "../../components/BlogCard";
import Layout from "../../components/Layout";
import { getBlogTop, getAllBlogData } from "../../lib/microcms";
import { IBlog, IBlogTop } from "../../type/blog";

interface Props {
  data: IBlogTop;
  blogs: IBlog[];
}

export default function MicroCMS({ data, blogs }: Props): ReactElement {
  return (
    <Layout>
      <div>
        <Heading>{data.title}</Heading>

        <Description
          dangerouslySetInnerHTML={{
            __html: `${data.description}`,
          }}
        />

        <CardWrapper>
          {blogs.map((blog) => (
            <BlogCard {...blog} key={blog.id} />
          ))}
        </CardWrapper>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getBlogTop();
  const blogs = await getAllBlogData();

  return {
    props: { data: { ...data }, blogs: blogs.contents },
  };
};

const Heading = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
`;

const Description = styled.div`
  margin: 2rem auto;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem auto 0;
`;
