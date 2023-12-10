import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Cake,
  Candle,
  Carol,
  Cookie,
  FirePlace,
  Present,
  Reindeer,
  Santa,
  Scarf,
  Snow,
  Snowman,
  Sock,
  Stick,
  Tree,
  Wine,
  Wreath,
} from "../assets/images";
import styled from "styled-components";

const data = {
  ESFP: {
    subtitle: "트리",
    img: Tree,
    subtit1: "크리스마스 트리는요",
    cont1:
      "활발함이 베이스인 다정한 사람입니다. 걱정이 없지는 않지만 자고 일어나면 잊어요. 저 사람은 저러는 이유가 있겠지 그냥 좋게좋게 넘어갑니다. 사람 챙기는거 잘하고 좋아해요. 리더십도 있구요. 자신이 매력있는 것을 자신도 잘 알고 있어요. 금방 사랑에 빠지지만 진심입니다. 개그 욕심도 있고, 웃기고 나면 뿌듯해요. 근데 과해지면 나중에 혼자 후회한답니다 ㅎㅎ",
    subtit2: "잘맞는 캐릭터",
    cont2: "목도리, 산타",
    subtit3: "안맞는 캐릭터",
    cont3: "케잌, 와인, 선물",
  },
  INTJ: {
    subtitle: "쿠키",
    img: Cookie,
    subtit1: "크리스마스 쿠키는요",
    cont1:
      "친해지면 말이 많아지는 편입니다. 챙겨주고 챙김 받는 것 보단 각자 알아서 하는게 나아요. 남들 얘기는 그렇게 궁금하지 않아요. 자기 혼자만의 시간도 바쁘게 잘 보내요. 자신이 꽂힌 거에만 궁금한게 많아요. 겉으론 티내지 않지만 속으론 생각많아요. 완벽을 추구하지만 허당끼도 있답니다 ㅎㅎ",
    subtit2: "잘맞는 캐릭터",
    cont2: "촛불, 양말",
    subtit3: "안맞는 캐릭터",
    cont3: "루돌프, 눈",
  },
  ISFJ: {
    subtitle: "눈",
    img: Snow,
    subtit1: "크리스마스 눈은요",
    cont1:
      "계획을 세워서 사는게 편해요. 맘에 안드는 상황이 오면 입을 닫아버립니다. 다른사람을 잘 관찰하고, 선 넘는 행동은 하지 않아요. 배려심이 있지만 고집도 있어서 남의 말을 잘 안 들어요. 빚지고는 못사는 편이라 받은 만큼 돌려준답니다. 화가 나면 그냥 자버려요. 기분 나쁠까 봐 돌려 말하는 편인데, 폭발하면 무서워요.",
    subtit2: "잘맞는 캐릭터",
    cont2: "눈사람",
    subtit3: "안맞는 캐릭터",
    cont3: "목도리, 쿠키",
  },
  INFJ: {
    subtitle: "벽난로",
    img: FirePlace,
    subtit1: "크리스마스 벽난로는요",
    cont1:
      "생각이 정말 많아 멈추고 싶지만 그게 안돼요. 사실 자신이 생각하는 정답이 있지만, 그럴 수도 있지하고 넘어가요. 선을 지켜줬으면 좋겠어요. 급하게 다가오면 부담스러워요. 예민하고 섬세한 성격이지만 나서서 따지지는 않아요. 뭐 하나에 꽂히면 그거에 과몰입을 잘해요. 웃으면서 넘어가지만 속으로는 넘기지 않고 다 기억합니다. 남들에게는 다정하면서 정작 자신에겐 다정하지 않습니다.",
    subtit2: "잘맞는 캐릭터",
    cont2: "와인",
    subtit3: "안맞는 캐릭터",
    cont3: "캐롤, 지팡이",
  },
  ENFJ: {
    subtitle: "산타",
    img: Santa,
    subtit1: "크리스마스 산타는요",
    cont1:
      "사람을 좋아하지만 자신이 진짜 좋아하는 사람은 따로 있습니다. 말을 듣고 있다면 리액션을 해주세요.좋은 사람이고 싶어서 빈말을 자주하기도 합니다. 섬세하고 눈치가 빠른 편입니다. 말을 하는 것도 좋고 듣는 것도 좋아해요. 쉽게 손절하지 않아 끝까지 지켜보다가 정말 아니다 싶으면 관계를 끊어냅니다. 좋아하면 시선이 가 어쩔 수 없이 티가 납니다.",
    subtit2: "잘맞는 캐릭터",
    cont2: "산타, 리스, 트리",
    subtit3: "안맞는 캐릭터",
    cont3: "캐롤, 지팡이",
  },
  ENTP: {
    subtitle: "케잌",
    img: Cake,
    subtit1: "크리스마스 케잌은요",
    cont1:
      "사람들과 어울리는 것도 좋지만 자기 시간도 필요해요. 자기 말이 맞고 그거에 자부심을 느낍니다. 자존감이 높고 자존심도 센 편이에요. 내뱉는 말과 다르게 속은 착해요. 궁금하게 많고 질문도 많은 편입니다. 말을 센스있게 잘하고 재밌다는 말을 많이 듣습니다. 자신이 좋아하는 사람한테는 정이 엄청 많습니다.",
    subtit2: "잘맞는 캐릭터",
    cont2: "케잌, 캐롤, 루돌프",
    subtit3: "안맞는 캐릭터",
    cont3: "트리, 양말",
  },
  ENFP: {
    subtitle: "선물",
    img: Present,
    subtit1: "크리스마스 선물은요",
    cont1:
      "다정하고 장난기가 많아 장난을 자주칩니다. 웃음이 많지만 다혈질이라 화도 많아요. 눈치가 빠르지만 일부러 눈치 못 챈 척합니다. 혼자 있는 사람을 보면 신경쓰여 챙겨주고 싶어요. 말이 많고, 자신의 얘기 하는 것을 좋아해요. 감정기복 심해요. 근데 이건 내가 해결할 수 있어요. 게으르다가도 뭐에 꽂히면 바로 실행해요. 하지만 금방 식는답니다.",
    subtit2: "잘맞는 캐릭터",
    cont2: "루돌프",
    subtit3: "안맞는 캐릭터",
    cont3: "리스, 트리, 눈사람",
  },
  ESfJ: {
    subtitle: "루돌프",
    img: Reindeer,
    subtit1: "크리스마스 루돌프는요",
    cont1:
      "책임감 강해서 맡은 일은 잘해요. 누가 싫어도 대놓고 티 내지 않아 속으로 생각해요. 남 한테는 관대하지만, 자신에겐 엄격헤요. 리액션을 잘해서 두루두루 잘 어울려요. 남 시선을 신경쓰는 편이라 조금 피곤해요. 얘기 들어주는 거 좋아하고 재밌어요. 자신의 속 얘기를 다 얘기하진 않습니다.",
    subtit2: "잘맞는 캐릭터",
    cont2: "케잌, 선물",
    subtit3: "안맞는 캐릭터",
    cont3: "목도리, 쿠키",
  },
  ENTJ: {
    subtitle: "목도리",
    img: Scarf,
    subtit1: "크리스마스 목도리는요",
    cont1:
      "하나부터 열까지 다 널 위한 잔소리! 일 머리가 있어 척척 해냅니다. 사람을 잘 파악하고 자신이 파악한 것이 맞다고 생각합니다.자신이 좋아하는 사람에게 돈이고 시간이고 다 퍼줍니다. 하고 싶은 말 못 하면 병나요. 마음에 없는 말 못 하지만 사회생활할 땐 자동으로 튀어나와요. 계획한 대로 진행되는 게 좋아요. 효율적이니까요!",
    subtit2: "잘맞는 캐릭터",
    cont2: "리스, 트리",
    subtit3: "안맞는 캐릭터",
    cont3: "목도리, 루돌프, 눈",
  },
  ESTJ: {
    subtitle: "캐롤",
    img: Carol,
    subtit1: "크리스마스 캐롤은요",
    cont1:
      "자신의 얘기를 하는 것을 좋아해요. 말을 잘 하고, 설득력이 있어요. 납득이 가야 이해하고 인정해요. 하고 싶은 말은 하는 편이에요. 돌려 말하지 않아요. 일을 잘 하고, 효율적으로 움직여요. 자신이 잘 알고 있는 걸 설명해 주는 것을 좋아헤요. 굳이 다른 사람에게 의지하지 않아요. 내가 해결해요!",
    subtit2: "잘맞는 캐릭터",
    cont2: "케잌, 와인, 선물",
    subtit3: "안맞는 캐릭터",
    cont3: "산타, 벽난로, 리스",
  },
  ESTP: {
    subtitle: "리스",
    img: Wreath,
    subtit1: "크리스마스 리스는요",
    cont1:
      "자신이 하고싶은 건 해야돼요. 충동적으로 약속잡고 후회하지만, 또 나가면 잘 놀아요. 돌려 말할 필요가 있나요? 그냥 하고 싶은 말을 해요! 화가 항상 많은 편이에요. 내 자신이 좋고 난 잘난 사람이 맞아요. 은근 남을 잘 도와줘요. 근데, 도와주는 자신에 취해있답니다. 크게 스트레스 받지 않으려 하고 잘 까먹어요",
    subtit2: "잘맞는 캐릭터",
    cont2: "목도리, 산타",
    subtit3: "안맞는 캐릭터",
    cont3: "캐롤, 선물, 촛불",
  },
  ISTJ: {
    subtitle: "지팡이",
    img: Stick,
    subtit1: "크리스마스 지팡이는요",
    cont1:
      "안정적이고 잔잔하게 살고싶어해요. 은근 꼰대 기질이 있어요. 민폐 끼치는 행동이 싫고, 절대 안 그러려고 해요. 뭘 하려하면 장비부터 사는 편이에요. 속을 알 수 없다는 말을 종종 듣습니다. 내 관심 밖의 얘기는 정말 흥미가 없습니다. 기억에 남지도 않구요. 쓸데없는 일에 굳이 에너지를 쓰지 않아요. 은근 관심 받는 걸 좋아해요.",
    subtit2: "잘맞는 캐릭터",
    cont2: "촛불, 양말",
    subtit3: "안맞는 캐릭터",
    cont3: "산타, 벽난로",
  },
  INTP: {
    subtitle: "와인",
    img: Wine,
    subtit1: "크리스마스 와인은요",
    cont1:
      "혼자서도 충분히 잘 살 수 있어요. 굳이 자신이 힘든 문제를 털어놓고 싶지 않아요. 뭐 하나에 꽂히면 미친듯이 파고들어요. 그럴 수도 있지~! 쓸데없는 감정 소모하고 싶지 않아요. 눈치는 보는데 눈치 안 봐요. 물건을 잘 버리지 않아요.",
    subtit2: "잘맞는 캐릭터",
    cont2: "캐롤, 벽난로",
    subtit3: "안맞는 캐릭터",
    cont3: "트리, 양말",
  },
  INFP: {
    subtitle: "촛불",
    img: Candle,
    subtit1: "크리스마스 촛불은요",
    cont1:
      "어디에 있어도 분위기를 잘 맞추는 편이에요. 생각이 많고, 생각을 안하려 해도 생각하게 됩니다. 공감 능력이 좋은 편이고 섬세해요. 하지만 선택적 공감능력인걸요. 사소한 거에도 의미 부여를 많이해요. 약속 잡으면 나가기 귀찮은데 막상 나가면 잘 놀아요. 걱정이 많아서 스트레스도 잘 쌓이는 편이에요. 감수성이 풍부하고 상상력이 뛰어나요.",
    subtit2: "잘맞는 캐릭터",
    cont2: "쿠키, 지팡이",
    subtit3: "안맞는 캐릭터",
    cont3: "벽난로, 리스, 눈사람",
  },
  ISTP: {
    subtitle: "눈사람",
    img: Snowman,
    subtit1: "크리스마스 눈사람은요",
    cont1:
      "매사에 귀찮음이 베이스로 깔려있습니다. 약속취소? 그래 그럴 수 있지. 다른 사람한테 관심 없다고 말하지만 은근 관심 가져요. 이해는 안 가지만 귀찮으니 그냥 넘어가요. 뭐든지 자신이 꽂혀야 움직일 수 있어요. 내가 좋아하는 사람들만 만나기 때문에 손절할 일이 드물어요. 그럴 수도 있지 그냥 넘어가요. 에너지가 없거든요.",
    subtit2: "잘맞는 캐릭터",
    cont2: "눈",
    subtit3: "안맞는 캐릭터",
    cont3: "선물",
  },
  ISFP: {
    subtitle: "양말",
    img: Sock,
    subtit1: "크리스마스 양말은요",
    cont1:
      "모든일에 무던한 편이에요. 화내는 것도 에너지가 필요한 걸요? 사실 남한테 관심이 별로 없답니다. 자신이 주도해야 하는 상황은 스트레스에요. 이거 해야지 생각만 하고 실행은 잘 안해요. 자신에게 관심이 많은 것은 싫지만 그렇다고 아예 무관심인 것도 좀 그래요. 질투는 많지만 티는 안내요. 네 말이 맞아라고 하지만 사실 반박하기 귀찮아서 그런거에요. 내 말이 맞아요ㅡㅡ",
    subtit2: "잘맞는 캐릭터",
    cont2: "쿠키, 지팡이",
    subtit3: "안맞는 캐릭터",
    cont3: "케잌, 와인, 눈",
  },
};

