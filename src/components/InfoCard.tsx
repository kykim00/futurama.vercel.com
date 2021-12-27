import { useData } from "../hooks/useData";
import { Error, Loading } from "./";
import styled from "@emotion/styled";
import { IMAGE_URL } from "../constants";
interface InfoCardProps {
  name: string;
}
export interface Creators {
  name: string;
  url: string;
}

export const InfoCard = ({ name }: InfoCardProps) => {
  const { data, error } = useData(name, "");
  if (error) return <Error />;
  if (!data) return <Loading />;
  const { synopsis, yearsAired, creators } = data[0];
  return (
    <Container>
      <Title>{name.toUpperCase()}</Title>
      <ImageContainer>
        <img
          src="https://ww.namu.la/s/9e250fbb813f5ed4268528ba44ae802c9921ac485835e43f2b5b705d1c187da9d0e351b318ac1fe5b500019dc172bbae997697744142ebe80416e65fe4c06a22214b434cca69bfd2847873101de8e65663ab1357cd6787edfb60bd65539e1eb2"
          alt=""
        />
      </ImageContainer>
      <Paragraph>
        <strong>Futurama</strong> is an American science fiction black comedy
        animated film set in the 3000s that aired for {yearsAired}
      </Paragraph>
      <Paragraph>
        <strong>Synopsis : </strong>
        {synopsis}
      </Paragraph>
      <Paragraph>
        <strong>Creators</strong>
      </Paragraph>
      {creators.map((creator: Creators) => {
        return (
          <Paragraph key={`futurama-info-${creator.name}`}>
            {creator.name} {" - "}
            <LinkContainer href={creator.url}>See More</LinkContainer>
          </Paragraph>
        );
      })}
    </Container>
  );
};

const Title = styled.h2`
  text-align: center;
  margin: 1em 0 1em 0;
`;

const Container = styled.div`
  font-size: 1.3em;
  padding: 0.1em 2em 2em;
`;

const Paragraph = styled.p`
  margin-top: 1em;
  line-height: 1.5em;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkContainer = styled.a`
  background-color: #fff;
  padding: 0.5em;
  border-radius: 5px;
  font-size: 0.8em;
  font-weight: bold;
  &:hover {
    background-color: #f2b279;
  }
`;
