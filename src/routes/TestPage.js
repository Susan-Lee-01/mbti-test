import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/question.json";
import { Background } from "../assets/images";
import styled from "styled-components";

export default function TestPage({
  EI,
  SN,
  TF,
  JP,
  setEI,
  setSN,
  setTF,
  setJP,
  setMBTI,
}) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const progressPercent = (num / 12) * 100;

  useEffect(() => {
    const count = (arr, val) =>
      arr.reduce((acc, str) => (str === val ? acc + 1 : acc), 0);
    const EIres = count(EI, "E") > count(EI, "I") ? "E" : "I";
    const SNres = count(SN, "S") > count(SN, "N") ? "S" : "N";
    const TFres = count(TF, "T") > count(TF, "F") ? "T" : "F";
    const JPres = count(JP, "J") > count(JP, "P") ? "J" : "P";

    setMBTI(`${EIres}${SNres}${TFres}${JPres}`);
  }, [EI, SN, TF, JP]);

  return (
    <Wrapper>
      <ProgressBar>
        <ProgressFill percent={progressPercent} />
        <ProcessText percent={progressPercent}>{num}/12</ProcessText>
      </ProgressBar>
      <H1>Q: {data[String(num)].ques}</H1>
      <Answer
        onClick={() => {
          setNum(num + 1);
          if (num === 2 || num === 6 || num === 10) {
            setEI([...EI, "E"]);
          } else if (num === 1 || num === 5 || num === 9) {
            setSN([...SN, "S"]);
          } else if (num === 3 || num === 7 || num === 11) {
            setTF([...TF, "T"]);
          } else if (num === 4 || num === 8 || num === 12) {
            setJP([...JP, "J"]);
          }

          if (num === 12) {
            navigate("/result");
          }
        }}
      >
        {data[String(num)].ans1}
      </Answer>
      <Answer
        onClick={() => {
          setNum(num + 1);
          if (num === 2 || num === 6 || num === 10) {
            setEI([...EI, "I"]);
          } else if (num === 1 || num === 5 || num === 9) {
            setSN([...SN, "N"]);
          } else if (num === 3 || num === 7 || num === 11) {
            setTF([...TF, "F"]);
          } else if (num === 4 || num === 8 || num === 12) {
            setJP([...JP, "P"]);
          }

          if (num === 12) {
            navigate("/result");
          }
        }}
      >
        {data[String(num)].ans2}
      </Answer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  position: relative;
  padding: 20px;
  z-index: 1;

  &::before {
    width: 100%;
    height: 100%;
    content: "";
    background: url(${Background}) no-repeat center center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.7;
    pointer-events: none;
  }

  @media screen and (max-width: 425px) {
    justify-content: start;
    padding: 40px 0;
  }
`;

const ProgressBar = styled.div`
  width: 36%;
  height: 16px;
  background-color: #f4ffffc4;
  border-radius: 10px;
  position: relative;
  display: flex;
`;

const ProgressFill = styled.div`
  width: ${(props) => props.percent}%;
  height: 100%;
  background-color: #505050;
  border-radius: ${(props) =>
    props.percent == 100 ? "10px" : "10px 0 0 10px"};
  transition: width 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
`;

const ProcessText = styled.div`
  position: absolute;
  color: ${(props) => (props.percent > 50 ? "white" : "black")};
  font-size: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H1 = styled.h1`
  color: white;
  background-color: #fc4768ce;
  width: 48%;
  padding: 20px 40px;
  border-radius: 20px;
  text-align: center;
  margin: 30px 0;
  box-shadow: 1px 1px 6px #b4b4b4;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    margin: 40px 20px;
    padding: 1.2rem;
    width: 60%;
  }
  @media screen and (max-width: 425px) {
    width: 66%;
  }
`;

const Answer = styled.button`
  width: 58%;
  height: auto;
  min-height: 80px;
  padding: 16px;
  font-size: 1.6rem;
  border-radius: 20px;
  border: none;
  color: #3c3c3c;
  background-color: #f4ffffc4;
  cursor: pointer;
  outline: none;

  & + & {
    margin-top: 8px;
  }
  &:hover {
    color: white;
    background-color: #74d19cba;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    padding: 12px;
  }
  @media screen and (max-width: 425px) {
    font-size: 1.2rem;
    padding: 12px;
  }
`;
