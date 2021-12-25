import { useData } from "../hooks/useData";
import { Error, Loading } from "./";
import { InfoData } from "../types/info";

interface InfoCardProps {
  name: string;
}
export interface Creators {
  name: string;
  url: string;
}
export const InfoCard = ({ name }: InfoCardProps) => {
  const { data, error } = useData(name);
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      <h1>Futurama</h1>
      {data.map((infoData: InfoData) => {
        const { synopsis } = infoData;
        return <p key={`futurama-info-`}>{synopsis}</p>;
      })}
      <p>{data.synopsis}</p>
      <p>{data.yearsAired}</p>
      {data[0].creators.map((creators: Creators) => {
        return (
          <div key={`futurama-info-${creators.name}`}>
            <p>
              {creators.name} - <a href={creators.url}>{creators.url}</a>
            </p>
          </div>
        );
      })}
    </div>
  );
};
