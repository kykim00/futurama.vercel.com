import type { NextPage } from "next";
import { QuestionCard } from "../../components/QuestionCard";

const QuestionPage: NextPage = () => {
  const name = "questions";
  return <QuestionCard name={name} />;
};

export default QuestionPage;
