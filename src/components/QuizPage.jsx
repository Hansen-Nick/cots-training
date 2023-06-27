import Quiz from "react-quiz-component";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function QuizPage() {
  const { id } = useParams();
  const [questionData, setQuestionData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/quizzes/${id}?populate=*`)
      .then(({ data }) => {
        setQuestionData({
          ...data.data.attributes.questionData,
          quizTitle: data.data.attributes.QuizTitle,
        });
        console.log(data.data.attributes);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("questionData", questionData);
  if (Object.keys(questionData).length === 0) {
    console.log("hit loading");
    return <p>Loading...</p>;
  }

  return (
    <p>
      <Quiz quiz={questionData} />
    </p>
  );
}
