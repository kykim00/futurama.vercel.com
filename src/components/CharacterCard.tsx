import { useData } from "../hooks/useData";
import { Error, Loading } from "./";
import { CharacterData } from "../types/characters";
interface CharacterCardProps {
  name: string;
}

export const CharacterCard = ({ name }: CharacterCardProps) => {
  const { data, error } = useData(name);
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      {data.map((characterData: CharacterData) => {
        const { name, images, id } = characterData;
        return (
          <div key={`futurama-info-${id}`}>
            <div>
              <img src={images.main}></img>
            </div>
            {name.first} {name.middle} {name.last}
          </div>
        );
      })}
    </div>
  );
};
