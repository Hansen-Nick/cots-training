import { useState, useEffect } from "react";
import { Layout, Home } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LevelPdfs from "./components/LevelPdfs";
import QuizList from "./components/QuizList";
import QuizPage from "./components/QuizPage";
import InfoTypeSelector from "./components/InfoTypeSelector";
import LevelVideos from "./components/LevelVideos";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto px-4 py-6">
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ws-1" element={<InfoTypeSelector />} />
          <Route path="/ws-1/docs" element={<LevelPdfs />} />
          <Route path="/ws-1/videos" element={<LevelVideos />} />
          <Route path="/quizzes" element={<QuizList />} />
          <Route path="/quizzes/:id" element={<QuizPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
