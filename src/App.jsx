// import { useState, useEffect } from "react";
import { Layout, LevelSelection } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LevelPdfs from "./components/LevelPdfs";
import InfoTypeSelector from "./components/InfoTypeSelector";
import LevelVideos from "./components/LevelVideos";
// import Modal from "react-modal";

function App() {
  // const [modalIsOpen, setIsOpen] = useState(true);
  // const [pass, setPass] = useState("");

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (pass === "swim1234") {
  //     closeModal();
  //   } else {
  //   }
  // }

  return (
    <BrowserRouter>
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="pass">Please enter the password</label>
          <div>
            <input
              type="text"
              class="border-blue-100 border-2 rounded"
              id="pass"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </Modal> */}

      <div className="container mx-auto px-4 py-6">
        <Layout />
        <Routes>
          {/* home */}
          <Route path="/" element={<LevelSelection />} />

          {/* Parent-baby */}
          <Route path="/baby-program" element={<LevelSelection />} />
          <Route path="/baby-program/PB" element={<InfoTypeSelector />} />
          <Route path="/baby-program/PT" element={<InfoTypeSelector />} />
          <Route path="/baby-program/ADVPT" element={<InfoTypeSelector />} />
          <Route path="/baby-program/PB/docs" element={<LevelPdfs />} />
          <Route path="/baby-program/PT/docs" element={<LevelPdfs />} />
          <Route path="/baby-program/ADVPT/docs" element={<LevelPdfs />} />
          <Route path="/baby-program/PB/videos" element={<LevelVideos />} />
          <Route path="/baby-program/PT/videos" element={<LevelVideos />} />
          <Route path="/baby-program/ADVPT/videos" element={<LevelVideos />} />

          {/* Water Safety */}
          <Route path="/water-safety-program" element={<LevelSelection />} />
          <Route
            path="/water-safety-program/WS1"
            element={<InfoTypeSelector />}
          />
          <Route
            path="/water-safety-program/WS2"
            element={<InfoTypeSelector />}
          />
          <Route
            path="/water-safety-program/WS3"
            element={<InfoTypeSelector />}
          />
          <Route
            path="/water-safety-program/WS8UP"
            element={<InfoTypeSelector />}
          />
          <Route
            path="/water-safety-program/WS1/docs"
            element={<LevelPdfs />}
          />
          <Route
            path="/water-safety-program/WS2/docs"
            element={<LevelPdfs />}
          />
          <Route
            path="/water-safety-program/WS3/docs"
            element={<LevelPdfs />}
          />
          <Route
            path="/water-safety-program/WS8UP/docs"
            element={<LevelPdfs />}
          />
          <Route
            path="/water-safety-program/WS1/videos"
            element={<LevelVideos />}
          />
          <Route
            path="/water-safety-program/WS2/videos"
            element={<LevelVideos />}
          />
          <Route
            path="/water-safety-program/WS3/videos"
            element={<LevelVideos />}
          />
          <Route
            path="/water-safety-program/WS8UP/videos"
            element={<LevelVideos />}
          />

          {/* STROKE */}
          <Route path="/stroke-program" element={<LevelSelection />} />
          <Route path="/stroke-program/ST1" element={<InfoTypeSelector />} />
          <Route path="/stroke-program/ST2" element={<InfoTypeSelector />} />
          <Route path="/stroke-program/ST3" element={<InfoTypeSelector />} />
          <Route path="/stroke-program/ST1/docs" element={<LevelPdfs />} />
          <Route path="/stroke-program/ST2/docs" element={<LevelPdfs />} />
          <Route path="/stroke-program/ST3/docs" element={<LevelPdfs />} />
          <Route path="/stroke-program/ST1/videos" element={<LevelVideos />} />
          <Route path="/stroke-program/ST2/videos" element={<LevelVideos />} />
          <Route path="/stroke-program/ST3/videos" element={<LevelVideos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
