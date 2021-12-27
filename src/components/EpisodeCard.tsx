import { useData } from "../hooks/useData";
import { Error, Loading } from "./";
import { EpisodeData } from "../types/episode";

import styled from "@emotion/styled";
import { getSortedRoutes } from "next/dist/shared/lib/router/utils";

interface EpisodeCardProps {
  name: string;
}

export const EpisodeCard = ({ name }: EpisodeCardProps) => {
  const { data, error } = useData(name, "");
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      <Title>Episodes</Title>
      <GridConatiner>
        {data
          .sort(
            (a: EpisodeData, b: EpisodeData) =>
              parseInt(a.number.split(" ")[0]) -
              parseInt(b.number.split(" ")[0])
          )
          .map((EpisodeData: EpisodeData) => {
            const { number, title, writers, originalAirDate, desc, id } =
              EpisodeData;
            return (
              <Card key={`futurama-episode-${id}`}>
                <h2>
                  [ {number} ] {title}
                </h2>
                <Paragraph>
                  <strong>Writers</strong> : {writers}
                </Paragraph>
                <Paragraph>
                  <strong>Original Air Date</strong> : {originalAirDate}
                </Paragraph>
                <Paragraph>
                  <strong>Summary</strong> : {desc}
                </Paragraph>
              </Card>
            );
          })}
      </GridConatiner>
    </div>
  );
};

const Title = styled.h2`
  text-align: center;
  margin: 1em 0;
`;

const Card = styled.div`
  background-color: #f2d5c4;
  padding: 1em;
  border-radius: 10px;
`;

const Paragraph = styled.p`
  margin-top: 0.5em;
`;

const GridConatiner = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5em;
  padding: 1.5em;
  background-color: #fff;
  border-radius: 10px;
  @media (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
