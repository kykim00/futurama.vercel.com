import styled from "@emotion/styled";
import { useData } from "../hooks/useData";
import { InventoryData } from "../types/inventory";
import { Error, Loading } from "./";

interface InventoryCardProps {
  name: string;
}

const onClickHandler = (e: any) => {
  const hiddenElement = e.currentTarget.querySelector(".hidden");
  hiddenElement?.classList.remove("hidden");
  setTimeout(() => {
    hiddenElement.classList.add("hidden");
  }, 1000);
};
export const InventoryCard = ({ name }: InventoryCardProps) => {
  const { data, error } = useData(name, "");
  if (error) return <Error />;
  if (!data) return <Loading />;
  let sum = 0;
  return (
    <div>
      <Title>{name.toUpperCase()}</Title>
      <InventoryContainer>
        <ItemContainer>
          {data.forEach(
            (inventoryData: InventoryData) =>
              (sum += inventoryData.stock * inventoryData.price)
          )}
          <h2>Total Price : ${sum.toFixed(2)}</h2>
        </ItemContainer>
      </InventoryContainer>
      <InventoryContainer>
        <h2>Inventory</h2>
        <GridContainer>
          {data.map((inventoryData: InventoryData) => {
            const { title, category, description, slogan, price, stock, id } =
              inventoryData;
            return (
              <ItemContainer
                onClick={onClickHandler}
                key={`futurama-inventory-${id}`}
              >
                <h3>{title}</h3>
                <div>
                  <p>Category : {category}</p>
                  <p>Amount : {stock}</p>
                  <p>Price : {price}</p>
                </div>
                <DetailContainer className="hidden">
                  <h3>{title}</h3>
                  <p>Category : {category}</p>
                  <p>Amount : {stock}</p>
                  <p>Price : {price}</p>
                  <p>Slogan : {slogan}</p>
                  <p>Desc : {description}</p>
                </DetailContainer>
              </ItemContainer>
            );
          })}
        </GridContainer>
      </InventoryContainer>
    </div>
  );
};

const Title = styled.h2`
  text-align: center;
  margin: 1em 0;
`;

const InventoryContainer = styled.div`
  padding: 1em;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 5px 5px rgba(black, 0.25);
  margin-top: 2em;
  h2 {
    margin-left: 1em;
  }
`;

const ItemContainer = styled.div`
  padding: 1em;
  border-radius: 5px;
  background-color: #f2d5c4;
  box-shadow: 0 5px 5px rgba(black, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #a0c9d9;
  }
`;
// #c9ebf2#a0c9d9;#73a2bf
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5em;
  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const DetailContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  background-color: #a0c9d9;
  border-radius: 5px;
  z-index: 10;
  padding: 1em;
`;
