import type { NextPage } from "next";
import { InfoCard } from "../../components/InfoCard";

const InfoPage: NextPage = () => {
  const name = "info";
  return <InfoCard name={name} />;
};

export default InfoPage;
