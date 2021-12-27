import type { NextPage } from "next";
import { InventoryCard } from "../../components/InventoryCard";

const InventoryPage: NextPage = () => {
  const name = "inventory";
  return <InventoryCard name={name} />;
};

export default InventoryPage;
