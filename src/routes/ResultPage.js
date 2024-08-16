import { useNavigate } from "react-router-dom";
import data from "../data/result.json";
import { images } from "../assets/images";
import styled from "styled-components";

export default function ResultPage({ MBTI }) {
  const navigate = useNavigate();

  return (
    <>
      {MBTI && (
        <Wrapper>
          <SubTitle>{data[MBTI].subtitle}</SubTitle>
          <Image src={images[data[MBTI].img]} />
          <SubTitle1>{data[MBTI].subtit1}</SubTitle1>
          <Content1>{data[MBTI].cont1}</Content1>
          <CharacterWrapper>
            <Left>
              <SubTitle2>{data[MBTI].subtit2}</SubTitle2>
              <Content2>{data[MBTI].cont2}</Content2>
            </Left>
            <Right>
              <SubTitle3>{data[MBTI].subtit3}</SubTitle3>
              <Content2>{data[MBTI].cont3}</Content2>
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
  align-items: stretch;
  width: 30%;
  margin: 20px;

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

const Left = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  margin-right: 4px;
  border: 1.5px solid #14781441;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Right = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  margin-left: 4px;
  border: 1.5px solid #eb323242;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SubTitle2 = styled.h2`
  margin: 8px;
  color: #147814;
  font-size: 1.2rem;

  @media screen and (max-width: 375px) {
    font-size: 1.3rem;
  }
`;
const SubTitle3 = styled.h2`
  margin: 8px;
  color: #eb3232;
  font-size: 1.2rem;

  @media screen and (max-width: 375px) {
    font-size: 1.3rem;
  }
`;

const Content2 = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 8px;

  @media screen and (max-width: 768px) {
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
