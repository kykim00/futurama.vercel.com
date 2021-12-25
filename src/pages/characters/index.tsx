import type { NextPage } from "next";
import { CharacterCard } from "../../components/CharacterCard";

const CharacterPage: NextPage = () => {
  const name = "characters";
  return <CharacterCard name={name} />;
};

export default CharacterPage;
