import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

interface Props {}

export default function Home({}: Props) {
  return <Title>Hello</Title>;
}
