import type { NextPage } from "next";
import { CastCard } from "../../components/CastCard";

const CastPage: NextPage = () => {
  const name = "cast";
  return <CastCard names={name} />;
};

export default CastPage;
