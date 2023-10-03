import Quiz from "react-quiz-component";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function QuizPage() {
  const { id } = useParams();
  const [questionData, setQuestionData] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://cots-strapi-production.up.railway.app/api/quizzes/${id}?populate=*`
      )
      .then(({ data }) => {
        setQuestionData({
          ...data.data.attributes.questionData,
          quizTitle: data.data.attributes.QuizTitle,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  if (Object.keys(questionData).length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <p>
      <Quiz quiz={questionData} />
    </p>
  );
}
