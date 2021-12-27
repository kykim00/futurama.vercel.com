import type { NextPage } from "next";
import { EpisodeCard } from "../../components/EpisodeCard";

const EpisodePage: NextPage = () => {
  const name = "episodes";
  return <EpisodeCard name={name} />;
};

export default EpisodePage;
