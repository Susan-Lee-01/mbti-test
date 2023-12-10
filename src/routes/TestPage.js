import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const data = {
  1: {
    ques: "크리스마스가 다가온다! 나는?",
    ans1: "벌써? 시간 빠르네.",
    ans2: "크리스마스에 뭘 할지 생각한다.",
  },
  2: {
    ques: "크리스마스 이브 집에서 쉬고 있는데 나오라는 친구의 전화",
    ans1: "마침 심심했는데 잘됐다.",
    ans2: "나오라고? 사람도 많을텐데...대충 둘러대고 계속 집에서 쉰다.",
  },
  3: {
    ques: "크리스마스에 쓸데없는 선물 주기 하자! 친구의 말에 나의 속마음은?",
    ans1: "벌써 머릿속에 쓸데없는 선물 몇개를 떠올림.",
    ans2: "쓸데없는걸 굳이 왜...? 하지만 내색하지 않음.",
  },
  4: {
    ques: "크리스마스에 가려던 가게가 예약이 다 차 버렸다! ",
    ans1: "진작 예약하지 않은 나를 원망한다.",
    ans2: "아 아쉽다... 다른데 가지 뭐.",
  },
  5: {
    ques: "자고 일어나면 크리스마스이브! 침대에 누운 나는",
    ans1: "별생각 없다. 잔다.",
    ans2: "내일 무슨 일이 일어날지 상상의 나래를 펼친다.",
  },
  6: {
    ques: "우리 크리스마스에 드레스코드 정해서 만나자!",
    ans1: "1년에 하루뿐이니 특이한 분장을 한다.",
    ans2: "튀기 싫어! 적당히 무난한 옷을 고른다.",
  },
  7: {
    ques: "산타와 루돌프가 선물을 놓고 가려다 내 방을 어질러놨다. 누구에게 더 화가 날까?",
    ans1: "사과는 뒷전, 일단 정리부터 하는 산타!",
    ans2: "정리는 뒷전, 사과부터 하는 루돌프!",
  },
  8: {
    ques: "산타와 루돌프가 수습을 시작했다. 내 방식은?",
    ans1: "그냥 알아서 치워줘.",
    ans2: "이거 먼저 치우고, 다음에 이거 치워줘.",
  },
  9: {
    ques: "수습을 끝낸 산타와 루돌프가 인사를 하고 떠난다. 어떤 모습으로 떠났는가? ",
    ans1: "문을 열고 나간다.",
    ans2: "창문을 열고  하늘로 날아간다.",
  },
  10: {
    ques: "정말 피곤했던 크리스마스 이브 친구가 쓸데없는 선물을 주겠다고 한다.",
    ans1: "내 선물도 챙겨서 바로 나간다!",
    ans2: "이미 에너지를 다 썼어... 다음에 주고받는다",
  },
  11: {
    ques: "내가 정말 쓸데없는 걸 줬다며 친구가 엉엉 울어버린다... 이때 나는?",
    ans1: "당황스럽지만 위로부터 해준다.",
    ans2: "쓸데없는 선물 주기로 한 거 아니야?",
  },
  12: {
    ques: "드디어 내일이 크리스마스! 나는 내일 뭐할까?",
    ans1: "밥 먹고 영화 보고 구경 좀 하고.",
    ans2: "이미 예약을 해놔서 그대로 움직인다.",
  },
};

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
      <Process>{num}/12</Process>
      <H1>Q: {data[num].ques}</H1>
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
        {data[num].ans1}
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
        {data[num].ans2}
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
  background-image: url("https://ifh.cc/g/7Jdljr.jpg");
  background-size: cover;
  padding: 20px;

  @media screen and (max-width: 425px) {
    justify-content: start;
    padding: 40px 0;
  }
`;

const Process = styled.p`
  color: white;
  font-size: 1.5rem;
`;

const H1 = styled.h1`
  color: white;
  background-color: #fc4768ce;
  padding: 20px 40px;
  border-radius: 20px;
  text-align: center;
  margin: 30px 0;
  box-shadow: 1px 1px 6px #b4b4b4;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin: 40px 20px;
    padding: 20px;
  }
  @media screen and (max-width: 425px) {
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
