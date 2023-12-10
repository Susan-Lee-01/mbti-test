import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./routes/MainPage";
import TestPage from "./routes/TestPage";
import ResultPage from "./routes/ResultPage";

export default function App() {
  const [EI, setEI] = useState([]);
  const [SN, setSN] = useState([]);
  const [TF, setTF] = useState([]);
  const [JP, setJP] = useState([]);

  const [MBTI, setMBTI] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <MainPage setEI={setEI} setSN={setSN} setTF={setTF} setJP={setJP} />
          }
        />
        <Route
          path="/test"
          element={
            <TestPage
              EI={EI}
              SN={SN}
              TF={TF}
              JP={JP}
              setEI={setEI}
              setSN={setSN}
              setTF={setTF}
              setJP={setJP}
              setMBTI={setMBTI}
            />
          }
        />
        <Route path="/result" element={<ResultPage MBTI={MBTI} />} />
      </Routes>
    </BrowserRouter>
  );
}
