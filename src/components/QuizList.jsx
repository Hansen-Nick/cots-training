import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import QuizCard from "./QuizCard";

export default function QuizList() {
  //TODO: Get quizzes
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://cots-strapi-production.up.railway.app/api/quizzes?populate=*`
      )
      .then(({ data }) => {
        setQuizzes(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {quizzes.map((quiz) => (
        <Link to={`/quizzes/${quiz.id}`}>
          {" "}
          <QuizCard info={quiz} />
        </Link>
      ))}
    </div>
  );
}
