import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { IBlog } from "../type/blog";

export default function BlogCard({
  id,
  title,
  image,
  publishedAt,
}: IBlog): ReactElement {
  return (
    <Link href={`/microcms/${id}`}>
      <Root>
        <Figure>{image ? <Image src={image.url} alt="" /> : <NoImg />}</Figure>

        <Detail>
          <h2>{title}</h2>
          <Published>{publishedAt.split("T")[0]}</Published>
        </Detail>
      </Root>
    </Link>
  );
}

const Root = styled.div`
  width: 15rem;
  height: 15rem;
  overflow: hidden;
  cursor: pointer;
`;

const Figure = styled.figure`
  width: 100%;
  height: 9rem;
`;

const NoImg = styled.img`
  background: #c6c6c6;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const Detail = styled.div`
  padding: 0.5rem;
`;

const Published = styled.p`
  margin: 0.5rem auto;
  color: gray;
  font-size: 0.75rem;
`;