export default function ResultPage({ MBTI }) {
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (MBTI) {
      setResult(MBTI);
    }
  }, [MBTI]);

  return (
    <>
      {result && (
        <Wrapper>
          <SubTitle>{data[result].subtitle}</SubTitle>
          <Image src={data[result].img} />
          <SubTitle1>{data[result].subtit1}</SubTitle1>
          <Content1>{data[result].cont1}</Content1>
          <CharacterWrapper>
            <Left>
              <SubTitle2>{data[result].subtit2}</SubTitle2>
              <Content2>{data[result].cont2}</Content2>
            </Left>
            <Right>
              <SubTitle3>{data[result].subtit3}</SubTitle3>
              <Content2>{data[result].cont3}</Content2>
            </Right>
          </CharacterWrapper>

          <ReturnButton
            onClick={() => {
              navigate("/");
            }}
          >
            다시하기
          </ReturnButton>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  flex-direction: column;
  padding: 20px 40px;
  box-sizing: border-box;
`;

const SubTitle = styled.h1`
  color: #ff6e6e;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin: 10px;

  @media screen and (max-width: 425px) {
    width: 200px;
    height: 200px;
  }
`;

const SubTitle1 = styled.h2`
  color: #a05c37;
  margin: 0;

  @media screen and (max-width: 425px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 345px) {
    font-size: 1.3rem;
  }
`;

const Content1 = styled.p`
  padding: 20px;
  border: 1.5px solid #a05c37;
  border-radius: 20px;
  width: 30%;
  text-align: center;
  line-height: 24px;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 530px) {
    width: 70%;
  }
  @media screen and (max-width: 375px) {
    width: 90%;
  }
`;

const CharacterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px;
`;

const Left = styled.div`
  width: 25%;
  float: left;
  text-align: center;
  padding: 10px;
  border: 1.5px solid #14781441;
  border-radius: 20px;

  @media screen and (max-width: 425px) {
    width: 30%;
  }
  @media screen and (max-width: 360px) {
    width: 35%;
  }
`;
const Right = styled.div`
  margin-left: 8px;
  width: 25%;
  float: left;
  text-align: center;
  padding: 10px;
  border: 1.5px solid #eb323242;
  border-radius: 20px;

  @media screen and (max-width: 425px) {
    width: 30%;
  }
  @media screen and (max-width: 360px) {
    width: 35%;
  }
`;

const SubTitle2 = styled.h2`
  margin: 8px;
  color: #147814;

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
const SubTitle3 = styled.h2`
  margin: 8px;
  color: #eb3232;

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Content2 = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 8px;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ReturnButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 16px;
  background-color: #aadcffae;
  cursor: pointer;

  &:hover {
    background-color: #a5d0f0ae;
  }
`;
