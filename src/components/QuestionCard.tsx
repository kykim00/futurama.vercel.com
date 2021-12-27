import { useData } from "../hooks/useData";
import { QuestionData } from "../types/question";
import { Error, Loading } from "./";
import styled from "@emotion/styled";
interface QuestionCardProps {
  name: string;
}

export const QuestionCard = ({ name }: QuestionCardProps) => {
  const { data, error } = useData(name, "");
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      <Title>{name.toUpperCase()}</Title>
      {data.map((questionData: QuestionData, index: number) => {
        const { id, question, possibleAnswers, correctAnswer } = questionData;
        return (
          <div key={`futurama-question-${id}`}>
            <form action="submit" name={`form${id}`} target={id + ""}>
              <h2>
                {index + 1}. {question}
              </h2>
              {possibleAnswers.map((answer: string) => {
                return (
                  <label key={answer} htmlFor={answer}>
                    <input
                      type="radio"
                      name="question"
                      id={answer}
                      value={answer}
                    />
                    {answer}
                  </label>
                );
              })}
            </form>
          </div>
        );
      })}
    </div>
  );
};

const Title = styled.h2`
  text-align: center;
  margin: 1em 0 2em 0;
`;
