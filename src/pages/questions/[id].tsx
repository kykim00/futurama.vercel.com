import { NextPage } from "next";
import { Error, Loading } from "../../components";
import { useRouter } from "next/router";
import { useData } from "../../hooks/useData";
import styled from "@emotion/styled";
import Link from "next/link";

const CharacterDetailPage: NextPage = () => {
  const router = useRouter();
  const id: string = router.query.id as string;
  const names = "questions";
  const { data, error } = useData(names, id);
  if (error) return <Error />;
  if (!data) return <Loading />;
  const { question, possibleAnswers, correctAnswer } = data;
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === correctAnswer) {
      alert("Correct !");
      if (id === "28") {
        alert("All done !");
        router.push("/questions");
      } else {
        router.push(`${parseInt(id) + 1}`);
      }
    } else {
      alert("Wrong ...");
    }
  };
  return (
    <Container>
      <div key={`character-detail`}>
        <h1>
          Q {id}. {question}
        </h1>
        <Link href=".">
          <a>
            <ButtonContainer>BACK</ButtonContainer>
          </a>
        </Link>
      </div>
      <form>
        <InputContainer>
          {possibleAnswers.map((answer: string) => (
            <label key={answer} htmlFor={answer}>
              <input
                onChange={inputChangeHandler}
                type="radio"
                name="question"
                id={answer}
                value={answer}
              />
              {answer}
            </label>
          ))}
        </InputContainer>
      </form>
      <p className="hidden">{correctAnswer}</p>
    </Container>
  );
};

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
  h1 {
    max-width: 960px;
  }
`;
const InputContainer = styled.div`
  background: #f2b279;
  border-radius: 10px;
  font-size: 1.1em;
  font-weight: bold;
  margin-top: 1em;
  padding: 1em 5em 1em 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label + label {
    margin-top: 1em;
  }
  input {
    margin-right: 2em;
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
  &:hover {
    background-color: #f2b279;
  }
  @media (max-width: 1280px) {
    top: -2.5em;
  }
`;

export default CharacterDetailPage;
