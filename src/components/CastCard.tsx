import { useData } from "../hooks/useData";
import { Error, Loading } from "./";
import { CastData } from "../types/cast";
import styled from "@emotion/styled";

interface CastCardProps {
  names: string;
}

export const CastCard = ({ names }: CastCardProps) => {
  const { data, error } = useData(names, "");
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <Title>{names.toUpperCase()}</Title>
      <GridContainer>
        {data.map((CastData: CastData) => {
          const { name, born, bio, id } = CastData;
          return (
            <CastConatiner key={`futurama-cast-${id}`}>
              <h2>{name}</h2>
              <img
                src="https://static.simpsonswiki.com/images/a/aa/Katey Sagal.jpg"
                alt=""
              />
              <p>Birth : {born}</p>
              <LinkContainer href={bio.url}>See More</LinkContainer>
            </CastConatiner>
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
  font-size: 1.3em;
  background-color: #fff;
  padding: 1.5em;
  border-radius: 10px;
  @media (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CastConatiner = styled.div`
  border-radius: 5px;
  background-color: #f2d5c4;
  padding: 1em 0;
  h2 {
    margin-bottom: 1em;
  }
`;

const LinkContainer = styled.a`
  background-color: #fff;
  padding: 0.5em;
  border-radius: 5px;
  margin: 1em auto 0;
  display: block;
  font-size: 0.8em;
  font-weight: bold;
  width: 40%;
  &:hover {
    background-color: #f2b279;
  }
`;
