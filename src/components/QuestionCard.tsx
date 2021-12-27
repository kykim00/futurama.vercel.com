import styled from "@emotion/styled";
import Link from "next/link";
interface QuestionCardProps {
  name: string;
}

export const QuestionCard = ({ name }: QuestionCardProps) => {
  return (
    <Container>
      <Title>{name.toUpperCase()}</Title>
      <Link href={`./${name}/1`} passHref>
        <LinkButton>Let`s take some Quizzes</LinkButton>
      </Link>
    </Container>
  );
};

const Title = styled.h2`
  text-align: center;
  margin: 1em 0 2em 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LinkButton = styled.a`
  padding: 1em;
  font-size: 1.1em;
  font-weight: bold;
  border-radius: 5px;
  background-color: #fff;
  &:hover {
    background-color: #f2b279;
  }
`;
