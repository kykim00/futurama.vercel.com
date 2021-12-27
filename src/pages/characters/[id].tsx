import { NextPage } from "next";
import { Error, Loading } from "../../components";
import { useRouter } from "next/router";
import { useData } from "../../hooks/useData";
import styled from "@emotion/styled";
import Link from "next/link";

const CharacterDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const names = "characters";
  const { data, error } = useData(names, id);
  if (error) return <Error />;
  if (!data) return <Loading />;
  const { images, name, sayings, species, homePlanet, occupation, age } = data;
  return (
    <Container>
      <div key={`character-detail`}>
        <img src={images.main}></img>
        <h1>
          <p>
            {name.first} {name.middle} {name.last} , {age}
          </p>
          <p>{occupation}</p>
          <p>
            {species} from {homePlanet}
          </p>
        </h1>
        <Link href=".">
          <a>
            <ButtonContainer>BACK</ButtonContainer>
          </a>
        </Link>
      </div>
      <SayingsContainer>
        {sayings.map((saying: string) => (
          <p key={`character-detail-${saying}`}>{saying}</p>
        ))}
      </SayingsContainer>
    </Container>
  );
};

// //   gender: string;
//   species: string;
//   homePlanet: string;
//   occupation: string;
//   sayings: [string];
//   id: number;
//   age: string;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1em;
  position: relative;
  p {
    margin: 0.4em 0;
    text-align: center;
  }
  img {
    height: 500px;
  }
`;
const SayingsContainer = styled.div`
  position: relative;
  width: auto;
  background: #f2b279;
  border-radius: 10px;
  font-size: 1.5em;
  margin-top: 1em;
  padding: 1em 2em;
  &::after {
    border-top: 0px solid transparent;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #f2b279;
    content: "";
    position: absolute;
    top: -20px;
    left: 48%;
  }
`;

const ButtonContainer = styled.div`
  border: none;
  background-color: white;
  width: 100px;
  padding: 1em;
  border-radius: 5px;
  position: absolute;
  top: 1em;
  right: 1em;
  font-weight: bold;
`;
export default CharacterDetailPage;
