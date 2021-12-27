import styled from "@emotion/styled";
import Link from "next/link";
import { ROUTES } from "../../constants";
interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
  ORDER: number;
}
export const Navigation = () => {
  return (
    <NavigationConatainer>
      <h1>
        <Link href="/">
          <a>
            <Title>FUTURAMA</Title>
          </a>
        </Link>
      </h1>
      <MenuListContainer>
        {ROUTES.map((routeObject: ROUTE) => {
          return (
            <li key={routeObject.ID}>
              <Link href={routeObject.PATH}>
                <a>{routeObject.LABEL}</a>
              </Link>
            </li>
          );
        })}
      </MenuListContainer>
    </NavigationConatainer>
  );
};

const NavigationConatainer = styled.div`
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1em;
  font-size: 1.1em;
  @media (min-width: 1280px) {
    flex-direction: row;
    max-width: 1280px;
  }
  h1 {
    margin-bottom: 0.5em;
    margin-right: 1em;
  }
`;

const MenuListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.5em;
  justify-content: center;
  li {
    padding: 0.5em;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Title = styled.span`
  font-size: 1.5em;
`;
