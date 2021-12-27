import { useData } from "../hooks/useData";
import { Error, Loading } from "./";
import { CharacterData } from "../types/character";
import Link from "next/link";
import styled from "@emotion/styled";
interface CharacterCardProps {
  name: string;
}

export const CharacterCard = ({ name }: CharacterCardProps) => {
  const { data, error } = useData(name, "");
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      <Title>{name.toUpperCase()}</Title>
      <GridContainer>
        {data.map((characterData: CharacterData) => {
          const { name, images, id } = characterData;
          return (
            <CharacterContainer key={`futurama-info-${id}`}>
              <Link href={`/characters/${id}`}>
                <a>
                  <ImageContainer src={images.main}></ImageContainer>
                  <h3>
                    {name.first} {name.middle} {name.last}
                  </h3>
                </a>
              </Link>
            </CharacterContainer>
          );
        })}
      </GridContainer>
    </div>
  );
};

const Title = styled.h2`
  text-align: center;
  margin: 1em 0 2em 0;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5em;
  text-align: center;
  font-size: 1.5em;
  padding: 1.5em;
  background-color: #fff;
  border-radius: 10px;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ImageContainer = styled.img`
  width: 100%;
  aspect-ratio: 9/16;
`;

const CharacterContainer = styled.div`
  padding: 1em;
  background-color: #f2d5c4;
  border-radius: 10px;
  &:hover {
    background-color: #a0c9d9;
  }
`;
