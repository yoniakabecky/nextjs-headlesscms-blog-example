import styled from "styled-components";
import Layout from "../components/Layout";

interface Props {}

export default function Home({}: Props) {
  return (
    <Layout>
      <div>
        <Heading>Hello</Heading>
        <p>this is a demo site for headless cms website</p>
      </div>
    </Layout>
  );
}

const Heading = styled.h1`
  margin-bottom: 2rem;
  font-size: 3rem;
  text-transform: uppercase;
`;
